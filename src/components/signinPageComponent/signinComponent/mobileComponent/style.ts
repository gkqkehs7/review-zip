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
    font-size: 115%;
    font-weight: bold;
  `,

  Right: styled.div`
    margin: 0px auto 0px auto;
    font-size: 115%;
    font-weight: bold;
  `,
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 494.6px;
    margin: 10px auto 0px auto;
  `,

  InputTitle: styled.p`
    min-width: 494.6px;
    height: 16px;
    margin: 20px 0px 60px 0px;
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

  OrSignContainer: styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 494.6px;
    height: 40px;
    margin: 50px auto 50px auto;
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
    display: flex;
    width: 494.6px;
    height: fit-content;
    margin: 0px auto 50px auto;
    color: white;
    font-size: 150%;
    cursor: pointer;
  `,

  Footer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 494.6px;
    height: 40px;
    margin: 0px auto 0px auto;
  `,

  ForgotPwd: styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 16px;
    margin: 0px 0px 0px 50px;
    color: white;
    white-space: nowrap;
    cursor: pointer;
  `,

  SignUp: styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 69px;
    height: 16px;
    margin: 0px 0px 0px 0px;
    color: white;
    white-space: nowrap;
    cursor: pointer;
  `,

  PrivacyPolicy: styled.p`
    width: 116px;
    margin: 0px 0px 0px 0px;
    color: #323a54;
    font-size: 125%;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
  `,
};
export default styles;
