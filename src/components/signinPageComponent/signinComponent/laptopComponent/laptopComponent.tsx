import { changeInputValue } from '@/hooks/chageInputValue';
import styles from './style';

interface LaptopComponentProps {
  kakaoLoginUrl: string;
  requestSignin: () => Promise<void>;
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const LaptopComponent: React.FC<LaptopComponentProps> = ({
  kakaoLoginUrl,
  requestSignin,
  email,
  password,
  setEmail,
  setPassword,
}) => {
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
              changeInputValue(e, setEmail)
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
        <styles.SignInBtn onClick={requestSignin}>
          &gt; SIGN IN
        </styles.SignInBtn>

        <styles.PrivacyPolicy>Privacy Policy</styles.PrivacyPolicy>
      </styles.Right>

      <styles.Footer>
        <styles.SignUp>Sign Up</styles.SignUp>
        <styles.ForgotPwd to="/passwordRecoveryPage">
          Forgot the Password ?
        </styles.ForgotPwd>
      </styles.Footer>
    </styles.Container>
  );
};

export default LaptopComponent;
