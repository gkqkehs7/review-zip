import styles from './styles';

const MobileComponent: React.FC = () => {
  return (
    <styles.Container>
      <styles.Right>
        <styles.SuccessIcon />
        <styles.SuccessText to="/" />
        <styles.SignUp to="/">Sign Up</styles.SignUp>
        <styles.PrivacyPolicy>Privacy Policy</styles.PrivacyPolicy>
      </styles.Right>
    </styles.Container>
  );
};

export default MobileComponent;
