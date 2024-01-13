import styles from './style';
import LoadingSpaceImage from '/images/loading/LoadingSpace.png';

interface SpaceLoadingModalComponentProps {
  loadingModalOpen: boolean;
}

const SpaceLoadingModalComponent: React.FC<SpaceLoadingModalComponentProps> = ({
  loadingModalOpen,
}) => {
  return (
    <styles.Container style={{ display: loadingModalOpen ? 'flex' : 'none' }}>
      <styles.SpaceImage src={LoadingSpaceImage} />
      <styles.Text>로딩중...</styles.Text>
    </styles.Container>
  );
};

export default SpaceLoadingModalComponent;
