import { useState } from 'react';
import { changeInputValue } from '@/hooks/chageInputValue';
import styles from './style';

<<<<<<< HEAD
=======


>>>>>>> b7aaf0d (Refactor: signinPage)
const SigninPage: React.FC = () => {
  const [email, setEamil] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <styles.Container>
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

        {/* 카카오톡 인증*/}
        <styles.OrSignContainer>
          <styles.OrSignBtn>or sign in with</styles.OrSignBtn>
          <styles.KaKaoIcon />
        </styles.OrSignContainer>

        {/* 로그인 버튼 */}
        <styles.SignInBtn to="/mainPage">&gt; SIGN IN</styles.SignInBtn>

        {/* 보안정책 */}
      </styles.Right>
      <styles.Left>
        <styles.SignUp to="/signupPage">Sign Up</styles.SignUp>
        <styles.ForgotPwd to="/passwordRecoveryPage">
          Forgot the Password ?
        </styles.ForgotPwd>
        <styles.PrivacyPolicy>Privacy Policy</styles.PrivacyPolicy>
      </styles.Left>
    </styles.Container>
  );
};

export default SigninPage;
