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
    font-size: 115%;
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
    width: 873px;
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
    width: 1031px;
    height: 608px;
    z-index: 0;
  `,
  Ellipse: styled.div`
    position: absolute;
    top: 292px;
    left: -15px;
    background-image: url('images/signinPage/Ellipse.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 624px;
    height: 355px;
    transform: rotate(0deg);
    z-index: 2;
  `,

  Title: styled.div`
    position: absolute;
    top: 423.94px;
    left: 130px;
    background-image: url('images/signinPage/Title.png');
    background-size: 100% 100%;
    width: 402px;
    height: 85px;
    z-index: 3;
  `,

  LargeStart: styled.div`
    position: absolute;
    display: flex;
    top: 544px;
    left: 110px;
    background-image: url('images/signinPage/LargeStar.png');
    background-size: 100% 100%;
    width: 165px;
    height: 182px;
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
    left: 550px;
    background-image: url('images/signinPage/MiniStar.png');
    background-size: 100% 100%;
    width: 68px;
    height: 71px;
    z-index: 3;
  `,

  FormContainer: styled.form`
    postion: relative;
    width: 340px;
    height: 650px;
    margin: 150px 0px 0px 60vw;
    z-index: 3;
  `,

  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px 0px 0px 0px;
  `,

  InputTitle: styled.p`
    display: flex;
    align-items: center;
    width: 100%;
    height: 16px;
    margin: 15px 0px 20px 0px;
    color: white;
    font-weight: bold;
  `,

  Input: styled.input`
    position: relative;
    background-color: rgba(255, 255, 255, 0.3);
    width: 100%;
    height: 26.5px;
    padding-left: 10px;
    box-sizing: border-box;
    border-radius: 100px;
    border: 0;
    color: white;
    outline: none;
    font-size: 90%;
    &::placeholder {
      color: white;
    }
  `,
  CheckEmail: styled.p`
    display: flex;
    align-items: center;
    visbilty: hidden;
    width: 50%;
    height: 16px;
    color: red;
    opacity: 0.8;
    font-size: 65%;
    font-weight: normal;
    margin: 0px 0px 0px 50px;
  `,

  CheckPhoneNum: styled.p`
    display: flex;
    align-items: center;
    visbilty: hidden;
    width: 50%;
    height: 16px;
    color: red;
    opacity: 0.8;
    font-size: 65%;
    font-weight: normal;
    margin: 0px 0px 0px 50px;
  `,

  CheckNickName: styled.p`
    display: flex;
    align-items: center;
    visbilty: hidden;
    width: 50%;
    height: 16px;
    color: red;
    opacity: 0.8;
    font-size: 65%;
    font-weight: normal;
    margin: 0px 0px 0px 50px;
  `,

  CheckPassWord: styled.p`
    display: flex;
    align-items: center;
    visbilty: hidden;
    width: 50%;
    height: 16px;
    color: red;
    opacity: 0.8;
    font-size: 65%;
    font-weight: normal;
    margin: 0px 0px 0px 50px;
  `,
  WarnText: styled.p`
    margin: 15px 0px 10px 15px;
    color: white;
    font-size: 60%;
    text-decoration: underline;
    white-space: nowrap;
  `,

  SignUpBtn: styled.input`
    background-image: url('images/signinPage/SignUp.png');
    background-repeat: no-repeat;
    width: 300px;
    height: 40px;
    margin: 20px 0px 0px 0px;
    background-color: rgba(255, 255, 255, 0);
    border: 0;
    font-size: 0%;
    cursor: pointer;
  `,

  SignInContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 30px;
    margin: 50px 0px 0px 0px;
    padding: 0px 0px 0px 5px;
    color: white;
  `,

  SignInBtn: styled.div`
    margin: 0px 0px 0px 15px;
    color: white;
    font-size: 100%;
    font-weight: bold;
    
    &:hover {
      transform: scale(1.1);
    }
  `,
};
export default styles;
