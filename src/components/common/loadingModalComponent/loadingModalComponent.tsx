import styles from './style';
import LoadingImage from '/images/loading/Loading.png';

interface LoadingModalComponentProps {
  message: string;
}

const LoadingModalComponent: React.FC<LoadingModalComponentProps> = ({
  message,
}) => {
  return (
    <styles.Container>
      <styles.Image src={LoadingImage} />
      <styles.Message>{message}</styles.Message>
    </styles.Container>
  );
};

export default LoadingModalComponent;
