import { changeInputValue } from '@/hooks/chageInputValue';
import styles from './style';
import { useNavigate } from 'react-router';



interface MobileComponentProps {
  kakaoLoginUrl: string;
  requestSignin: () => Promise<void>;
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const MobileComponent: React.FC<MobileComponentProps> = ({
  kakaoLoginUrl,
  requestSignin,
  email,
  password,
  setEmail,
  setPassword,
}) => {
  const navigate = useNavigate();
  return (
    <styles.Container>
      <styles.Right>
        {/* 이메일 */}

        <styles.InputContainer>
          <styles.InputTitle>EMAIL</styles.InputTitle>
          <styles.Input
            type="email"
            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
            placeholder="Enter ID or Email Adress"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setEmail)
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
        <styles.OrSignContainer href={kakaoLoginUrl}>
          <styles.OrSignBtn>or sign in with</styles.OrSignBtn>
          <styles.KaKaoIcon />
        </styles.OrSignContainer>

        {/* 로그인 버튼 */}
        <styles.SignInBtn onClick={requestSignin}>
          &gt; SIGN IN
        </styles.SignInBtn>

        <styles.Footer>
          <styles.SignUp onClick={()=>navigate('/signupPage')}>Sign Up</styles.SignUp>
          <styles.ForgotPwd onClick={()=>navigate('/passwordRecoveryPage')}>
          Forgot the Password?
        </styles.ForgotPwd>
        </styles.Footer>

        {/*보안정책 */}
      </styles.Right>
    </styles.Container>
  );
};

export default MobileComponent;
