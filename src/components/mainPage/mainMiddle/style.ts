import styled from 'styled-components';

const Container = styled.div`
  // 화면 전체 사용하게
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  background: linear-gradient(to bottom, #251a34 50%, #331b50 50%);
  position: relative;

  z-index: 999;
`;

const LeftContainer = styled.div`
  margin: 20vh auto;
`;

const MiddleContainer = styled.div`
  margin: 40vh auto;
`;

const RightContainer = styled.div`
  margin: 20vh auto;
`;

const FrameContainer = styled.div`
  cursor: pointer;
`;

const Frame = styled.img`
  height: 350px;
  object-fit: contain;
`;

const TextContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 4vh 3vw;
`;

const Text = styled.p`
  color: white;
  font-size: x-large;
  font-weight: bold;
`;

export {
  Container,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  FrameContainer,
  Frame,
  TextContainer,
  Text,
};
