import { useState, useEffect } from 'react';
import { useBlocker } from 'react-router-dom';

import UploadPostComponent from '@/components/uploadPostComponent/uploadPostComponent';
import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';
import ErrorModalComponent from '@/components/common/errorModalComponent/errorModalComponent';

import styles from './style';

const UploagePage = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorModalOpen, SetErrorModalOpen] = useState<boolean>(false);

  const closeErrorModal = () => {
    SetErrorModalOpen(false);
  };

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      currentLocation.pathname !== nextLocation.pathname,
  );

  // 페이지 이동 방지
  useEffect(() => {
    if (blocker.state === 'blocked') {
      if (window.confirm('게시글 작성을 중단하시겠습니까?')) {
        blocker.proceed();
      } else {
        blocker.reset();
      }
    }
  }, [blocker]);

  // 새로고침 방지
  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = ''; // chrome에서는 설정이 필요해서 넣은 코드
  };

  useEffect(() => {
    (() => {
      window.addEventListener('beforeunload', preventClose);
    })();

    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  return (
    <styles.Container>
      <GroupBarComponent color="purple" direction="col" />

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
