import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  Container: styled.div`
    background-image: url('images/signinPage/Background.png');
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-size: 100%;
    font-weight: bold;
  `,

  Right: styled.div`
    width: 350px;
    margin: 0px auto 0px auto;
    font-size: 105%;
    font-weight: bold;
  `,
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0px auto 0px auto;
  `,

  InputTitle: styled.p`
    display: flex;
    align-items: center;
    width: 80px;
    height: 16px;
    margin: 30px 0px 30px 0px;
    font-weight: bold;
    color: white;
  `,

  Input: styled.input`
    background-color: rgba(255, 255, 255, 0.3);
    width: 350px;
    height: 26.5px;
    padding-left: 10px;
    box-sizing: border-box;
    border-radius: 100px;
    color: white;
    outline: none;
    border: 0;
    font-size: 90%;
    &::placeholder {
      color: white;
    }
  `,

  OrSignContainer: styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 63px;
    margin: 0px auto 50px auto;
  `,

  OrSignBtn: styled.p`
    color: white;
    font-size: 100%;
    cursor: pointer;
  `,

  KaKaoIcon: styled.div`
    display: flex;
    align-items: center;
    background-image: url('images/signinPage/KakaoIcon.png');
    background-repeat: no-repeat;
    background-position: center center;
    width: 63px;
    height: 63px;
    margin: 0px 0px 0px 0px;
  `,

  SignInBtn: styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    margin: 0px auto 50px auto;
    color: white;
    font-size: 200%;
    cursor: pointer;
  `,

  Footer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    margin: 0px auto 0px auto;
  `,

  ForgotPwd:styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 16px;
    margin: 0px 0px 0px 0px;
    color: white;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  `,

  SignUp: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 69px;
    height: 16px;
    margin: 0px 0px 0px 0px;
    color: white;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

  `,
  PrivacyPolicy: styled.p`
    width: 116px;
    margin: 0px 0px 0px 0px;
    color: #323a54;
    font-size: 100%;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
  `,
};
export default styles;
