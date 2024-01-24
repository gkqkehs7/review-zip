import StarRating from '@/components/common/starRatingComponent/starsRatingComponent';

import { checkDevice } from '@/utils/checkDeviceSize';

import { IPost } from '@/types/posts.types';

import styles from './style';
import MainMiddleStarImage from '/images/mainPage/MainMiddleStar.png';
import MainMiddeleStickerImage from '/images/mainPage/MainMiddleSticker.png';
import { responsiveWidthHeight } from '@/utils/reponsiveSize';

interface FrameComponentProps {
  blur?: boolean;
  openLoadingModal?: () => void;
  post?: IPost;
}

const FrameComponent: React.FC<FrameComponentProps> = ({
  blur,
  openLoadingModal,
  post,
}) => {
  const deviceSize = checkDevice();

  return (
    <styles.Container
      onClick={openLoadingModal}
      style={{
        filter: blur ? 'blur(10px)' : 'blur(0px)',
      }}
    >
      <styles.FrameSticker src={MainMiddeleStickerImage} />
      <styles.Frame
        style={responsiveWidthHeight(
          deviceSize,
          { width: 325, height: 440 },
          { width: 325, height: 440 },
          { width: 300, height: 405 },
          { width: 300, height: 405 },
          { width: 249, height: 336 },
          { width: 249, height: 336 },
        )}
      >
        <styles.ImageContainer>
          <styles.Image src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
          <styles.StarContainer>
            <StarRating count={5} all={false} />
          </styles.StarContainer>
        </styles.ImageContainer>

        <styles.FrameBottom>
          <styles.StarImage src={MainMiddleStarImage} />
          <styles.LikeText>999+</styles.LikeText>
        </styles.FrameBottom>
      </styles.Frame>
    </styles.Container>
  );
};

export default FrameComponent;
