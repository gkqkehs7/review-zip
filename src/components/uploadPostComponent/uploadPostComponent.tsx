import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './style';
import UploadPostLeftComponent from './uploadPostLeftComponent/uploadPostLeftComponent';
import UploadPostRightComponent from './uploadPostRightComponent/uploadPostRightComponent';
import SpaceLoadingModalComponent from '../common/spaceLoadingModalComponent/spaceLoadingModalComponent';

const UploadPostComponent: React.FC = () => {
  const navigate = useNavigate();

  const [split, setSplit] = useState<boolean>(false);
  const [loadingModalOpen, setLoadingModalOpen] = useState<boolean>(false);

  const splitPost = () => {
    setSplit(!split);
  };

  const openLoadingModal = () => {
    setLoadingModalOpen(true);

    // post이후 success가 오면 mainPage로 이동
    setTimeout(() => {
      return navigate('/mainPage');
    }, 2000);
  };

  return (
    <styles.Container>
      {/* 게시글 업로드 부분 */}
      <UploadPostRightComponent
        split={split}
        openLoadingModal={openLoadingModal}
      />

      {/* 사진 업로드 부분 */}
      <UploadPostLeftComponent split={split} splitPost={splitPost} />

      {/* 로딩 */}
      <SpaceLoadingModalComponent loadingModalOpen={loadingModalOpen} />
    </styles.Container>
  );
};

export default UploadPostComponent;
