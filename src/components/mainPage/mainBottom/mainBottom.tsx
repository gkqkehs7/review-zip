import Post from '../../post/post';
import styles from './style';
import mainBottomBackgroundImage from '/images/mainPage/mainBottomBackground.png';

const MainBottom: React.FC = () => {
  return (
    <styles.Container
      style={{
        backgroundImage: `url(${mainBottomBackgroundImage})`,
      }}
    >
      <Post />
    </styles.Container>
  );
};

export default MainBottom;
