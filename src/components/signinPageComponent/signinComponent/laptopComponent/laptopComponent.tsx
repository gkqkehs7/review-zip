import { useCallback, useState } from 'react';
import { changeInputValue } from '@/hooks/chageInputValue';
import styles from './style';
import {
  DeleteAxiosInstance,
  GetAxiosInstance,
  PostAxiosInstance,
} from '@/api/axios.methods';
import { useNavigate } from 'react-router-dom';
interface LaptopComponentProps {
  kakaoLoginUrl: string;
}

const LaptopComponent: React.FC<LaptopComponentProps> = ({ kakaoLoginUrl }) => {
  const [email, setEamil] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const requestSignup = useCallback(async () => {
    try {
      const data = {
        email: email,
        password: password,
      };
      const response = await PostAxiosInstance('/v1/auth/local/login', data);
      console.log(data);
      navigate('/mainPage');
    } catch (error) {
      //아이디/비밀번호 재입력 요구
      alert('이메일 또는 비밀번호를 다시 입력해주세요');
      console.log(error);
    }
  }, [email, password]);
  return (
    <styles.Container>
      <styles.PerkyMilkyWay />
      <styles.PurpleCloud />
      <styles.Ellipse />
      <styles.Title />
      <styles.LargeStart />
      <styles.Union />
      <styles.MiniStart />
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
          ></styles.Input>
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
        <styles.OrSignContainer href={kakaoLoginUrl}>
          <styles.OrSignBtn>or sign in with</styles.OrSignBtn>
          <styles.KaKaoIcon />
        </styles.OrSignContainer>

        {/* 로그인 버튼 */}
        <styles.SignInBtn onClick={requestSignup}>
          &gt; SIGN IN
        </styles.SignInBtn>

        <styles.PrivacyPolicy>Privacy Policy</styles.PrivacyPolicy>
      </styles.Right>

      <styles.Footer>
        <styles.SignUp to="/signupPage">Sign Up</styles.SignUp>
        <styles.ForgotPwd to="/passwordRecoveryPage">
          Forgot the Password ?
        </styles.ForgotPwd>
      </styles.Footer>
    </styles.Container>
  );
};

export default LaptopComponent;
