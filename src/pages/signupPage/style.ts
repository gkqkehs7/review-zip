import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url('images/SigninBackground.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

const Right = styled.div`
  width: 50vw;
  height: 60vh;
  margin: 0vh 0vw 0vh 49vw;
  padding: 12.5vh 0vw 0vh 8vw;
`;

const InputContainer = styled.div`
  width: 26vw;
  position: relative; // input이 화면 전체 사용하기 위함
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2vh 0vw 0vh 0vw;
  padding: 0vh 0vw 0vh 0vw;
`;

const InputTitle = styled.h2`
  font-weight: bold;
  margin: 0vh 0vw 1vh 0vw;
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

const SignUpBtn = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 5vh 0vw 0vh 0vw;
  color: white;
  font-size: 350%;
  width: fit-content; // 버튼이 자신의 크기만큼만 차지하게 하기 위함
  cursor: pointer;
`;

const SignInContainer = styled.div`
  width: 28vw;
  display: flex;
  align-items: center;
  color: white;
  margin: 5vh 0vw 0vh 0vw;
`;

const SignInBtn = styled(Link)`
  font-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0vh 0vw 0vh 0.5vw;
  color: white;
  width: fit-content; // 버튼이 자신의 크기만큼만 차지하게 하기 위함
  cursor: pointer;
`;

const WarnText = styled.div`
  color: white;
  text-decoration: underline;
  margin: 2vh 0vw 0vh 0vw;
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
