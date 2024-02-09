import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './style';
import UploadPostLeftComponent from './uploadPostLeftComponent/uploadPostLeftComponent';
import UploadPostRightComponent from './uploadPostRightComponent/uploadPostRightComponent';
import SpaceLoadingModalComponent from '../common/spaceLoadingModalComponent/spaceLoadingModalComponent';
import { CreatePostRequest } from '@/types/request.types';
import { PostAxiosInstance } from '@/api/axios.methods';

import { User } from '@/types/common.types';
import {
  CreatePostResponse,
  CreateImagesResponse,
} from '@/types/response.types';

interface UploadPostComponentProps {
  userInfo: User;
}

const UploadPostComponent: React.FC<UploadPostComponentProps> = ({
  userInfo,
}) => {
  const navigate = useNavigate();

  // post로 보낼 내용들
  const [textInput, setTextInput] = useState<string>(''); // 게시글 내용
  const [hashTags, setHashTags] = useState<string[]>([]); // hashtag들
  const [starCount, setStarCount] = useState<number>(0); // 별점
  const [previewImages, setPreviewPostImages] = useState<
    { id: number; url: string }[]
  >([]);
  const [files, setFiles] = useState<File[]>([]); // 게시글 사진

  const [split, setSplit] = useState<boolean>(false); // post 분리용 변수
  const [loadingModalOpen, setLoadingModalOpen] = useState<boolean>(false); // 로딩창 띄우기용 변수

  // 포스트 왼쪽 오른쪽 분리하기
  const splitpost = () => {
    setSplit(!split);
  };

  // 게시글 보내기 - post이후 success가 오면 mainPage로 이동
  const sendPost = async () => {
    if (textInput.trim().length === 0) {
      return alert('게시글의 내용이 없습니다!');
    }

    if (files.length === 0) {
      return alert('사진을 한장 이상 추가해야 합니다!');
    }

    if (starCount === 0) {
      return alert('별점을 매겨주세요!');
    }

    setLoadingModalOpen(true);

    try {
      const formData = new FormData();

      // 이미지들 파일에 저장
      files.forEach((file) => {
        formData.append('fileList', file);
      });

      // 이미지 먼저 업로드
      const response = await PostAxiosInstance<CreateImagesResponse>(
        '/v1/images/users/1',
        formData,
      );

      const { imageIds } = response.data.result;

      const createPostRequest: CreatePostRequest = {
        userId: 1,
        comment: textInput,
        point: starCount,
        imageIds: imageIds,
      };

      // 받아온 이미지 id들로 게시글 업로드
      await PostAxiosInstance<CreatePostResponse>(
        '/v1/posts',
        createPostRequest,
      );

      return navigate('/mainPage');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <styles.Container>
      {/* 게시글 업로드 부분 */}
      <UploadPostRightComponent
        userInfo={userInfo}
        split={split}
        sendPost={sendPost}
        textInput={textInput}
        setTextInput={setTextInput}
        hashTags={hashTags}
        setHashTags={setHashTags}
        starCount={starCount}
        setStarCount={setStarCount}
      />

      {/* 사진 업로드 부분 */}
      <UploadPostLeftComponent
        split={split}
        splitpost={splitpost}
        previewImages={previewImages}
        setPreviewPostImages={setPreviewPostImages}
        setFiles={setFiles}
      />

      {/* 로딩 */}
      <SpaceLoadingModalComponent loadingModalOpen={loadingModalOpen} />
    </styles.Container>
  );
};

export default UploadPostComponent;
