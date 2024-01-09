import styles from './style';
import mainTopBackgroundImage from '../../../../public/images/mainPage/mainTopBackground.png';

const MainTop: React.FC = () => {
  return (
    <styles.Container
      style={{ backgroundImage: `url(${mainTopBackgroundImage})` }}
    ></styles.Container>
  );
};

export default MainTop;
