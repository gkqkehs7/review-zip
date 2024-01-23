import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  Container: styled.div`
    background-image: url('images/signinPage/Background.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-size: 115%;
    font-weight: bold;
    z-index: 0;
  `,
  Right: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 500px;
    height: 500px;
    z-index: 3;
  `,
  SuccessIcon: styled.div`
    background-image: url('images/signinPage/SuccessIcon.png');
    background-size: 100% 100%;
    margin: 0px 0px 0px 0px;
    width: 20%;
    height: 20%;
  `,

  SuccessText: styled(Link)`
    background-image: url('images/signinPage/SuccessText.png');
    background-size: 100% 100%;
    margin: 0px 0px 0px 0px;
    width: 100%;
    height: 7%;
  `,

  PrivacyPolicy: styled.p`
    width: fit-content;
    margin: 0px 0px 0px 0px;
    color: #323a54;
    font-size: 125%;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
  `,
  SignUp: styled(Link)`
    position: relative;
    width: fit-content;
    color: white;
    font-size: 125%;
    font-weight: bold;
    margin: 0px 0px 0px 0px;
    z-index: 3;
  `,
};
export default styles;
