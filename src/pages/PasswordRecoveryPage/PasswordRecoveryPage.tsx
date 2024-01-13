import React, { useState } from 'react';
import { changeInputValue } from '../../hooks/chageInputValue';
import styles from './style';


const PasswordRecoveryPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  return (
    <styles.Container>
    {/* 곧 삭제될 LeftSide */}
      <styles.PerkyMilkyway />
      <styles.Right>
        {/* 성명입력 */}
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

        {/* 휴대폰 번호 입력 */}
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


        {/* 보안정책 */}
        <styles.PrivacyPolicy>Privacy Policy</styles.PrivacyPolicy>
      </styles.Right>
    </styles.Container>
  );
};

export default PasswordRecoveryPage;
