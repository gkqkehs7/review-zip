import styles from './style';

interface SpaceLoadingModalProps {
  loadingModalOpen: boolean;
}

const SpaceLoadingModal: React.FC<SpaceLoadingModalProps> = ({
  loadingModalOpen,
}) => {
  return (
    <styles.Container style={{ display: loadingModalOpen ? 'flex' : 'none' }}>
      <styles.Text>로딩중...</styles.Text>
    </styles.Container>
  );
};

export default SpaceLoadingModal;
