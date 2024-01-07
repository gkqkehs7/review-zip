import { useState } from 'react';
import styles from './style';
import { changeInputValue } from '../../hooks/chageInputValue';

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
    </styles.Left>
  );
};

const SignupPage: React.FC = () => {
  const [number, setNumber] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <styles.Container>
      {/* 왼쪽 */}
      <LeftSide />
      {/* 오른쪽*/}
      <styles.PerkyMilkyway />
      <styles.Right>
        <styles.InputContainer>
          <styles.InputTitle>휴대폰 번호</styles.InputTitle>
          <styles.Input
            type="tel"
            placeholder="010-1234-5678"
            value={number}
            pattern="[0-1]{3}-[0-9]{4}-[0-9]{4}"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setNumber)
            }
          />
        </styles.InputContainer>

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
          <styles.WarnText>
            대문자 ,소문자가섞인 영문 6글자 이상 입력해주시길 바랍니다.{' '}
          </styles.WarnText>
        </styles.InputContainer>

        <styles.SignUpBtn>&gt; SIGN UP</styles.SignUpBtn>

        <styles.SignInContainer>
          <p>계정이 있으신가요?</p>
          <styles.SignInBtn to="/signInPage">로그인</styles.SignInBtn>
        </styles.SignInContainer>
      </styles.Right>
    </styles.Container>
  );
};

export default SignupPage;
