import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';
import ReviewPictureComponent from '@/components/myProfilePageComponent/reviewPicturesComponent/reviewPictureComponent';

import { Post } from '@/types/common.types';
import { GetUserPostsResponse } from '@/types/response.types';

import { GetAxiosInstance } from '@/api/axios.methods';
import styles from './style';

const HashtagPage: React.FC = () => {
  const { hashtagId } = useParams();

  const [posts, setPosts] = useState<Post[]>([]);
  const [postId, setPostId] = useState<number>(0);
  const [postIsClicked, setPostIsClicked] = useState<boolean>(false);

  //prop으로 내릴 post 가져오기
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
    getPost();
  }, []);

  return (
    <styles.Container>
      <GroupBarComponent direction="col" color="purple" />

      <styles.HashtagContainer>
        <styles.HashtagTopContainer>
          <div>
            <styles.TagName>#강남역</styles.TagName>
          </div>
          <div>
            <styles.TagCount>태그 10</styles.TagCount>
          </div>
        </styles.HashtagTopContainer>
      </styles.HashtagContainer>

      {/*해시태그 이미지 컴포넌트  */}
      {posts && (
        <ReviewPictureComponent setPostIsClicked={true} posts={posts} />
      )}
    </styles.Container>
  );
};

export default HashtagPage;
