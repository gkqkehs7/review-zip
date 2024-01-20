import { useState } from 'react';

import styles from './style';
import UploadPostLeftComponent from './uploadPostLeftComponent/uploadPostLeftComponent';
import UploadPostRightComponent from './uploadPostRightComponent/uploadPostRightComponent';

const UploadPostComponent: React.FC = () => {
  const [split, setSplit] = useState<boolean>(false);

  const splitPost = () => {
    setSplit(!split);
  };

  return (
    <styles.Container>
      {/* 게시글 업로드 부분 */}
      <UploadPostRightComponent split={split} />

      {/* 사진 업로드 부분 */}
      <UploadPostLeftComponent split={split} splitPost={splitPost} />
    </styles.Container>
  );
};

export default UploadPostComponent;
