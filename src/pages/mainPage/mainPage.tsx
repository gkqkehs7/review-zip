import { useCallback, useEffect, useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import MainTopComponent from '@/components/mainPageComponent/mainTopComponent/mainTopComponent';
import MainMiddleComponent from '@/components/mainPageComponent/mainMiddleComponent/mainMiddleComponent';
import MainBottomComponent from '@/components/mainPageComponent/mainBottomComponent/mainBottomComponent';
import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';

import styles from './style';

const MainPage: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

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
      <GroupBarComponent />
      <MainTopComponent
        openModal={openModal}
        handleScrollDown={handleScrollDown}
      />
      <MainMiddleComponent
        modalOpen={modalOpen}
        modalClose={modalClose}
        handleScrollDown={handleScrollDown}
      />
      <MainBottomComponent
        modalOpen={modalOpen}
        modalClose={modalClose}
        scrollToTop={scrollToTop}
      />
    </RemoveScroll>
  );
};

export default MainPage;
