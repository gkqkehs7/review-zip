import { useState, useEffect } from 'react';
import { useBlocker } from 'react-router-dom';

import UploadPostComponent from '@/components/uploadPostComponent/uploadPostComponent';
import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';
import ErrorModalComponent from '@/components/common/errorModalComponent/errorModalComponent';

import { User } from '@/types/common.types';
import styles from './style';
import { GetAxiosInstance } from '@/api/axios.methods';
import { GetUserInfoResponse } from '@/types/response.types';
import LoadingModalComponent from '@/components/common/loadingModalComponent/loadingModalComponent';

const UploagePage = () => {
  const [userInfo, setUserInfo] = useState<User>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorModalOpen, SetErrorModalOpen] = useState<boolean>(false);

  const getMyInfo = async () => {
    try {
      const response =
        await GetAxiosInstance<GetUserInfoResponse>(`/v1/users/me`);

      setUserInfo(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

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

  useEffect(() => {
    getMyInfo();
  }, []);

  return (
    <styles.Container>
      {userInfo ? (
        <>
          <GroupBarComponent color="purple" direction="col" />
          <ErrorModalComponent
            errorMessage={errorMessage}
            errorModalOpen={errorModalOpen}
            closeErrorModal={closeErrorModal}
          />
          <UploadPostComponent userInfo={userInfo} />
        </>
      ) : (
        <LoadingModalComponent message="유저 정보를 가져오는 중입니다" />
      )}
    </styles.Container>
  );
};

export default UploagePage;
