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
    </styles.Left>
  );
};

const SignupPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <styles.Container>
      {/* 곧 삭제될 LeftSide */}
      <LeftSide />
      
      <styles.PerkyMilkyway />
      <styles.Right>

        {/*휴대폰 번호 입력*/}
        <styles.InputContainer>
          <styles.InputTitle>휴대폰 번호</styles.InputTitle>
          <styles.Input
            type="tel"
            placeholder="010-1234-5678"
            value={phoneNumber}
            pattern="[0-1]{3}-[0-9]{4}-[0-9]{4}"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setPhoneNumber)
            }
          />
        </styles.InputContainer>

        {/*사용자 성명 입력*/}
        <styles.InputContainer>
          <styles.InputTitle>성명</styles.InputTitle>
          <styles.Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setName)
            }
          />
        </styles.InputContainer>

        {/*사용자 닉네임 입력*/}
        <styles.InputContainer>
          <styles.InputTitle>사용자 닉네임</styles.InputTitle>
          <styles.Input
            type="text"
            placeholder="Enter user name"
            value={nickname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setNickname)
            }
          />
        </styles.InputContainer>

        {/*비밀번호 입력*/}
        <styles.InputContainer>
          <styles.InputTitle>비밀번호</styles.InputTitle>
          <styles.Input
            type="password"
            placeholder="Enter Password"
            value={password}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,50}$"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setPassword)
            }
          />

          {/*비밀번호 주의문*/}
          <styles.WarnText>
            대문자 ,소문자가섞인 영문 6글자 이상 입력해주시길 바랍니다.{' '}
          </styles.WarnText>
        </styles.InputContainer>
        {/*SIGN UP 버튼*/}
        <styles.SignUpBtn>&gt; SIGN UP</styles.SignUpBtn>

        {/*로그인 페이지 이동버튼*/}
        <styles.SignInContainer>
          <p>계정이 있으신가요?</p>
          <styles.SignInBtn to="/signInPage">로그인</styles.SignInBtn>
        </styles.SignInContainer>
        
      </styles.Right>
    </styles.Container>
  );
};

export default SignupPage;
