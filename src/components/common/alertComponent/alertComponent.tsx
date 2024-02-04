import styles from './style';

interface AlertComponentProps {
  closeAlertModal: () => void;
  deletePost?: () => Promise<void>;
}

const AlertComponent: React.FC<AlertComponentProps> = ({
  closeAlertModal,
  deletePost,
}) => {
  return (
    <styles.Container>
      {/* map, groupnar */}
      <styles.InnerContainer>
        <styles.DeleteText onClick={deletePost}>
          리뷰를 삭제하시겠습니까?
        </styles.DeleteText>

        <styles.ButtonsContainer>
          <styles.CancleButton onClick={closeAlertModal}>
            취소
          </styles.CancleButton>

          <styles.DeleteButton onClick={deletePost}>삭제</styles.DeleteButton>
        </styles.ButtonsContainer>
      </styles.InnerContainer>
    </styles.Container>
  );
};

export default AlertComponent;
