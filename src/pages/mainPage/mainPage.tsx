import { useCallback, useEffect, useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import MainTopComponent from '@/components/mainPageComponent/mainTopComponent/mainTopComponent';
import MainMiddleComponent from '@/components/mainPageComponent/mainMiddleComponent/mainMiddleComponent';
import MainBottomComponent from '@/components/mainPageComponent/mainBottomComponent/mainBottomComponent';
import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';

import { Post } from '@/types/common.types';
import { GetRandomPostsResponse } from '@/types/response.types';
import { GetAxiosInstance } from '@/api/axios.methods';

const MainPage: React.FC = () => {
  const [randomPosts, SetRandomPosts] = useState<Post[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  // 랜덤으로 3개 게시물 가져오기
  const getRandomPosts = useCallback(async () => {
    try {
      const response = await GetAxiosInstance<GetRandomPostsResponse>(
        '/v1/posts/random-three',
      );

      const randomPosts = response.data.result;

      SetRandomPosts(randomPosts);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getRandomPosts();
  }, []);

  const modalOpen = useCallback(() => {
    setOpenModal(true);
  }, [openModal]);

  const modalClose = useCallback(() => {
    setOpenModal(false);
  }, [openModal]);

  // 밑 component로 내려가는 버튼
  const handleScrollDown = () => {
    window.scrollTo({
      top: scrollPosition + window.innerHeight,
      behavior: 'smooth',
    });

    setScrollPosition(window.innerHeight);
  };

  // 맨 위로 올라오는 버튼
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setScrollPosition(0);
  };

  return (
    <RemoveScroll>
      <GroupBarComponent color="purple" direction="row" />
      <MainTopComponent
        openModal={openModal}
        handleScrollDown={handleScrollDown}
      />

      {randomPosts.length > 0 && (
        <MainMiddleComponent
          randomPosts={randomPosts}
          modalOpen={modalOpen}
          modalClose={modalClose}
          handleScrollDown={handleScrollDown}
        />
      )}

      <MainBottomComponent scrollToTop={scrollToTop} />
    </RemoveScroll>
  );
};

export default MainPage;
