import ImageSliderComponent from '@/components/common/imageSliderComponent/imageSliderComponent';
import UploadImageComponent from '@/components/uploadPostComponent/uploadImageComponent/uploadImageComponent';

import { IPost } from '@/types/posts.types';

import styles from './style';
import SpaceShipImage from '/images/post/SpaceShip.png';

interface UploadPostLeftComponentProps {
  split: boolean;
  post: IPost;
  splitPost: () => void;
}

const UploadPostLeftComponent: React.FC<UploadPostLeftComponentProps> = ({
  split,
  post,
  splitPost,
}) => {
  return (
    <styles.Container splitPost={split}>
      {/* 윗부분 뒤로가기, 텍스트 */}
      <styles.TopContainer>
        <styles.ToNextText onClick={splitPost}>다음</styles.ToNextText>
      </styles.TopContainer>

      {/* 윗 부분 선 */}
      <styles.Line />

      {/* image slider */}
      <UploadImageComponent />
      {/* <ImageSliderComponent sliderImages={post.postImages} /> */}

      {/* 우주선 이미지 */}
      <styles.SpaceShipImageContainer>
        <styles.SpaceShipImage src={SpaceShipImage} />
      </styles.SpaceShipImageContainer>
    </styles.Container>
  );
};

export default UploadPostLeftComponent;
