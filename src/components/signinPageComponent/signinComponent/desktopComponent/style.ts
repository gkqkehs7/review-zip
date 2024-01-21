import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  Container: styled.div`
    // background-image: url('images/signinPage/Signin.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    font-size: 115%;
    font-weight: bold;
  `,

  Right: styled.div`
    width: 494.6px;
    height: 700px;
    margin: 285px 0px 0px 60vw;
  `,

  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 494.6px;
    margin: 20px 0px 0px 0px;
  `,

  InputTitle: styled.p`
    width: 494.6px;
    height: 16px;
    margin: 20px 0px 76px 0px;
    font-weight: bold;
    color: white;
  `,

  Input: styled.input`
    background-color: rgba(255, 255, 255, 0.3);
    width: 494.6px;
    height: 40px;
    padding-left: 10px;
    box-sizing: border-box;
    border-radius: 100px;
    color: white;

    font-size: 90%;
    &::placeholder {
      color: white;
    }
  `,

  OrSignContainer: styled.h2`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 494.6px;
    height: 40px;
    margin: 54px 0px 81px 0px;
  `,

  OrSignBtn: styled.p`
    color: white;
    font-size: 80%;
    cursor: pointer;
  `,

  KaKaoIcon: styled.div`
    background-image: url('images/signinPage/KakaoIcon.png');
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    margin: 0px 0px 0px 10px;
  `,

  SignInBtn: styled(Link)`
    width: 100%;
    height: fit-content;
    margin: 10px 0px 0px 0px;
    color: white;
    font-size: 250%;
    cursor: pointer;
  `,

  Footer: styled.div`
    width: 62%;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    margin: -40px 0px 0px 0px;
  `,
  SignUp: styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 69px;
    height: 16px;
    margin: 0px 0vw 0px 22vw;
    color: white;
    white-space: nowrap;
    cursor: pointer;
  `,
  ForgotPwd: styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 16px;
    margin: 0px 0px 0px 5vw;
    color: white;
    white-space: nowrap;
    cursor: pointer;
  `,

  PrivacyPolicy: styled.p`
    width: fit-content;
    margin: 70px 0px 0px 0px;
    color: #323a54;
    font-size: 125%;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
  `,
};
export default styles;
