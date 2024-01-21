import { useCallback, Dispatch, SetStateAction, useRef } from 'react';
import { faker } from '@faker-js/faker';

import styles from './style';
import ImagePlusButtomImage from '/images/uploadPost/ImagePlusButton.png';
import ImagePlusButtonBackgroundImage from '/images/uploadPost/ImagePlusButtonBackground.png';

interface ImageListComponentProps {
  postImages: { id: number; url: string }[];
  setPostImages: Dispatch<SetStateAction<{ id: number; url: string }[]>>;
}

const ImageListComponent: React.FC<ImageListComponentProps> = ({
  postImages,
  setPostImages,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log('Uploading file:', file);
      }

      // 잠시 s3전에 쓰는 가상 코드
      setPostImages([
        ...postImages,
        { id: postImages.length + 1, url: faker.image.image() },
      ]);
    }
  };

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      handleFileUpload(files);
    },
    [],
  );

  return (
    <styles.Container>
      <styles.ImagePlusButtonContainer
        onClick={() => {
          fileInputRef.current?.click();
        }}
      >
        <styles.ImagePlusButtonBackground
          src={ImagePlusButtonBackgroundImage}
        />
        <styles.ImagePlusButton src={ImagePlusButtomImage} />

        <styles.InputButton
          type="file"
          ref={fileInputRef}
          style={{
            display: 'none',
          }}
          onChange={handleFileInputChange}
          accept="image/*, video/*"
        />
      </styles.ImagePlusButtonContainer>

      {postImages.map((postImage) => {
        return (
          <styles.ImageContainer key={postImage.id}>
            <styles.Image src={postImage.url} />
          </styles.ImageContainer>
        );
      })}
    </styles.Container>
  );
};

export default ImageListComponent;
