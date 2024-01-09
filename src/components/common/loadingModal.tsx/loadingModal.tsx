import styles from './style';

interface LoadingModalProps {
  loadingModalOpen: boolean;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ loadingModalOpen }) => {
  return (
    <styles.Container style={{ display: loadingModalOpen ? 'flex' : 'none' }}>
      <styles.Text>로딩중...</styles.Text>
    </styles.Container>
  );
};

export default LoadingModal;
