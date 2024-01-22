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

  const [imageListOpen, setImageListOpen] = useState<boolean>(false);

  const togglemageList = () => {
    setImageListOpen(!imageListOpen);
  };

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
        <styles.ImageContainer>
          <styles.Image src={postImages[postImages.length - 1].url} />
        </styles.ImageContainer>
      ) : (
        <UploadImageComponent
          postImages={postImages}
          setPostImages={setPostImages}
        />
      )}

      {/* 업로드한 이미지들 작게 보이는 component */}
      <ImageListComponent
        postImages={postImages}
        setPostImages={setPostImages}
        imageListOpen={imageListOpen}
      />

      {/* 이미지 업로드 여부 이미지 */}
      {postImages.length > 0 ? (
        <styles.ImageUploadedContainer onClick={togglemageList}>
          <styles.ImageUploaded src={ImageUploadedImage} />
        </styles.ImageUploadedContainer>
      ) : (
        <styles.ImageUploadedContainer onClick={togglemageList}>
          <styles.ImageUploaded src={ImageNotUploadedImage} />
        </styles.ImageUploadedContainer>
      )}
    </styles.Container>
  );
};

export default UploadPostLeftComponent;
