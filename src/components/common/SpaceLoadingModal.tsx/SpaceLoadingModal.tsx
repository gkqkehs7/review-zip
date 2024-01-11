import styles from './style';
import LoadingSpaceImage from '/images/Loading/LoadingSpace.png';

interface SpaceLoadingModalProps {
  loadingModalOpen: boolean;
}

const SpaceLoadingModal: React.FC<SpaceLoadingModalProps> = ({
  loadingModalOpen,
}) => {
  return (
    <styles.Container style={{ display: loadingModalOpen ? 'flex' : 'none' }}>
      <styles.SpaceImage src={LoadingSpaceImage} />
      <styles.Text>로딩중...</styles.Text>
    </styles.Container>
  );
};

export default SpaceLoadingModal;
