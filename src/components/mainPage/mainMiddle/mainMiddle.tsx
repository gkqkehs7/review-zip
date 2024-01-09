import {
  Container,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  FrameContainer,
  Frame,
  TextContainer,
  Text,
} from './style';
import FrameImage from '../../../../public/images/mainPage/Frame.png';
import MainMiddelModal from '../mainMiddleModal/mainMiddelModal';
import { useState } from 'react';

const MainMiddle: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Container>
      {/* 왼쪽 액자 */}
      <LeftContainer>
        <FrameContainer onClick={toggleModal}>
          <Frame src={FrameImage} />
        </FrameContainer>
      </LeftContainer>

      {/* 가운데 액자 */}
      <MiddleContainer>
        <FrameContainer onClick={toggleModal}>
          <Frame src={FrameImage} />
        </FrameContainer>
      </MiddleContainer>

      {/* 오른쪽 액자 */}
      <RightContainer>
        <FrameContainer onClick={toggleModal}>
          <Frame src={FrameImage} />
        </FrameContainer>
      </RightContainer>

      <TextContainer>
        <Text>안녕, 우주에게</Text>
        <Text>나의 가장 아름다운 세상을 보여줄게</Text>
      </TextContainer>

      <MainMiddelModal modalOpen={modalOpen} toggleModal={toggleModal} />
    </Container>
  );
};

export default MainMiddle;
