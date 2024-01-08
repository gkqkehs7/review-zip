import styled from 'styled-components';
import { useState } from 'react';
import styles from './style';
import { changeInputValue } from '../../hooks/chageInputValue';

const SigninPage: React.FC = () => {
  const [email, setEamil] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <styles.Container>
      <styles.SignUp to="/signupPage">Sign Up</styles.SignUp>
      <styles.ForgotPwd to="/PasswordRecoveryPage">
        Forgot the Password?
      </styles.ForgotPwd>
      <styles.Right>
        {/* 이메일 */}
        <styles.InputContainer>
          <styles.InputTitle>EMAIL</styles.InputTitle>
          <styles.Input
            type="email"
            pattern=".+@example\.com"
            placeholder="Enter ID or Email Adress"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setEamil)
            }
          />
        </styles.InputContainer>
        {/* 비밀 번호 */}
        <styles.InputContainer>
          <styles.InputTitle>PASSWORD</styles.InputTitle>
          <styles.Input
            type="password"
            placeholder="Enter UserName"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setPassword)
            }
          />
        </styles.InputContainer>
        {/* 카카오톡 */}
        <styles.OrSignContainer>
          <styles.OrSignBtn>or sign in with</styles.OrSignBtn>
          <styles.KaKaoIcon />
        </styles.OrSignContainer>
        {/* 로그인 버튼 */}
        <styles.SignInBtn to="">&gt; SIGN IN</styles.SignInBtn>
        {/* 개인정책 */}
        <styles.PrivacyPolicy>Privacy Policy</styles.PrivacyPolicy>
      </styles.Right>
    </styles.Container>
  );
};

export default SigninPage;
