import { Link, useNavigate } from 'react-router-dom';
import styles from './style';

import MainLogo from '/images/myProfilePage/MainLogoImage.png';
import Down from '/images/hashtagPage/DownImage.png';
import ReviewPictureComponent from '@/components/myProfilePageComponent/reviewPicturesComponent/reviewPictureComponent';

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
  const navigate = useNavigate();
  return (
    <styles.Container>
      <styles.MainLogoContainer>
        <styles.MainLogoImage src={MainLogo} />
        <styles.ExitSearchContainer>
          <Link to="/searchPage">
            <styles.SearchIcon />
          </Link>
          <styles.ExitButton
            onClick={() => {
              navigate(-1);
            }}
          />
        </styles.ExitSearchContainer>
      </styles.MainLogoContainer>
      <styles.HashtagContainer>
        <styles.HashtagTopContainer>
          <div>
            <styles.TagName>#강남역</styles.TagName>
          </div>
          <div>
            <styles.TagCount>태그 56</styles.TagCount>
          </div>
        </styles.HashtagTopContainer>
        <styles.DropdownContainer>
          <styles.SortDropdown>최신순</styles.SortDropdown>
          <styles.DownImage src={Down} />
        </styles.DropdownContainer>
        <ReviewPictureComponent
          storageIsClicked={false}
          picture={hashtagPictures}
        />
      </styles.HashtagContainer>
    </styles.Container>
  );
};

export default HashtagPage;
