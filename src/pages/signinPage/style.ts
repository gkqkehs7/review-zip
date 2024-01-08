import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  // 화면 전체 사용하게
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url('images/SigninBackground.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

const SignUp = styled(Link)`
  width: 100vw;
  color: white;
  font-size: 130%;
  font-weight: bold;
  cursor: pointer;
  margin: 63vh 0vw 0vh 21vw;
`;

const ForgotPwd = styled(Link)`
  width: 100vw;
  color: white;
  font-size: 130%;
  font-weight: bold;
  margin: 63vh 0vw 0vh 0vw;
  cursor: pointer;
`;

const Right = styled.div`
  width: 50vw;
  height: 50vh;
  margin: 0vh 17vw 0vh 0vw;
`;

const InputContainer = styled.div`
  width: 26vw;
  position: relative; // input이 화면 전체 사용하기 위함
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2vh 0vw 3vh 2.5vw;
`;

const InputTitle = styled.h2`
  font-weight: bold;
  margin: 1vh 0vw 5vh 0vw;
  color: white;
`;

const Input = styled.input`
  width: 26vw; // input이 화면 전체 사용하기 위함
  height: 3vh;
  box-sizing: border-box; // input이 화면 전체 사용하기 위함
  margin: 0vh 0vw 0vh 0vw;
  color: white;
  font-weight: bold;
  background-color: gray;
  opacity: 0.5;
  border-radius: 100px;

  &::placeholder {
    color: white;
  }
`;

// ********or Sign in with Css********
const OrSignContainer = styled.h2`
  width: 26vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 4vh 0vw 7vh 2.5vw;
`;

const OrSignBtn = styled.div`
  color: white;
  cursor: pointer;
`;

const KaKaoIcon = styled.div`
  background-image: url('images/KakaoIcon.png');
  background-repeat: no-repeat;
  width: 2vw;
  height: 4vh;
  margin: 0vh 0vw 0vh 0.5vw;
`;
//*************************************

const SignInBtn = styled(Link)`
  font-size: 305%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0vh 0vw 0vh 2.5vw;
  color: white;
  width: fit-content; // 버튼이 자신의 크기만큼만 차지하게 하기 위함
  cursor: pointer;
`;

const PrivacyPolicy = styled.h2`
  display: flex;
  align-items: center;
  color: #323a54;
  width: fit-content;
  margin: 5.5vh 0vw 0vh 2.5vw;
  cursor: pointer;
`;

export default {
  Container,
  Right,
  InputContainer,
  InputTitle,
  Input,
  SignInBtn,
  OrSignContainer,
  OrSignBtn,
  PrivacyPolicy,
  KaKaoIcon,
  SignUp,
  ForgotPwd,
};
