import { useState, useEffect } from 'react';

import ImageSliderComponent from '@/components/common/imageSliderComponent/imageSliderComponent';
import UploadImageComponent from '@/components/uploadPostComponent/uploadImageComponent/uploadImageComponent';

import styles from './style';
import ImageUploadedImage from '/images/uploadPost/ImageUploaded.png';
import ImageNotUploadedImage from '/images/uploadPost/ImageNotUploaded.png';
import ImageListComponent from '../imageListComponent/imageListComponent';

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

      <ImageListComponent
        postImages={postImages}
        setPostImages={setPostImages}
      />

      {/* 이미지 업로드 여부 이미지 */}
      {postImages.length > 0 ? (
        <styles.ImageUploadedContainer>
          <styles.ImageUploaded src={ImageUploadedImage} />
        </styles.ImageUploadedContainer>
      ) : (
        <styles.ImageUploadedContainer>
          <styles.ImageUploaded src={ImageNotUploadedImage} />
        </styles.ImageUploadedContainer>
      )}
    </styles.Container>
  );
};

export default UploadPostLeftComponent;
