import styles from './style';

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

const ReviewPictureComponent = () => {
  return (
    <styles.RveiwPicturesContainer>
      {posts.map((post, index) => (
        <styles.PictureContainer key={index}>
          <styles.Picture src={post.reviewImage} alt={post.postId} />
        </styles.PictureContainer>
      ))}
    </styles.RveiwPicturesContainer>
  );
};

export default ReviewPictureComponent;
