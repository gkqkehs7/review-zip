import React, { useEffect, useState, useCallback } from 'react';

import PostComponent from '@/components/postComponent/postComponent';
import LoadingModalComponent from '@/components/common/loadingModalComponent/loadingModalComponent';

import { Post } from '@/types/common.types';
import { GetRandomPostResponse } from '@/types/response.types';
import { GetAxiosInstance } from '@/api/axios.methods';

import styles from './style';
import DownArrowImage from '/images/mainPage/DownArrow.png';
import TopButtonImage from '/images/mainPage/TopButton.png';

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
  const [loading, setLoading] = useState<boolean>(false);
  const [blur, setBlur] = useState<boolean>(false);

  const getRandomPost = async () => {
    try {
      const response =
        await GetAxiosInstance<GetRandomPostResponse>('/v1/posts/81');

      setRandomPost(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  // 마우스 아래 휠 이벤트 감지해서 새로운 포스트 불러오기
  const newPost = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      // 스크롤이 아래로 내려갔을 때의 조건 (loading중엔 재스크롤 막기)
      if (event.deltaY > 0 && event.deltaY > 0) {
        if (!loading) {
          setLoading(true);
          setBlur(true);
          setTimeout(() => {
            setLoading(false);
            setBlur(false);
          }, 2000);
        }
      }
    },
    [loading],
  );

  useEffect(() => {
    getRandomPost();
  }, []);

  return (
    <styles.Container onWheel={(e) => newPost(e)}>
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
          />
        )}

        {/* 아래 화살표 */}
        <styles.ArrowImage src={DownArrowImage} />

        {/* 위로 가는 화살표 */}
        <styles.TopButton src={TopButtonImage} onClick={scrollToTop} />
      </styles.InnerContainer>

      {loading && <LoadingModalComponent />}
    </styles.Container>
  );
};

export default MainBottomComponent;
