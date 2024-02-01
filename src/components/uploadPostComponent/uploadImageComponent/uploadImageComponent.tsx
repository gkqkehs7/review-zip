import { useCallback, useState, useRef, Dispatch, SetStateAction } from 'react';

import styles from './style';
import UploadImagePictureImage from '/images/uploadPost/UploadImagePicture.png';

type UploadImageComponentProps = {
  postImages: { id: number; url: string }[];
  setPostImages: Dispatch<SetStateAction<{ id: number; url: string }[]>>;
  setClickedImage: Dispatch<SetStateAction<string>>;
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
};

const UploadImageComponent: React.FC<UploadImageComponentProps> = ({
  postImages,
  setPostImages,
  setClickedImage,
  setFiles,
}) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // 드래드 & 드롭으로 파일 선택
  const handleDragEnter = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(true);
    },
    [isDragging],
  );

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, [isDragging]);

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    },
    [isDragging],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      handleFileUpload(files);
    },
    [isDragging],
  );

  // 버튼을 눌러서 파일 선택
  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      handleFileUpload(files);
    },
    [],
  );

  // 선택된 파일 정보
  const handleFileUpload = (files: FileList | null): void => {
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File = files[i];

        const reader: FileReader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
          const arrayBuffer: ArrayBuffer | null = e.target
            ?.result as ArrayBuffer;

          const blob: Blob = new Blob([arrayBuffer as ArrayBuffer], {
            type: file.type,
          });

          // 서버에 보낼 용도로 변수에 저장
          setFiles((prevFiles) => [...prevFiles, files[0]]);

          const imageUrl: string = URL.createObjectURL(blob);

          // 이미지 front에 보여주기 위한 용도로 번수에 저장
          setPostImages((prevPostImages) => [
            ...prevPostImages,
            { id: prevPostImages.length + 1, url: imageUrl },
          ]);

          setClickedImage(imageUrl);
        };

        reader.readAsArrayBuffer(file);
      }
    }
  };

  return (
    <styles.Container
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        border: isDragging ? '2px dashed #1890ff' : '2px dashed #d9d9d9',
        opacity: isDragging ? 0.8 : 1,
      }}
    >
      {/* 업로드 이미지 */}
      <styles.UploadImagePicture src={UploadImagePictureImage} />

      {/* 텍스트 */}
      <styles.ExplanationText>
        {isDragging ? '드롭하세요!' : '사진과 동영상을 여기다 끌어다 놓으세요'}
      </styles.ExplanationText>

      {/* 업로드 버튼 */}
      <styles.UploadButton
        onClick={() => {
          fileInputRef.current?.click();
        }}
      >
        <styles.UploadButtonText>파일에서 업로드</styles.UploadButtonText>
      </styles.UploadButton>

      <styles.InputButton
        type="file"
        ref={fileInputRef}
        style={{
          display: 'none',
        }}
        onChange={handleFileInputChange}
        accept="image/*, video/*"
      />
    </styles.Container>
  );
};

export default UploadImageComponent;
