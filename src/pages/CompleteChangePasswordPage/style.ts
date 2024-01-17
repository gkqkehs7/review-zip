import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-image: url('images/signinPage/CompleteChangePassword.png');
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  font-size: 115%;
  font-weight: bold;
`;

const SignUp = styled(Link)`
  width: fit-conetent;
  margin: 894px 0px 0px 587px;
  color: white;
  font-size: 130%;
  font-weight: bold;
  white-space: nowrap;
  cursor: pointer;
`;

const PrivacyPolicy = styled.h2`
  width: fit-conetent;
  margin: 894px 0px 0px 780px;
  color: #323a54;
  white-space: nowrap;
  cursor: pointer;
`;
export default { Container, SignUp, PrivacyPolicy };
