import styles from './style';
import StarImage from '/images/myProfilePage/StarImage.png';
import Storage from '/images/myProfilePage/StorageImage.png';
import Union from '/images/myProfilePage/Union.png';

const posts = [
  {
    reviewImage: 'images/myProfilePage/Component10.png',
    postId: '',
    likes: 432,
    saves: 21,
  },
  {
    reviewImage: 'images/myProfilePage/ReviewPicture.png',
    postId: '',
    likes: 34,
    saves: 29,
  },
  {
    reviewImage: 'images/myProfilePage/Component12.png',
    postId: '',
    likes: 76,
    saves: 65,
  },
  {
    reviewImage: 'images/myProfilePage/Component13.png',
    postId: '',
    likes: 22,
    saves: 18,
  },
  {
    reviewImage: 'images/myProfilePage/Component14.png',
    postId: '',
    likes: 91,
    saves: 87,
  },
  {
    reviewImage: 'images/myProfilePage/Component15.png',
    postId: '',
    likes: 15,
    saves: 13,
  },
  {
    reviewImage: 'images/myProfilePage/ReviewPicture.png',
    postId: '',
    likes: 45,
    saves: 39,
  },
  {
    reviewImage: 'images/myProfilePage/ReviewPicture.png',
    postId: '',
    likes: 68,
    saves: 70,
  },
  {
    reviewImage: 'images/myProfilePage/ReviewPicture.png',
    postId: '',
    likes: 53,
    saves: 49,
  },
];

const storage = [
  {
    reviewImage: 'images/myProfilePage/Component1.png',
    postId: '',
    likes: 103,
    saves: 47,
  },
  {
    reviewImage: 'images/myProfilePage/Component2.png',
    postId: '',
    likes: 380,
    saves: 31,
  },
  {
    reviewImage: 'images/myProfilePage/Component3.png',
    postId: '',
    likes: 84,
    saves: 79,
  },
];
interface ChangePageProps {
  storageIsClicked: boolean;
}

const ReviewPictureComponent: React.FC<ChangePageProps> = ({
  storageIsClicked,
}) => {
  return (
    <styles.RveiwPicturesContainer>
      {/*props를 받아서 저장소 버튼이 클릭이 되어있으면 저장소 데이터 배열을 map에 전달하고 게시물을 클릭하면 해당 데이터를 전달 */}
      {(storageIsClicked ? storage : posts).map((post, index) => (
        <styles.PictureContainer key={index}>
          <styles.PictureBorder>
            <styles.Picture src={post.reviewImage} alt={post.postId} />
          </styles.PictureBorder>
          {/* 게시물의 좋아요가 100개 이상인 경우 Union 아이콘 표시 */}
          {post.likes > 100 ? (
            <styles.IconUnion src={Union} alt="Union" />
          ) : (
            <styles.IconUnion style={{ visibility: 'hidden' }} />
          )}
          {/* 게시물에 마우스 hover시에만 보일 아이콘들 */}
          <styles.IconContainer>
            <styles.IconBox>
              <styles.Icon src={StarImage} />
              <styles.Count>{post.likes}</styles.Count>
            </styles.IconBox>
            <styles.IconBox>
              <styles.Icon src={Storage} />
              <styles.Count>{post.saves}</styles.Count>
            </styles.IconBox>
          </styles.IconContainer>
        </styles.PictureContainer>
      ))}
    </styles.RveiwPicturesContainer>
  );
};

export default ReviewPictureComponent;
