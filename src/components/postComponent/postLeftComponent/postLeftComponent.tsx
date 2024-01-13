import ImageSliderComponent from '@/components/common/imageSliderComponent/imageSliderComponent';

import { IPost } from '@/types/posts.types';

import styles from './style';
import SpaceShipImage from '/images/Post/SpaceShip.png';

interface PostLeftComponentProps {
  splitPost: () => void;
  post: IPost;
}

const PostLeftComponent: React.FC<PostLeftComponentProps> = ({
  splitPost,
  post,
}) => {
  return (
    <styles.Container>
      <styles.TopContainer>
        <styles.BackButton onClick={splitPost} />
        <styles.TopText> 나의 우주에게</styles.TopText>
      </styles.TopContainer>

      <styles.Line />

      {/* image slider */}
      <ImageSliderComponent sliderImages={post.postImages} />

      <styles.SpaceShipImageContainer>
        <styles.SpaceShipImage src={SpaceShipImage} />
      </styles.SpaceShipImageContainer>
    </styles.Container>
  );
};

export default PostLeftComponent;
