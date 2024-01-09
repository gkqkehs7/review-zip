import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin: 40vh auto;
`;

const Frame = styled.div`
  cursor: pointer;
  background-color: white;
  width: 17vw;
  height: 40vh;
  padding: 12px 12px 20px 10px;
`;

const FrameSticker = styled.img`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
`;

const FrameBottom = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

const StarImage = styled.img`
  width: 20px;
  height: 20px;
`;

const LikeText = styled.div`
  margin: 0px 5px;
  font-weight: bold;
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
  ImageContainer,
  Image,
  Frame,
  FrameBottom,
  FrameSticker,
  StarImage,
  LikeText,
  TextContainer,
  Text,
};
