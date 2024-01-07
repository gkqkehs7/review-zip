import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  // 화면 전체 사용하게
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url('images/MainBackground.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

// *******Left******* //뷰포트 내에서 상단에 위치한 순으로 배치했음
const Left = styled.div`
  // 왼쪽 절반 차지
  flex: 1;
  height: 100vh;
  font-weight: bold;
  font-size: 120%;
`;

const Union = styled.div`
  width: 9vw;
  height: 9vh;
  background-image: url('images/Union.png');
  margin: 20vh 15vh;
  background-repeat: no-repeat;
`;

const MiniStar = styled.div`
  position: absolute;
  bottom: 56vh;
  left: 32vw;
  width: 5vw;
  height: 10vh;
  background-image: url('images/Ministar.png');
  background-repeat: no-repeat;
  z-index: 2;
`;

const Ellipse = styled.div`
  position: absolute;
  width: 40vw;
  height: 42vh;
  left: 0vw;
  bottom: 22vh;
  background-image: url('images/Ellipse.png');
  background-repeat: no-repeat;
  z-index: 1;
`;

const Title = styled.div`
  position: absolute;
  width: 27vw;
  height: 8vh;
  left: 9vw;
  bottom: 46vh;
  background-image: url('images/Title.png');
  background-repeat: no-repeat;
  z-index: 3;
`;

const LargeStar = styled.div`
  position: absolute;
  left: 5vw;
  bottom: 16vh;
  width: 12.4vw;
  height: 25vh;
  background-image: url('images/Largestar.png');
  background-repeat: no-repeat;
  z-index: 2;
`;

const PurpleCloud = styled.div`
  width: 45vw;
  height: 66vh;
  position: absolute;
  bottom: -0vh;
  margin: -2vh 0vw;
  background-image: url('images/PurpleCloud.png');
  background-repeat: no-repeat;
  z-index: 1;
`;

const MilkyWay = styled.div`
  position: absolute;
  width: 50vw;
  height: 43vh;
  left: -7vw;
  bottom: 0vh;
  margin: -2vh 0vw;
  background-image: url('images/MilkyWay.png');
  background-repeat: no-repeat;
  z-index: 2;
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

const ForgotPwd = styled(Link)`
  position: relative;
  width: 10vw;
  height: 2.5vh;
  color: white;
  margin: -2.6vh 0vw 0vh 30vw;

  z-index: 3;
  cursor: pointer;
`;

// *******Right******* //뷰포트 내에서 상단에 위치한 순으로 배치했음

const Right = styled.div`
  flex: 1;
  padding: 3vh 0vw 0vh 7.5vw;
  border: 1px solid white;
`;

const PerkyMilkyway = styled.div`
  position: absolute;
  top: 2vh;
  right: 0vw;
  width: 35vw;
  height: 50vh;
  background-image: url('images/perkeyMilkyway.png');
  background-repeat: no-repeat;
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

const KaKaoIcon = styled.div`
  background-image: url('images/ri_kakao-talk-fill.png');
  background-repeat: no-repeat;
  width: 2vw;
  height: 4vh;
  margin: 0vh 0vw 0vh 0.5vw;
`;
//*************************************
const ChangeBtn = styled(Link)`
  font-size: 300%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 7vh 2.5vw;
  color: white;
  width: fit-content; // 버튼이 자신의 크기만큼만 차지하게 하기 위함
  cursor: pointer;
`;

const PrivacyPolicy = styled.h2`
  display: flex;
  align-items: center;
  color: #323a54;
  width: fit-content;
  margin: 9vh 2.5vw;

  cursor: pointer;
`;

export default {
  Container,
  Left,
  Right,
  InputContainer,
  InputTitle,
  Input,
  ChangeBtn,
  PrivacyPolicy,
  KaKaoIcon,
  PurpleCloud,
  Union,
  Title,
  MilkyWay,
  Ellipse,
  LargeStar,
  MiniStar,
  PerkyMilkyway,
  SignUp,
  ForgotPwd,
  EtcContainer,
};
