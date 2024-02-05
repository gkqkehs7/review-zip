import React, { useEffect, useState, useCallback } from 'react';

import PostComponent from '@/components/postComponent/postComponent';
import LoadingModalComponent from '@/components/common/loadingModalComponent/loadingModalComponent';

import { Post } from '@/types/common.types';
import { GetRandomPostResponse } from '@/types/response.types';
import { DeleteAxiosInstance, GetAxiosInstance } from '@/api/axios.methods';

import styles from './style';
import DownArrowImage from '/images/mainPage/DownArrow.png';
import TopButtonImage from '/images/mainPage/TopButton.png';
import AlertComponent from '@/components/common/alertComponent/alertComponent';

interface MainBottomComponentProps {
  modalOpen: () => void;
  modalClose: () => void;
  scrollToTop: () => void;
}

const MainBottomComponent: React.FC<MainBottomComponentProps> = ({
  modalOpen,
  modalClose,
  scrollToTop,
}) => {
  const [randomPost, setRandomPost] = useState<Post>();
  const [loading, setLoading] = useState<boolean>(false); // loading modal 띄우기용
  const [blur, setBlur] = useState<boolean>(false); // 모자이크 처리용
  const [alertModalOpen, setAlertModalOpen] = useState<boolean>(false); // delete modal 띄우기용

  // 랜덤으로 게시글 한개 가져오기
  const getRandomPost = async () => {
    try {
      const response = await GetAxiosInstance<GetRandomPostResponse>(
        '/v1/posts/random-one',
      );

      setRandomPost(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  // 게시글 삭제
  const deletePost = useCallback(async () => {
    try {
      setAlertModalOpen(false);
      await DeleteAxiosInstance(`/v1/posts/${randomPost?.postId}`);

      // 삭제하고 새로운 게시글 불러오기
      await newPost();
    } catch (error) {
      console.error(error);
    }
  }, []);

  // alert창 열기
  const openAlertModal = useCallback(() => {
    setAlertModalOpen(true);
  }, []);

  // alert창 닫기
  const closeAlertModal = useCallback(() => {
    setAlertModalOpen(false);
  }, []);

  // 새로운 게시글 가져오기
  const newPost = async () => {
    try {
      // 스크롤이 아래로 내려갔을 때의 조건 (loading중엔 재스크롤 막기)
      setLoading(true);
      setBlur(true);

      const response = await GetAxiosInstance<GetRandomPostResponse>(
        '/v1/posts/random-one',
      );

      setRandomPost(response.data.result);

      setTimeout(() => {
        if (response) {
          setRandomPost(response.data.result);
          setLoading(false);
          setBlur(false);
        }
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  // 마우스 아래 휠 이벤트 감지해서 새로운 포스트 불러오기
  const DetectScrollDown = useCallback(
    async (event: React.WheelEvent<HTMLDivElement>) => {
      try {
        // 스크롤이 아래로 내려갔을 때의 조건 (loading중엔 재스크롤 막기)
        if (event.deltaY > 0 && event.deltaY > 0) {
          if (!loading) {
            await newPost();
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    [loading],
  );

  useEffect(() => {
    getRandomPost();
  }, []);

  return (
    <styles.Container onWheel={(e) => DetectScrollDown(e)}>
      <styles.InnerContainer
        style={{
          filter: blur ? 'blur(10px)' : 'blur(0px)',
          width: '100vw',
          height: '100vh',
        }}
      >
        {/* 게시글 component */}
        {randomPost && (
          <PostComponent
            post={randomPost}
            modalOpen={modalOpen}
            modalClose={modalClose}
            openAlertModal={openAlertModal}
          />
        )}

        {/* 아래 화살표 */}
        <styles.ArrowImage onClick={newPost} src={DownArrowImage} />

        {/* 위로 가는 화살표 */}
        <styles.TopButton src={TopButtonImage} onClick={scrollToTop} />
      </styles.InnerContainer>

      {loading && (
        <LoadingModalComponent
          message={'새로운 게시글을 불러오는 중입니다...'}
        />
      )}

      {alertModalOpen && (
        <AlertComponent
          closeAlertModal={closeAlertModal}
          deletePost={deletePost}
        />
      )}
    </styles.Container>
  );
};

export default MainBottomComponent;
