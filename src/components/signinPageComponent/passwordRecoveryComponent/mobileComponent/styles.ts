import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  Container: styled.div`
    background-image: url('images/signinPage/Background.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 1200px;
    height: 850px;
    z-index: 0;
  `,
  PurpleCloud: styled.div`
    position: absolute;
    bottom: 0vh;
    background-image: url('images/signinPage/PurpleCloud.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 1800px;
    height: 85vh;
    z-index: 0;
  `,
  Ellipse: styled.div`
    position: absolute;
    top: 32.5%;
    background-image: url('images/signinPage/Ellipse.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 1100px;
    height: 40vh;
    z-index: 2;
  `,

  MilkyWay: styled.div`
    position: absolute;
    bottom: 0;
    background-image: url('images/signinPage/MilkyWay.png');
    background-size: 1125px 600px;
    width: 1125px;
    height: 50vh;
    z-index: 3;
  `,

  Title: styled.div`
    position: absolute;
    top: 43.5%;
    left: 300px;
    background-image: url('images/signinPage/Title.png');
    background-size: 100% 100%;
    width: 800px;
    height: 12vh;
    z-index: 3;
  `,

  LargeStart: styled.div`
    position: absolute;
    display: flex;
    top: 62.5%;
    left: 150px;
    background-image: url('images/signinPage/LargeStar.png');
    background-size: 100% 100%;
    width: 250px;
    height: 17.5vh;
    z-index: 4;
  `,

  Union: styled.div`
    position: absolute;
    top: 20vh;
    left: 325px;
    background-image: url('images/signinPage/Union.png');
    background-size: 100% 100%;
    width: 100px;
    height: 8vh;
  `,

  MiniStart: styled.div`
    position: absolute;
    top: 30vh;
    left: 1000px;
    background-image: url('images/signinPage/MiniStar.png');
    background-size: 100% 100%;
    width: 100px;
    height: 8vh;
    z-index: 3;
  `,
  //======================================================================================
  Right: styled.div`
    postion: relative;
    width: 400px;
    height: 550px;
    margin: auto 0px auto 0px;
    z-index: 5;
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
    white-space: nowrap;
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
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    margin: 5px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    white-space: nowrap;
  `,

  InputMessage: styled.p`
    margin: 20px 0px 0px 0px;
    color: white;
    font-size: 70%;
  `,

  CheckContainer: styled.div`
    display: flex;
    align-items: center;
    // visibility: hidden;
    width: 100%;
    height: 24px;
    color: white;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 5px;
    font-size: 70%;
  `,

  CheckIcon: styled.img`
    width: 14px;
    height: 14px;
    margin: 0px 10px 0px 0px;
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
    font-size: 100%;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
  `,
};
export default styles;
