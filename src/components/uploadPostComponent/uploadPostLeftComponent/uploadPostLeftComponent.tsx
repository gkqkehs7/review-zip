import { useEffect, useState } from 'react';

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
  const [clickedImage, setClickedImage] = useState<string>('');

  const [imageListOpen, setImageListOpen] = useState<boolean>(false);

  useEffect(() => {}, [clickedImage]);

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
          <styles.Image src={clickedImage} />
        </styles.ImageContainer>
      ) : (
        <UploadImageComponent
          postImages={postImages}
          setPostImages={setPostImages}
          setClickedImage={setClickedImage}
        />
      )}

      {/* 업로드한 이미지들 작게 보이는 component */}
      <ImageListComponent
        postImages={postImages}
        setPostImages={setPostImages}
        imageListOpen={imageListOpen}
        setClickedImage={setClickedImage}
      />

      {/* 이미지 업로드 여부 이미지 */}
      {postImages.length > 0 ? (
        <styles.ImageUploadedContainer>
          <styles.ImageUploaded
            src={ImageUploadedImage}
            onClick={togglemageList}
          />
        </styles.ImageUploadedContainer>
      ) : (
        <styles.ImageUploadedContainer>
          <styles.ImageUploaded
            src={ImageNotUploadedImage}
            onClick={togglemageList}
          />
        </styles.ImageUploadedContainer>
      )}
    </styles.Container>
  );
};

export default UploadPostLeftComponent;
