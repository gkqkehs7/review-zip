import { useState, useEffect } from 'react';

import MainMiddelModalComponent from '@/components/mainPageComponent/mainMiddelModalComponent/mainMiddelModalComponent';
import SpaceLoadingModalComponent from '@/components/common/spaceLoadingModalComponent/spaceLoadingModalComponent';
import FrameComponent from '@/components/common/frameComponent/frameComponent';

import { Post } from '@/types/common.types';

import styles from './style';
import DownArrowImage from '/images/mainPage/DownArrow.png';

interface MainMiddleComponentProps {
  randomPosts: Post[];
  modalOpen: () => void;
  modalClose: () => void;
  handleScrollDown: () => void;
}

const MainMiddleComponent: React.FC<MainMiddleComponentProps> = ({
  modalOpen,
  modalClose,
  handleScrollDown,
  randomPosts,
}) => {
  const [clickFrameIndex, setClickFrameIndex] = useState<number>(0);
  const [mainMiddleModalOpen, setMainMiddletModalOpen] =
    useState<boolean>(false);
  const [loadingModalOpen, setLoadingModalOpen] = useState<boolean>(false);
  const [blur, setBlur] = useState<boolean>(false);

  // MainMiddleModal 열기
  const openMainMiddleModal = (frameIndex: number) => {
    setClickFrameIndex(frameIndex);
    setMainMiddletModalOpen(true);
    modalOpen();
    setBlur(true);
  };

  // MainMiddleModal 닫기
  const closeMainMiddleModal = () => {
    setMainMiddletModalOpen(false);
    modalClose();
    setBlur(false);
  };

  // LoadingModal 열기
  const openLoadingModal = () => {
    setLoadingModalOpen(true);
    // modalOpen();
    // modalClose();
  };

  // LoadingModal 닫기
  const closeLoadingModal = () => {
    setLoadingModalOpen(false);
  };

  return (
    <styles.Container>
      {/* 왼쪽 액자 */}
      <styles.LeftContainer onClick={() => openMainMiddleModal(0)}>
        <FrameComponent post={randomPosts[0]} blur={blur} />
      </styles.LeftContainer>

      {/* 가운데 액자 */}
      <styles.MiddleContainer onClick={() => openMainMiddleModal(1)}>
        <FrameComponent post={randomPosts[1]} blur={blur} />
      </styles.MiddleContainer>

      {/* 오른쪽 액자 */}
      <styles.RightContainer onClick={() => openMainMiddleModal(2)}>
        <FrameComponent post={randomPosts[2]} blur={blur} />
      </styles.RightContainer>

      {/* 아래 화살표 */}
      <styles.ArrowImage src={DownArrowImage} onClick={handleScrollDown} />

      {/* 글씨 */}
      {/* <styles.TextContainer>
        <styles.Text>안녕, 우주에게</styles.Text>
        <styles.Text>나의 가장 아름다운 세상을 보여줄게</styles.Text>
      </styles.TextContainer> */}

      {/* 액자 눌렀을 때 modal */}
      <MainMiddelModalComponent
        post={randomPosts[clickFrameIndex]}
        mainMiddleModalOpen={mainMiddleModalOpen}
        closeLoadingModal={closeLoadingModal}
        closeMainMiddleModal={closeMainMiddleModal}
        openLoadingModal={openLoadingModal}
      />

      {/* 로딩 modal */}
      <SpaceLoadingModalComponent loadingModalOpen={loadingModalOpen} />
    </styles.Container>
  );
};

export default MainMiddleComponent;
