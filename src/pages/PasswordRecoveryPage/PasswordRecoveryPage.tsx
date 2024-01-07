import styled from 'styled-components';
import React, { useState } from 'react';
import styles from './style';
import { changeInputValue } from '../../hooks/chageInputValue';

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

const PasswordRecoveryPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  return (
    <styles.Container>
      {/* 정보 넣는 곳 */}
      <LeftSide />
      <styles.PerkyMilkyway />
      <styles.Right>
        {/* 이메일 */}
        <styles.InputContainer>
          <styles.InputTitle>성명</styles.InputTitle>
          <styles.Input
            type="text"
            pattern=".+@example\.com"
            placeholder="홍길동"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setName)
            }
          />
        </styles.InputContainer>
        {/* 비밀 번호 */}
        <styles.InputContainer>
          <styles.InputTitle>휴대폰 번호</styles.InputTitle>
          <styles.Input
            type="password"
            placeholder="Enter UserName"
            value={phoneNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setPhoneNumber)
            }
          />
        </styles.InputContainer>
        {/* 카카오톡 */}
        <styles.OrSignContainer>
          <styles.OrSignBtn>or sign in with</styles.OrSignBtn>
          <styles.KaKaoIcon />
        </styles.OrSignContainer>
        {/* 로그인 버튼 */}

        <styles.PrivacyPolicy>Privacy Policy</styles.PrivacyPolicy>
      </styles.Right>
    </styles.Container>
  );
};

export default PasswordRecoveryPage;
