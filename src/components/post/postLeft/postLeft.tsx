import styles from './style';
import ImageSlider from '../imageSlider/imageSlider';
import SpaceShipImage from '../../../../public/images/Post/spaceShip.png';
import { IPost } from '../../../types/posts.types';

interface PostLeftProps {
  splitPost: () => void;
  post: IPost;
}

const PostLeft: React.FC<PostLeftProps> = ({ splitPost, post }) => {
  return (
    <styles.Container>
      <styles.TopContainer>
        <styles.BackButton onClick={splitPost} />
        <styles.TopText> 나의 우주에게</styles.TopText>
      </styles.TopContainer>

      <styles.Line />

      {/* image slider */}
      <ImageSlider sliderImages={post.postImages} />

      <styles.SpaceShipImageContainer>
        <styles.SpaceShipImage src={SpaceShipImage} />
      </styles.SpaceShipImageContainer>
    </styles.Container>
  );
};

export default PostLeft;
