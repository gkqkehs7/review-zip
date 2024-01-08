import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  // 화면 전체 사용하게
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url('images/CompleteChangePassword.png');
  background-repeat: no-repeat;
  background-size: cover;
`;
const SignUp = styled(Link)`
  width: 10vw;
  color: white;
  font-size: 130%;
  font-weight: bold;
  cursor: pointer;
  margin: 63vh 0vw 0vh 21vw;
  white-space: nowrap;
`;

const PrivacyPolicy = styled.h2`
  white-space: nowrap;
  width: 20vw;
  color: #323a54;
  margin: 63vh 35.5vw 0vh 32.5vw;
  cursor: pointer;
`;
export default { Container, SignUp, PrivacyPolicy };
