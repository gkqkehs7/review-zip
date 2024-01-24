import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './style';
import UploadPostLeftComponent from './uploadPostLeftComponent/uploadPostLeftComponent';
import UploadPostRightComponent from './uploadPostRightComponent/uploadPostRightComponent';
import SpaceLoadingModalComponent from '../common/spaceLoadingModalComponent/spaceLoadingModalComponent';

const UploadPostComponent: React.FC = () => {
  const navigate = useNavigate();

  const [textInput, setTextInput] = useState<string>(''); // 게시글 내용
  const [hashTags, setHashTags] = useState<string[]>([]); // hashtag들
  const [starCount, setStarCount] = useState<number>(0); // 별점

  const [split, setSplit] = useState<boolean>(false); // post 분리용 변수
  const [loadingModalOpen, setLoadingModalOpen] = useState<boolean>(false); // 로딩창 띄우기용 변수

  const splitPost = () => {
    setSplit(!split);
  };

  const sendPost = () => {
    setLoadingModalOpen(true);

    // post이후 success가 오면 mainPage로 이동
    setTimeout(() => {
      return navigate('/mainPage');
    }, 2000);
  };

  useEffect(() => {
    console.log(starCount);
  }, [starCount]);

  const [postImages, setPostImages] = useState<{ id: number; url: string }[]>(
    [],
  );

  return (
    <styles.Container>
      {/* 게시글 업로드 부분 */}
      <UploadPostRightComponent
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
        splitPost={splitPost}
        postImages={postImages}
        setPostImages={setPostImages}
      />

      {/* 로딩 */}
      <SpaceLoadingModalComponent loadingModalOpen={loadingModalOpen} />
    </styles.Container>
  );
};

export default UploadPostComponent;
