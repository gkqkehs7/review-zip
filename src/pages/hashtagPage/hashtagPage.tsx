import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewPictureComponent from '@/components/myProfilePageComponent/reviewPicturesComponent/reviewPictureComponent';
import ExitSearchComponent from '@/components/hashtagPageComponent/exitSearchComponent/exitSearchComponent';
import HashtagTopComponent from '@/components/hashtagPageComponent/hashtagTopComponent/hashtagTopComponent';
import DropdownComponent from '@/components/hashtagPageComponent/dropdownComponent/dropdownComponent';
import { CurtPost, Post } from '@/types/common.types';
import { GetUserPostsResponse } from '@/types/response.types';
import { GetAxiosInstance } from '@/api/axios.methods';
import styles from './style';
import MainLogo from '/images/myProfilePage/MainLogoImage.png';

const HashtagPage: React.FC = () => {
  const { hashtagId } = useParams();

  const [post, setPost] = useState<CurtPost[]>(defaultCurtPost);
  const [postId, setPostId] = useState<number>(0);
  const [postIsClicked, setPostIsClicked] = useState<boolean>(false);

  //prop으로 내릴 post 가져오기
  const getPost = async () => {
    try {
      const response = await GetAxiosInstance<GetUserPostsResponse>(
        `/v1/posts/hashtags/${hashtagId}?page=0&size=8`,
      );
      //if (!response.data.result.postList[0].postId) {
      setPost(response.data.result.postList);
    } catch (error) {
      console.log(error);
    }
  };
  console.log('post:', post);
  useEffect(() => {
    if (hashtagId) {
      getPost();
    }
  }, [hashtagId]);

  return (
    <styles.Container>
      {/*상단의 메인로고와 돋보기, 취소 버튼을 포함한 컴포넌트가 들어 있는 컨테이너*/}
      <styles.MainLogoContainer>
        <styles.MainLogoImage src={MainLogo} />
        <ExitSearchComponent />
      </styles.MainLogoContainer>
      <styles.HashtagContainer>
        {/*유저가 검색한 해시태그와 해당 태그 수를 표시하는 컴포넌트 */}
        <HashtagTopComponent />
        {/*최신순 정렬을 기본으로 하는 드롭다운 컴포넌트 */}
        <DropdownComponent />
        {/*해시태그 이미지 컴포넌트  */}
        {post && (
          <ReviewPictureComponent
            curtPost={post}
            setPostISClicked={setPostIsClicked}
            setPostId={setPostId}
          />
        )}
      </styles.HashtagContainer>
    </styles.Container>
  );
};

const defaultCurtPost = [
  {
    postId: 0,
    postImageUrl: '',
    likeNum: 0,
    scrabNum: 0,
  },
];

export default HashtagPage;
