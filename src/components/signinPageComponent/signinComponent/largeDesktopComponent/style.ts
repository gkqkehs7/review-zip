import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  Container: styled.div`
    background-image: url('images/signinPage/Background.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    font-size: 100%;
    font-weight: bold;
    z-index: 0;
  `,
  PerkyMilkyWay: styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    background-image: url('images/signinPage/PerkyMilkyWay.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: 50px 30px;
    width: 973px;
    height: 565px;
    z-index: 0;
  `,
  PurpleCloud: styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-image: url('images/signinPage/PurpleCloud.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 1231px;
    height: 658px;
    z-index: 0;
  `,
  Ellipse: styled.div`
    position: absolute;
    top: 292px;
    left: -15px;
    background-image: url('images/signinPage/Ellipse.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 824px;
    height: 395px;
    transform: rotate(0deg);
    z-index: 2;
  `,

  Title: styled.div`
    position: absolute;
    top: 423.94px;
    left: 200px;
    background-image: url('images/signinPage/Title.png');
    background-size: 100% 100%;
    width: 602px;
    height: 85px;
    z-index: 3;
  `,

  LargeStart: styled.div`
    position: absolute;
    display: flex;
    top: 574px;
    left: 130px;
    background-image: url('images/signinPage/LargeStar.png');
    background-size: 100% 100%;
    width: 225px;
    height: 232px;
    z-index: 4;
  `,

  Union: styled.div`
    position: absolute;
    top: 216px;
    left: 230px;
    background-image: url('images/signinPage/Union.png');
    background-size: 100% 100%;
    width: 81px;
    height: 78px;
  `,

  MiniStart: styled.div`
    position: absolute;
    top: 266px;
    left: 750px;
    background-image: url('images/signinPage/MiniStar.png');
    background-size: 100% 100%;
    width: 88px;
    height: 91px;
    z-index: 3;
  `,
  Right: styled.div`
    postion: relative;
    width: 540px;
    height: 650px;
    margin: 170px 0px 0px 60vw;
    z-index: 5;
  `,

  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0px 0px 0px 0px;
  `,

  InputTitle: styled.p`
    display: flex;
    align-items: center;
    width: 80px;
    height: 16px;
    margin: 70px 0px 30px 0px;
    font-weight: bold;
    color: white;
  `,

  Input: styled.input`
    background-color: rgba(255, 255, 255, 0.3);
    width: 100%;
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
    margin: 55px 0px 80px 0px;
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
    width: 200px;
    height: 29px;
    margin: 10px 0px 0px 0px;
    color: white;
    font-size: 250%;
    cursor: pointer;
  `,

  Footer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 60%;
    height: 40px;
    margin: -80px 0px 0px 0px;

    z-index: 3;
  `,
  SignUp: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 69px;
    height: 16px;
    margin: 0px 0vw 0px 22vw;
    color: white;
    font-weight: bold;
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
    font-weight: bold;
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
