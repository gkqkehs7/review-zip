import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Container = styled.div`
  // 화면 전체 사용하게
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url('/images/MainBackground.png');
  background-repeat: no-repeat;
  background-size: cover;
`;
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

const Box = styled.div`
  display: flex;
  margin: 3vh 0 0 0;
`;

const DefaultBox = styled.div`
  display: flex;
  margin: 3vh 0 0 0;
`;

const ReviewContainer = styled.div`
  position: absolute;
  left: 10vw;
  top: 30vh;
`;

const SignUpBtn = styled.p`
  position: absolute;
  left: 25vw;
  bottom: 20vh;
  width: fit-content;
  color: white;
  cursor: pointer;
  font-size: 20px;
`;

const SmsInputBox = styled.input`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  font-size: 20px;
  margin: 5px;
  border: 2px solid #ccc;
  background-image: url('/Ellipse 48.png');
  background-size: cover;
`;

const InputBox = styled.input`
  text-align: center;
  font-size: 20px;
  margin: 5px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.3); // 흰색 배경에 투명도 30%
  background-size: cover;
  color: white;
`;

const Right = styled.div`
  // 오른쪽 절반 차지
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  flex: 1;
  padding: 0px 50px;
  display: flex;
  justify-contents: flex-end;
  align-items: center;
`;

const Label = styled.p`
  font-weight: bold;
  color: white;
`;

const CheckIcon = styled.img`
  position: absolute;
  right: 1vw;
`;

const IconInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 4vh 0 4vh 0;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 0 0 15vw;
`;

const PrivacyP = styled.p`
  color: #323a54;
  font-weight: bold;
  font-size: 20px;
`;

const Reviewimg = styled.img``;

export default {
  SmsInputBox,
  InputBox,
  Box,
  Left,
  Right,
  Label,
  CheckIcon,
  IconInputContainer,
  InputContainer,
  PrivacyP,
  DefaultBox,
  ReviewContainer,
  Reviewimg,
  SignUpBtn,
  Container,
  PurpleCloud,
  Union,
  Title,
  MilkyWay,
  Ellipse,
  LargeStar,
  MiniStar,
  SignUp,
  EtcContainer,
};
