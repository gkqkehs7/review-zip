import styles from './style';
import LoadingImage from '/images/loading/Loading.png';

const LoadingModalComponent: React.FC = () => {
  return (
    <styles.Container>
      <styles.Image src={LoadingImage} />
    </styles.Container>
  );
};

export default LoadingModalComponent;
