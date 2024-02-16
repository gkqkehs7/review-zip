import { useCallback, Dispatch, SetStateAction, useRef } from 'react';

import styles from './style';
import ImagePlusButtomImage from '/images/uploadPost/ImagePlusButton.png';
import ImagePlusButtonBackgroundImage from '/images/uploadPost/ImagePlusButtonBackground.png';

interface ImageListComponentProps {
  postImages: { id: number; url: string }[];
  setPostImages: Dispatch<SetStateAction<{ id: number; url: string }[]>>;
  imageListOpen: boolean;
  setClickedImage: Dispatch<SetStateAction<string>>;
  files: { id: number; file: File }[];
  setFiles: React.Dispatch<React.SetStateAction<{ id: number; file: File }[]>>;
}

const ImageListComponent: React.FC<ImageListComponentProps> = ({
  postImages,
  setPostImages,
  imageListOpen,
  setClickedImage,
  files,
  setFiles,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // 파일 업로드
  const handleFileUpload = (files: FileList | null): void => {
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File = files[i];

        setFiles!((prevFiles) => [
          ...prevFiles,
          { id: prevFiles.length, file: file },
        ]);

        const reader: FileReader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
          const arrayBuffer: ArrayBuffer | null = e.target
            ?.result as ArrayBuffer;

          const blob: Blob = new Blob([arrayBuffer as ArrayBuffer], {
            type: file.type,
          });

          const imageUrl: string = URL.createObjectURL(blob);

          setPostImages((prevPostImages) => [
            ...prevPostImages,
            { id: prevPostImages.length, url: imageUrl },
          ]);

          // 클릭된 이미지 보이게 하기
          setClickedImage(imageUrl);
        };

        reader.readAsArrayBuffer(file);
      }
    }
  };

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      handleFileUpload(files);
    },
    [],
  );

  // 이미지 삭제
  const deleteImage = (postImageId: number) => {
    // TODO: 여기서 files도 삭제 해줘야 함
    const updatedPreviewImages = postImages.filter(
      (image) => image.id !== postImageId,
    );

    const updateFiles = files.filter((file) => file.id !== postImageId);

    setPostImages(updatedPreviewImages);
    setFiles(updateFiles);
  };

  return (
    <styles.Container style={{ display: imageListOpen ? 'flex' : 'none' }}>
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
          <styles.ImageContainer
            key={postImage.id}
            onClick={() => setClickedImage(postImage.url)}
          >
            <styles.Image src={postImage.url}></styles.Image>
            <styles.ImageDeleteButton onClick={() => deleteImage(postImage.id)}>
              x
            </styles.ImageDeleteButton>
          </styles.ImageContainer>
        );
      })}
    </styles.Container>
  );
};

export default ImageListComponent;
