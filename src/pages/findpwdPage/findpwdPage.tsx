import React, { useState, useEffect } from 'react';
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

interface IFormState {
  smsCode: string[];
}

const FindpwPage: React.FC = () => {
  const [formState, setFormState] = useState<IFormState>({
    smsCode: ['', '', '', ''],
  }); // 초기값을 빈 문자열 4개의 배열로 설정
  const [isCodeValid, setIsCodeValid] = useState<boolean | null>(null);
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  // SMS 코드의 유효성을 검사하는 함수
  const checkSMSCodeValidity = () => {
    const isValid = formState.smsCode.every((code) => code.trim() === '1');
    setIsCodeValid(isValid);
  };

  // SMS 코드 상태가 변경될 때마다 유효성 검사를 수행
  useEffect(() => {
    checkSMSCodeValidity();
  }, [formState.smsCode]);

  // SMS 코드 입력 핸들러 수정
  const handleSMSCodeChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      // 한 자리 숫자만 입력받도록 제한
      if (value === '' || (value.length === 1 && /\d/.test(value))) {
        const newSmsCode = [...formState.smsCode];
        newSmsCode[index] = value;
        setFormState({ smsCode: newSmsCode });
      }
    };

  const isNameValid = (name: string): boolean => name.length >= 2;

  const isPhoneNumberValid = (phoneNumber: string): boolean => {
    const regex = /^\d{3}-\d{4}-\d{4}$/;
    return regex.test(phoneNumber);
  };

  return (
    <styles.Container>
      <LeftSide />
      <styles.Right>
        <styles.InputContainer>
          <styles.Label>성명</styles.Label>
          <styles.IconInputContainer>
            <styles.InputBox
              type="text"
              size={40}
              value={name}
              placeholder="홍길동"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                changeInputValue(e, setName)
              }
            />
            {isNameValid(name) && (
              <styles.CheckIcon src="/images/check.png" alt="Check" />
            )}
          </styles.IconInputContainer>
          <styles.Label>휴대폰 번호</styles.Label>
          <styles.IconInputContainer>
            <styles.InputBox
              type="text"
              size={40}
              value={phoneNumber}
              placeholder="010-1111-1111"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                changeInputValue(e, setPhoneNumber)
              }
            />
            {isPhoneNumberValid(phoneNumber) && (
              <styles.CheckIcon src="/images/check.png" alt="Check" />
            )}
          </styles.IconInputContainer>
          <styles.Label>아래 SMS 인증번호를 입력해주세요.</styles.Label>
          <styles.Box>
            {formState.smsCode.map((code, index) => (
              <styles.SmsInputBox
                key={index}
                type="text"
                value={code}
                maxLength={1}
                onChange={handleSMSCodeChange(index)}
              />
            ))}
          </styles.Box>
          <styles.DefaultBox>
            {formState.smsCode.every((code) => code.trim() !== '') && (
              <styles.Label>
                {isCodeValid
                  ? '정상적으로 확인되셨습니다.'
                  : '잘못된 입력입니다.'}
              </styles.Label>
            )}
          </styles.DefaultBox>
          <styles.DefaultBox>
            <styles.PrivacyP>Privacy Policy</styles.PrivacyP>
          </styles.DefaultBox>
        </styles.InputContainer>
      </styles.Right>
    </styles.Container>
  );
};

export default FindpwPage;
