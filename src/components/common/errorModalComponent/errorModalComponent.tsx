import styles from './style';

interface ErrorModalComponentProps {
  errorMessage: string;
  errorModalOpen: boolean;
  closeErrorModal: () => void;
}

const ErrorModalComponent: React.FC<ErrorModalComponentProps> = ({
  errorMessage,
  errorModalOpen,
  closeErrorModal,
}) => {
  return (
    <styles.Container
      style={{
        opacity: errorModalOpen ? 1 : 0,
        pointerEvents: errorModalOpen ? 'auto' : 'none',
      }}
    >
      <styles.InnerContainer>
        <styles.TopContainer>
          <styles.Title>에러 발생</styles.Title>

          <styles.ExitButton onClick={closeErrorModal}>
            나가기 버튼
          </styles.ExitButton>
        </styles.TopContainer>

        <styles.ErrorMessageContainer>
          <styles.ErrorMessage>{errorMessage}</styles.ErrorMessage>
        </styles.ErrorMessageContainer>
      </styles.InnerContainer>
    </styles.Container>
  );
};

export default ErrorModalComponent;
