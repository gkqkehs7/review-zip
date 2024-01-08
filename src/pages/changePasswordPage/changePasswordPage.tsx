import styled from 'styled-components';
import { useState } from 'react';
import styles from './style';
import { changeInputValue } from '../../hooks/chageInputValue';

const ChangePasswordPage: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [newpwd, setNewpwd] = useState<string>('');
  return (
    <styles.Container>
      <styles.SignUp to="/signupPage">Sign Up</styles.SignUp>
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
        {/* 카카오톡 */}
        <styles.WarnText>
          대문자 ,소문자가섞인 영문 6글자 이상 입력해주시길 바랍니다.
        </styles.WarnText>
        {/* 로그인 버튼 */}
        <styles.ChangeBtn to="/CompleteChangePasswordPage">
          &gt; 변경하기
        </styles.ChangeBtn>

        {/* 개인정책 */}
        <styles.PrivacyPolicy>Privacy Policy</styles.PrivacyPolicy>
      </styles.Right>
    </styles.Container>
  );
};

export default ChangePasswordPage;
