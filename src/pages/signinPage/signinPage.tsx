import styled from 'styled-components';
import { useState } from 'react';
import styles from './style';

const LeftSide = () => {
  return (
    <styles.Left>
      {/* 이미지 넣는 곳 */}
      <styles.Union />
      <styles.Title />
      <styles.PurpleCloud />
      <styles.MilkyWay />
      <styles.LargeStar />
      <styles.MiniStar />
      <styles.Ellipse />
      <styles.EtcContainer>
        <styles.SignUp to="/signupPage">Sign Up</styles.SignUp>
        {/* 링크 수정해야함 */}
        <styles.ForgotPwd to="">Forgot the Password?</styles.ForgotPwd>
      </styles.EtcContainer>
    </styles.Left>
  );
};

const SigninPage = () => {
  const [email, setEamil] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEamil(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <styles.Container>
      {/* 정보 넣는 곳 */}
      <LeftSide />
      <styles.PerkyMilkyway />
      <styles.Right>
        {/* 이메일 */}
        <styles.InputContainer>
          <styles.InputTitle>EMAIL</styles.InputTitle>
          <styles.Input
            type="email"
            pattern=".+@example\.com"
            placeholder="Enter ID or Email Adress"
            value={email}
            onChange={changeEmail}
          ></styles.Input>
        </styles.InputContainer>
        {/* 비밀 번호 */}
        <styles.InputContainer>
          <styles.InputTitle>PASSWORD</styles.InputTitle>
          <styles.Input
            type="password"
            placeholder="Enter UserName"
            value={password}
            onChange={changePassword}
          ></styles.Input>
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
