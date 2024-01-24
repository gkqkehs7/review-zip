import { useState } from 'react';

import UploadPostComponent from '@/components/uploadPostComponent/uploadPostComponent';
import ErrorModalComponent from '@/components/common/errorModalComponent/errorModalComponent';

import styles from './style';

const UploagePage = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorModalOpen, SetErrorModalOpen] = useState<boolean>(false);

  const closeErrorModal = () => {
    SetErrorModalOpen(false);
  };

  return (
    <styles.Container>
      <ErrorModalComponent
        errorMessage={errorMessage}
        errorModalOpen={errorModalOpen}
        closeErrorModal={closeErrorModal}
      />

      <UploadPostComponent />
    </styles.Container>
  );
};

export default UploagePage;
