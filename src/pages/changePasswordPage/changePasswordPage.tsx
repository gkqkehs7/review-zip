import { useState } from 'react';
import { changeInputValue } from '@/hooks/chageInputValue';
import styles from './style';

const LeftSide = () => {
  return (
    <styles.Left>
      <styles.Union />
      <styles.Title />
      <styles.PurpleCloud />
      <styles.MilkyWay />
      <styles.LargeStar />
      <styles.MiniStar />
      <styles.Ellipse />
      <styles.EtcContainer>
        <styles.SignUp to="/signupPage">Sign Up</styles.SignUp>
      </styles.EtcContainer>
    </styles.Left>
  );
};

const ChangePasswordPage: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [newpwd, setNewpwd] = useState<string>('');
  return (
    <styles.Container>
      {/* 곧 삭제될 LeftSide */}
      <LeftSide />
      <styles.PerkyMilkyway />
      <styles.Right>
        {/* 이메일 */}
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
        {/* 비밀 번호 */}
        <styles.InputContainer>
          <styles.InputTitle>비밀번호 재입력</styles.InputTitle>
          <styles.Input
            type="password"
            placeholder="Enter Password Again"
            value={newpwd}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,50}$"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setNewpwd)
            }
          />
        </styles.InputContainer>
       
        {/* 로그인 버튼 */}
        <styles.ChangeBtn to="">&gt; 변경하기</styles.ChangeBtn>
        {/* 개인정책 */}
        <styles.PrivacyPolicy>Privacy Policy</styles.PrivacyPolicy>
      </styles.Right>
    </styles.Container>
  );
};

export default ChangePasswordPage;
