import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-image: url('images/signinPage/Signin.png');
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  font-size: 115%;
  font-weight: bold;
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  margin: 60px 0px 0px 0px;
`;

const SignUp = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 69px;
  height: 16px;
  margin: 0px 0px 0px 587px;
  color: white;
  cursor: pointer;
  white-space: nowrap;
`;

const PrivacyPolicy = styled.p`
  width: fit-content;
  margin: 0px 0px 0px 935px;
  color: #323a54;
  font-weight: bold;
  font-size: 125%;
  cursor: pointer;
  white-space: nowrap;
`;

const Right = styled.div`
  width: 494.6px;
  height: 593px;
  margin: 285px 0px 0px 1594.6px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 494.6px;
  margin: 20px 0px 0px 0px;
`;

const InputTitle = styled.p`
  width: 494.6px;
  height: 16px;
  margin: 20px 0px 76px 0px;
  color: white;
  font-weight: bold;
`;

const Input = styled.input`
  background-color: rgba(255, 255, 255, 1);
  width: 494.6px;
  height: 40px;
  margin: 0px 0px 0px 0px;
  box-sizing: border-box;
  border: 1px solid white;
  border-radius: 100px;
  color: white;
  opacity: 0.1;
  font-weight: bold;

  &::placeholder {
    color: white;
  }
`;

const WarnText = styled.p`
  margin: 10px 0px 110px 15px;
  color: white;
  font-size: 80%;
  text-decoration: underline;
  white-space: nowrap;
`;

const ChangeBtn = styled(Link)`
  width: 200px;
  height: 29px;
  margin: 0px 0px 10px 0px;
  color: white;
  font-size: 250%;
  font-weight: bold;
  cursor: pointer;
`;

export default {
  Container,
  Right,
  InputContainer,
  InputTitle,
  Input,
  ChangeBtn,
  PrivacyPolicy,
  WarnText,
  SignUp,
  Left,
};
