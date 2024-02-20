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

  Right: styled.div`
    postion: relative;
    width: 400px;
    height: 550px;
    margin: 150px 0px 0px 60vw;
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
    width: 100px;
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

  CertificationContainer: styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    margin: 5px 0px 0px 0px;
  `,

  CertificationNumber: styled.div`
    width: 100%;
    height: 100%;
  `,

  CheckContainer: styled.div`
    display: flex;
    width: 280px;
    height: 24px;
    color: white;
    margin: 100px 0px 0px 0px;
    padding: 0px 0px 0px 5px;
    font-size: 95%;
  `,

  CheckIcon: styled.img`
    width: 24px;
    height: 24px;
    margin: 0px 10px 0px 0px;
  `,

  InputMessage: styled.p`
    margin: 25px 0px 0px 0px;
    color: white;
    font-size: 80%;
  `,

  SignUp: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 69px;
    height: 16px;
    margin: -80px 0px 0px 400px;
    color: white;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
  `,

  PrivacyPolicy: styled.p`
    width: fit-content;
    margin: 100px 0px 0px 0px;
    color: #323a54;
    font-size: 125%;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
  `,
};
export default styles;
