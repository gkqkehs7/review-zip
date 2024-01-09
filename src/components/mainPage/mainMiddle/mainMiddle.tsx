import { useState } from 'react';
import {
  Container,
  TextContainer,
  Text,
  LeftContainer,
  MiddleContainer,
  RightContainer,
} from './style';
import MainMiddelModal from '../mainMiddleModal/mainMiddelModal';
import LoadingModal from '../../common/loadingModal.tsx/loadingModal';
import FrameComponent from '../frame/frame';

const MainMiddle: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [loadingModalOpen, setLoadingModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const openLoadingModal = () => {
    setLoadingModalOpen(true);
  };

  return (
    <Container>
      {/* 왼쪽 액자 */}
      <LeftContainer onClick={toggleModal}>
        <FrameComponent />
      </LeftContainer>

      {/* 가운데 액자 */}
      <MiddleContainer onClick={toggleModal}>
        <FrameComponent />
      </MiddleContainer>

      {/* 오른쪽 액자 */}
      <RightContainer onClick={toggleModal}>
        <FrameComponent />
      </RightContainer>

      {/* 글씨 */}
      <TextContainer>
        <Text>안녕, 우주에게</Text>
        <Text>나의 가장 아름다운 세상을 보여줄게</Text>
      </TextContainer>

      {/* 액자 눌렀을때 modal */}
      <MainMiddelModal
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        openLoadingModal={openLoadingModal}
      />

      {/* 로딩 modal */}
      <LoadingModal loadingModalOpen={loadingModalOpen} />
    </Container>
  );
};

export default MainMiddle;
