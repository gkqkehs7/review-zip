import styled from 'styled-components';
import styles from './style';

const CompleteChangePassword: React.FC = () => {
  return (
    <styles.Container>
      {/* 회원가입Link 및 개인정책 */}
      <styles.SignUp to="/signupPage">Sign Up</styles.SignUp>
      <styles.PrivacyPolicy>Privacy Policy</styles.PrivacyPolicy>
    </styles.Container>
  );
};

export default CompleteChangePassword;
