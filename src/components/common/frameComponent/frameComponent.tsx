import StarRating from '@/components/common/starRatingComponent/starsRatingComponent';

import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';

import { Post } from '@/types/common.types';

import styles from './style';
import MainMiddleStarImage from '/images/mainPage/MainMiddleStar.png';
import MainMiddeleStickerImage from '/images/mainPage/MainMiddleSticker.png';
import { useNavigate } from 'react-router-dom';

interface FrameComponentProps {
  post: Post;
  blur?: boolean;
  openLoadingModal?: () => void;
  toUserProfile?: () => void;
}

const FrameComponent: React.FC<FrameComponentProps> = ({
  post,
  blur,
  openLoadingModal,
  toUserProfile,
}) => {
  const deviceSize = checkDevice();

  return (
    <styles.Container
      onClick={toUserProfile}
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
          <styles.Image src={post.postImages[0]?.imageUrl} />
          <styles.StarContainer>
            <StarRating count={post.point} all={false} />
          </styles.StarContainer>
        </styles.ImageContainer>

        <styles.FrameBottom>
          <styles.StarImage src={MainMiddleStarImage} />
          <styles.LikeText>{post.likeNum}+</styles.LikeText>
        </styles.FrameBottom>
      </styles.Frame>
    </styles.Container>
  );
};

export default FrameComponent;
