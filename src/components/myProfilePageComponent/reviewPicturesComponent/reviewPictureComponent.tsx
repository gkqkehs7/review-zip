import styles from './style';
import StarImage from '/images/myProfilePage/StarImage.png';
import Storage from '/images/myProfilePage/StorageImage.png';

const posts = [
  { reviewImage: 'images/myProfilePage/Component10.png', postId: '' },
  { reviewImage: 'images/myProfilePage/ReviewPicture.png', postId: '' },
  { reviewImage: 'images/myProfilePage/Component12.png', postId: '' },
  { reviewImage: 'images/myProfilePage/Component13.png', postId: '' },
  { reviewImage: 'images/myProfilePage/Component14.png', postId: '' },
  { reviewImage: 'images/myProfilePage/Component15.png', postId: '' },
  { reviewImage: 'images/myProfilePage/ReviewPicture.png', postId: '' },
  { reviewImage: 'images/myProfilePage/ReviewPicture.png', postId: '' },
  { reviewImage: 'images/myProfilePage/ReviewPicture.png', postId: '' },
];

const storage = [
  { reviewImage: 'images/myProfilePage/Component1.png', postId: '' },
  { reviewImage: 'images/myProfilePage/Component2.png', postId: '' },
  { reviewImage: 'images/myProfilePage/Component3.png', postId: '' },
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
          <styles.Picture src={post.reviewImage} alt={post.postId} />
          <styles.IconContainer>
            <styles.IconBox>
              <styles.Icon src={StarImage} />
              <styles.Count>432</styles.Count>
            </styles.IconBox>
            <styles.IconBox>
              <styles.Icon src={Storage} />
              <styles.Count>21</styles.Count>
            </styles.IconBox>
          </styles.IconContainer>
          {/**/}
        </styles.PictureContainer>
      ))}
    </styles.RveiwPicturesContainer>
  );
};

export default ReviewPictureComponent;
