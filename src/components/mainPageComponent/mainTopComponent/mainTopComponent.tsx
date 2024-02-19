import { checkDevice } from '@/utils/checkDeviceSize';
import { responsiveBackgroundImageSize } from '@/utils/responsiveBackgroundImageSize';

import styles from './style';
import MainTopBackgroundImage1440 from '/images/mainPage/MainTopBackground1440.png';
import MainTopBackgroundImage1680 from '/images/mainPage/MainTopBackground1680.png';
import MainTopBackgroundImage1920 from '/images/mainPage/MainTopBackground1920.png';
import DownArrowImage from '/images/mainPage/DownArrow.png';

interface MainTopComponentProps {
  openModal: boolean;
  handleScrollDown: () => void;
}

const MainTopComponent: React.FC<MainTopComponentProps> = ({
  handleScrollDown,
}) => {
  const device = checkDevice();

  return (
    <styles.Container
      style={responsiveBackgroundImageSize(
        device,
        { imageUrl: MainTopBackgroundImage1920 },
        { imageUrl: MainTopBackgroundImage1920 },
        { imageUrl: MainTopBackgroundImage1680 },
        { imageUrl: MainTopBackgroundImage1680 },
        { imageUrl: MainTopBackgroundImage1440 },
        { imageUrl: MainTopBackgroundImage1440 },
      )}
    >
      {/* 아래 화살표 */}
      <styles.ArrowImage src={DownArrowImage} onClick={handleScrollDown} />
    </styles.Container>
  );
};

export default MainTopComponent;
