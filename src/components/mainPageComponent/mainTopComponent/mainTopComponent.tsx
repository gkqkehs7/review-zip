import styles from './style';
import mainTopBackgroundImage from '/images/mainPage/MainTopBackground.png';
import DownArrowImage from '/images/mainPage/DownArrow.png';

const MainTopComponent: React.FC = () => {
  return (
    <styles.Container
      style={{ backgroundImage: `url(${mainTopBackgroundImage})` }}
    >
      {/* 아래 화살표 */}
      <styles.ArrowImage src={DownArrowImage} />
    </styles.Container>
  );
};

export default MainTopComponent;
