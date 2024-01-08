import styled from 'styled-components';
import styles from './style';

const CompleteChangePassword: React.FC = () => {
  return (
    <styles.Container>
      <styles.SignUp to="/signupPage">Sign Up</styles.SignUp>
      <styles.PrivacyPolicy>Privacy Policy</styles.PrivacyPolicy>
    </styles.Container>
  );
};

export default CompleteChangePassword;
