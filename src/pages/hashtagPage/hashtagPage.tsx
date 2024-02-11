import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';
import ReviewPictureComponent from '@/components/myProfilePageComponent/reviewPicturesComponent/reviewPictureComponent';
import LoadingModalComponent from '@/components/common/loadingModalComponent/loadingModalComponent';
import PostComponent from '@/components/postComponent/postComponent';

import { GetAxiosInstance } from '@/api/axios.methods';
import { Hashtag, Post } from '@/types/common.types';
import {
  GetHashtagInfoResponse,
  GetUserPostsResponse,
} from '@/types/response.types';

import styles from './style';

const HashtagPage: React.FC = () => {
  const { hashtagId } = useParams();

  const [hashtagInfo, setHashtagInfo] = useState<Hashtag>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [clickedPost, setClickedPost] = useState<Post>();

  // 해시태그 정보 가져오기
  const getHashtagInfo = async () => {
    try {
      const response = await GetAxiosInstance<GetHashtagInfoResponse>(
        `/v1/hashtags/${hashtagId}`,
      );

      setHashtagInfo(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  // 해당 해시태그에 딸린 posts들 가져오기
  const getPost = async () => {
    try {
      const response = await GetAxiosInstance<GetUserPostsResponse>(
        `/v1/posts/hashtags/${hashtagId}`,
      );

      setPosts(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHashtagInfo();
    getPost();
  }, []);

  return (
    <>
      {hashtagInfo ? (
        <styles.Container>
          <GroupBarComponent direction="col" color="purple" />

          <styles.HashtagContainer>
            <styles.HashtagTopContainer>
              <styles.TagName>{hashtagInfo.tagName}</styles.TagName>

              <styles.TagCount>태그 {hashtagInfo.postNum}</styles.TagCount>
            </styles.HashtagTopContainer>
          </styles.HashtagContainer>

          {/*해시태그 이미지 컴포넌트  */}
          {posts && (
            <ReviewPictureComponent
              setClickedPost={setClickedPost}
              posts={posts}
            />
          )}

          {/* 클릭한 post */}
          {clickedPost && (
            <styles.PostOverlay>
              <PostComponent
                post={clickedPost}
                setClickedPost={setClickedPost}
                canDelete={false}
              />
            </styles.PostOverlay>
          )}
        </styles.Container>
      ) : (
        <LoadingModalComponent message="데이터를 불러오는 중입니다" />
      )}
    </>
  );
};

export default HashtagPage;
