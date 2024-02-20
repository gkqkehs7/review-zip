import LoadingImage from '/images/Loading/Loading.png';
import styles from './style';

const LoadingModalComponent: React.FC = () => {
  return (
    <styles.Container>
      <styles.Image src={LoadingImage} />
    </styles.Container>
  );
};

export default LoadingModalComponent;
