import { useState } from 'react';
import { changeInputValue } from '@/hooks/chageInputValue';
import styles from './styles';

const DesktopComponent: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [newpassword, setNewPassword] = useState<string>('');
  return (
    <styles.Container>
      <styles.PerkyMilkyWay />
      <styles.PurpleCloud />
      <styles.Ellipse />
      <styles.MilkyWay />
      <styles.Title />
      <styles.LargeStart />
      <styles.Union />
      <styles.MiniStart />
      <styles.Right>
        {/* 비밀번호 입력 */}
        <styles.InputContainer>
          <styles.InputTitle>비밀번호 입력</styles.InputTitle>
          <styles.Input
            type="password"
            placeholder="Enter Password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,50}$"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setPassword)
            }
          />
        </styles.InputContainer>

        {/* 비밀 번호 재입력 */}
        <styles.InputContainer>
          <styles.InputTitle>비밀번호 재입력</styles.InputTitle>
          <styles.Input
            type="password"
            placeholder="Enter Password Again"
            value={newpassword}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,50}$"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setNewPassword)
            }
          />
        </styles.InputContainer>
        {/* 비밀번호 입력시 주의사항 */}
        <styles.WarnText>
          대문자 ,소문자가섞인 영문 6글자 이상 입력해주시길 바랍니다.{' '}
        </styles.WarnText>
        {/* 비밀번호 변경 버튼 */}
        <styles.ChangeBtn to="/completeChangePasswordPage">
          &gt; 변경하기
        </styles.ChangeBtn>
        <styles.PrivacyPolicy>Privacy Policy</styles.PrivacyPolicy>
      </styles.Right>
      {/* 회원가입 및 개인정책  */}
      <styles.Footer>
        <styles.SignUp to="/signupPage">Sign Up</styles.SignUp>
      </styles.Footer>
    </styles.Container>
  );
};

export default DesktopComponent;
