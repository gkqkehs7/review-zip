import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  // 화면 전체 사용하게
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url('images/signinPage/Signin.png');
  background-repeat: no-repeat;
  background-size: cover;
`;


const Right = styled.div`
  // 오른쪽 절반 차지
  flex: 1;
  padding: 1vh 0vw 0vh 7.5vw;
`;

const InputContainer = styled.div`
  width: 25vw;
  position: relative; // input이 화면 전체 사용하기 위함
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1vh 2.5vw;
`;

const InputTitle = styled.div`
  font-weight: bold;
  margin: 2vh 0px;
  color: white;
`;

const Input = styled.input`
  width: 25vw; // input이 화면 전체 사용하기 위함
  box-sizing: border-box; // input이 화면 전체 사용하기 위함
  padding: 10px;
  color: white;
  font-weight: bold;
  background-color: gray;
  opacity: 0.5;
  border-radius: 100px;
  border: 1px solid white;
  &::placeholder {
    color: white;
  }
`;

const WarnText = styled.div`
  color: white;
  text-decoration: underline;
  margin: 2vh 0vw 0vh 0vw;
`;

const SignUpBtn = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 4vh 2.5vw;
  color: white;
  width: fit-content; // 버튼이 자신의 크기만큼만 차지하게 하기 위함
  cursor: pointer;
`;

const SignInContainer = styled.div`
  width: 10vw;
  display: flex;
  align-items: center;
  color: white;
  margin: 5vh 0vw 0vh 2.5vw;
`;

const SignInBtn = styled(Link)`
  margin: 0 1vw;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export default {
  Container,
  Right,
  InputContainer,
  InputTitle,
  Input,
  SignInBtn,
  WarnText,
  SignUpBtn,
  SignInContainer,
};
