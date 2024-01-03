import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  // 화면 전체 사용하게
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  // 왼쪽 절반 차지
  flex: 1;
`;

const Right = styled.div`
  // 오른쪽 절반 차지
  flex: 1;
  padding: 0px 50px;
`;

const InputContainer = styled.div`
  position: relative; // input이 화면 전체 사용하기 위함
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0px;
`;

const InputTitle = styled.div`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%; // input이 화면 전체 사용하기 위함
  box-sizing: border-box; // input이 화면 전체 사용하기 위함
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
`;

const WarnText = styled.div`
  color: red;
`;

const SignUpBtn = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content; // 버튼이 자신의 크기만큼만 차지하게 하기 위함

  cursor: pointer;
`;

const SignInContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SignInBtn = styled(Link)`
  margin: 0 5px;
  color: black;
  font-weight: bold;
  cursor: pointer;
`;

export {
  Container,
  Left,
  Right,
  InputContainer,
  InputTitle,
  Input,
  SignUpBtn,
  SignInContainer,
  SignInBtn,
  WarnText,
};
