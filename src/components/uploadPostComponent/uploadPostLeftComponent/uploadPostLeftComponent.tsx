import { useState, useEffect } from 'react';

import ImageSliderComponent from '@/components/common/imageSliderComponent/imageSliderComponent';
import UploadImageComponent from '@/components/uploadPostComponent/uploadImageComponent/uploadImageComponent';

import styles from './style';
import SpaceShipImage from '/images/post/SpaceShip.png';

interface UploadPostLeftComponentProps {
  split: boolean;
  splitPost: () => void;
}

const UploadPostLeftComponent: React.FC<UploadPostLeftComponentProps> = ({
  split,
  splitPost,
}) => {
  const [postImages, setPostImages] = useState<{ id: number; url: string }[]>(
    [],
  );

  useEffect(() => {
    console.log(postImages);
  }, [postImages]);

  return (
    <styles.Container splitPost={split}>
      {/* 윗부분 뒤로가기, 텍스트 */}
      <styles.TopContainer>
        <styles.ToNextText onClick={splitPost}>다음</styles.ToNextText>
      </styles.TopContainer>

      {/* 윗 부분 선 */}
      <styles.Line />

      {/* image slider */}
      {postImages.length > 0 ? (
        <ImageSliderComponent sliderImages={postImages} />
      ) : (
        <UploadImageComponent
          postImages={postImages}
          setPostImages={setPostImages}
        />
      )}

      {/* 우주선 이미지 */}
      <styles.SpaceShipImageContainer>
        <styles.SpaceShipImage src={SpaceShipImage} />
      </styles.SpaceShipImageContainer>
    </styles.Container>
  );
};

export default UploadPostLeftComponent;
