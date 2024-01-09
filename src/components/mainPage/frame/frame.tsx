import {
  Container,
  ImageContainer,
  Frame,
  FrameSticker,
  Image,
  FrameBottom,
  StarImage,
  LikeText,
} from './style';
import MainMiddleStarImage from '/images/mainPage/mainMiddleStar.png';
import MainMiddeleStickerImage from '/images/mainPage/mainMiddleSticker.png';

interface FrameComponentProps {
  openLoadingModal?: () => void;
}

const FrameComponent: React.FC<FrameComponentProps> = ({
  openLoadingModal,
}) => {
  return (
    <Container onClick={openLoadingModal}>
      <FrameSticker src={MainMiddeleStickerImage} />
      <Frame>
        <ImageContainer>
          <Image src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
        </ImageContainer>

        <FrameBottom>
          <StarImage src={MainMiddleStarImage} />
          <LikeText>999+</LikeText>
        </FrameBottom>
      </Frame>
    </Container>
  );
};

export default FrameComponent;
