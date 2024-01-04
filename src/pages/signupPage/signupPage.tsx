import { useState } from 'react';
import {
  Container,
  Left,
  Right,
  InputContainer,
  InputTitle,
  Input,
  WarnText,
  SignUpBtn,
  SignInContainer,
  SignInBtn,
} from './style';
import { changeInputValue } from '../../hooks/chageInputValue';

const SignupPage: React.FC = () => {
  const [email, setEamil] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Container>
      {/* 왼쪽 */}
      <Left>그림 넣는 부분</Left>

      {/* 오른쪽*/}
      <Right>
        <InputContainer>
          <InputTitle>이메일</InputTitle>
          <Input
            type="email"
            placeholder="Enter ID or Email Address"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setEamil)
            }
          />
        </InputContainer>

        <InputContainer>
          <InputTitle>성명</InputTitle>
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setName)
            }
          />
        </InputContainer>

        <InputContainer>
          <InputTitle>닉네임</InputTitle>
          <Input
            type="text"
            placeholder="Enter user name"
            value={nickname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setNickname)
            }
          />
          <WarnText>경고메세지</WarnText>
        </InputContainer>

        <InputContainer>
          <InputTitle>비밀번호</InputTitle>
          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setPassword)
            }
          />
          <WarnText>경고메세지</WarnText>
        </InputContainer>

        <SignUpBtn>&gt; SIGN UP</SignUpBtn>

        <SignInContainer>
          <p>계정이 있으신가요?</p>
          <SignInBtn to="/signInPage">로그인</SignInBtn>
        </SignInContainer>
      </Right>
    </Container>
  );
};

export default SignupPage;
