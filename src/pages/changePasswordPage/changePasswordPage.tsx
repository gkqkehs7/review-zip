import styled from 'styled-components';
import { useState } from 'react';
import styles2 from './style';
import { changeInputValue } from '../../hooks/chageInputValue';

const LeftSide = () => {
  return (
    <styles2.Left>
      <styles2.Union />
      <styles2.Title />
      <styles2.PurpleCloud />
      <styles2.MilkyWay />
      <styles2.LargeStar />
      <styles2.MiniStar />
      <styles2.Ellipse />
      <styles2.EtcContainer>
        <styles2.SignUp to="/signupPage">Sign Up</styles2.SignUp>
      </styles2.EtcContainer>
    </styles2.Left>
  );
};

const ChangePasswordPage: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [newpwd, setNewpwd] = useState<string>('');
  return (
    <styles2.Container>
      <LeftSide />
      <styles2.PerkyMilkyway />
      <styles2.Right>
        {/* 이메일 */}
        <styles2.InputContainer>
          <styles2.InputTitle>비밀번호 입력</styles2.InputTitle>
          <styles2.Input
            type="password"
            placeholder="Enter Password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,50}$"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setPassword)
            }
          />
        </styles2.InputContainer>
        {/* 비밀 번호 */}
        <styles2.InputContainer>
          <styles2.InputTitle>비밀번호 재입력</styles2.InputTitle>
          <styles2.Input
            type="password"
            placeholder="Enter Password Again"
            value={newpwd}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,50}$"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setNewpwd)
            }
          />
        </styles2.InputContainer>
        {/* 카카오톡 */}

        {/* 로그인 버튼 */}
        <styles2.ChangeBtn to="">&gt; 변경하기</styles2.ChangeBtn>
        {/* 개인정책 */}
        <styles2.PrivacyPolicy>Privacy Policy</styles2.PrivacyPolicy>
      </styles2.Right>
    </styles2.Container>
  );
};

export default ChangePasswordPage;
