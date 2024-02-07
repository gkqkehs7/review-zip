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
    background-size: 125% 110%;
    background-repeat: no-repeat;
    background-position: 100px -100px;
    width: 1200px;
    height: 800px;
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
  FormContainer: styled.form`
    postion: relative;
    width: 625px;
    height: 750px;
    margin: 250px 0px 0px 60vw;
    z-index: 3;
  `,

  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 15px 0px 0px 0px;
  `,

  InputTitle: styled.p`
    width: 100%;
    height: 16px;
    margin: 20px 0px 20px 0px;
    color: white;
    font-weight: bold;
  `,

  Input: styled.input`
    position: relative;
    background-color: rgba(255, 255, 255, 0.3);
    width: 100%;
    height: 40px;
    padding-left: 10px;
    box-sizing: border-box;
    border-radius: 100px;
    color: white;
    outline: none;
    font-size: 90%;
    &::placeholder {
      color: white;
    }
  `,
  CheckNickName: styled.div`
    display: none;
    position: relative;
    background-image: url('images/signinPage/Check.png');
    background-size: 100% 100%;
    width: 25px;
    height: 25px;
    z-index: 4;
    left: 580px;
    bottom: 32.5px;
    border: 1px solid white;
  `,
  CheckPassWord: styled.div`
    display: none;
    position: relative;
    background-image: url('images/signinPage/Check.png');
    background-size: 100% 100%;
    width: 25px;
    height: 25px;
    z-index: 3;
    left: 580px;
    bottom: 32.5px;
  `,
  WarnText: styled.p`
    margin: 15px 0px 30px 15px;
    color: white;
    font-size: 80%;
    text-decoration: underline;
    white-space: nowrap;
  `,

  SignUpBtn: styled.input`
    background-image: url('images/signinPage/SignUp.png');
    background-repeat: no-repeat;
    width: 300px;
    height: 40px;
    margin: 40px 0px 0px 0px;
    background-color: rgba(255, 255, 255, 0);
    border: 0;
    font-size: 0%;
    cursor: pointer;
  `,

  SignInContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 494.6px;
    height: 40px;
    margin: 80px 0px 0px 0px;
    padding: 0px 0px 0px 5px;
    color: white;
  `,

  SignInBtn: styled(Link)`
    margin: 0px 0px 0px 15px;
    color: white;
    font-size: 100%;
    font-weight: bold;
  `,
};
export default styles;
