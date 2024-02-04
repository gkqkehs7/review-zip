import ReviewPictureComponent from '@/components/myProfilePageComponent/reviewPicturesComponent/reviewPictureComponent';
import ExitSearchComponent from '@/components/hashtagPageComponent/exitSearchComponent/exitSearchComponent';
import HashtagTopComponent from '@/components/hashtagPageComponent/hashtagTopComponent/hashtagTopComponent';
import DropdownComponent from '@/components/hashtagPageComponent/dropdownComponent/dropdownComponent';

import styles from './style';

import MainLogo from '/images/myProfilePage/MainLogoImage.png';

const hashtagPictures = [
  {
    reviewImage: 'images/hashtagPage/Component1.png',
    postId: '',
    likes: 432,
    saves: 21,
  },
  {
    reviewImage: 'images/hashtagPage/Component2.png',
    postId: '',
    likes: 34,
    saves: 29,
  },
  {
    reviewImage: 'images/hashtagPage/Component3.png',
    postId: '',
    likes: 76,
    saves: 65,
  },
  {
    reviewImage: 'images/hashtagPage/Component4.png',
    postId: '',
    likes: 22,
    saves: 18,
  },
  {
    reviewImage: 'images/hashtagPage/Component2.png',
    postId: '',
    likes: 91,
    saves: 87,
  },
  {
    reviewImage: 'images/hashtagPage/Component6.png',
    postId: '',
    likes: 15,
    saves: 13,
  },
  {
    reviewImage: 'images/hashtagPage/Component6.png',
    postId: '',
    likes: 45,
    saves: 39,
  },
  {
    reviewImage: 'images/hashtagPage/Component6.png',
    postId: '',
    likes: 68,
    saves: 70,
  },
  {
    reviewImage: 'images/hashtagPage/Component6.png',
    postId: '',
    likes: 53,
    saves: 49,
  },
];

const HashtagPage = () => {
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
        {/*<ReviewPictureComponent storageIsClicked={false} curtPost={} />*/}
      </styles.HashtagContainer>
    </styles.Container>
  );
};

export default HashtagPage;
