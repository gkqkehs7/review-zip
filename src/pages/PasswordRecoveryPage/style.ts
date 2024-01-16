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

const EtcContainer = styled.div`
  height: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SignUp = styled(Link)`
  position: relative;
  width: 4vw;
  height: 2.5vh;
  color: white;
  z-index: 3;
  margin: 44vh 0vw 0vh 20vw;

  cursor: pointer;
`;

// *******Right******* //뷰포트 내에서 상단에 위치한 순으로 배치했음

const Right = styled.div`
  flex: 1;
  padding: 2vh 0vw 0vh 7.5vw;
  border: 1px solid white;
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
  margin: 45px 0px;
  color: white;
`;

const Input = styled.input`
  width: 25vw; // input이 화면 전체 사용하기 위함
  box-sizing: border-box; // input이 화면 전체 사용하기 위함
  margin: 5px 0;
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

// ********or Sign in with Css********
const OrSignContainer = styled.h2`
  width: 27.5vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 6vh 0vw;
`;

const OrSignBtn = styled.div`
  color: white;
  cursor: pointer;
`;

const KaKaoIcon = styled.div`
  background-image: url('images/ri_kakao-talk-fill.png');
  background-repeat: no-repeat;
  width: 2vw;
  height: 4vh;
  margin: 0vh 0vw 0vh 0.5vw;
`;
//*************************************

const PrivacyPolicy = styled.h2`
  display: flex;
  align-items: center;
  color: #323a54;
  width: fit-content;
  margin: 9vh 2.5vw;
  border: 1px solid white;
  cursor: pointer;
`;

export default {
  Container,
  Right,
  InputContainer,
  InputTitle,
  Input,
  OrSignContainer,
  OrSignBtn,
  PrivacyPolicy,
  KaKaoIcon,
  SignUp,
  EtcContainer,
};
