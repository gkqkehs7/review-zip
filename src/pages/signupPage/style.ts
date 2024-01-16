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

const Right = styled.div`
  width: 494.6px;
  height: 800px;
  margin: 280px 0px 0px 1594.6px;
  padding: 35px 0px 0px 0px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 494.6px;
  margin: 0px 0px 0px 0px;
`;

const InputTitle = styled.p`
  width: 494.6px;
  height: 16px;
  margin: 20px 0px 20px 0px;
  color: white;
  font-weight: bold;
`;

const Input = styled.input`
  background-color: rgba(255, 255, 255, 1);
  width: 494.6px;
  height: 40px;
  margin: 10px 0px 0px 0px;
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
  margin: 10px 0px 30px 15px;
  color: white;
  font-size: 80%;
  text-decoration: underline;
  white-space: nowrap;
`;

const SignUpBtn = styled(Link)`
  width: 200px;
  height: 29px;
  margin: 0px 0px 0px 0px;
  color: white;
  font-size: 300%;
  cursor: pointer;
`;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 494.6px;
  height: 40px;
  margin: 40px 0px 0px 5px;
  color: white;
`;

const SignInBtn = styled(Link)`
  margin: 0px 0px 0px 15px;
  color: white;
  font-size: 100%;
  font-weight: bold;
`;

export default {
  Container,
  Right,
  InputContainer,
  InputTitle,
  Input,
  SignUpBtn,
  SignInContainer,
  WarnText,
  SignInBtn,
};
