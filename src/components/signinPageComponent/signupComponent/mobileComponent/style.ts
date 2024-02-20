import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  Container: styled.div`
    background-image: url('images/signinPage/Background.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    font-size: 100%;
    font-weight: bold;
    z-index: 0;
  `,

  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: 0px auto 0px auto;
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
    background-color: rgba(255, 255, 255, 0.3);
    width: 100%;
    height: 26px;
    padding-left: 10px;
    box-sizing: border-box;
    border-radius: 100px;
    color: white;
    outline: none;
    border: 0px;

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
    font-size: 60%;
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
    font-size: 60%;
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
    font-size: 60%;
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
    font-size: 60%;
    font-weight: normal;
    margin: 0px 0px 0px 50px;
  `,
  WarnText: styled.p`
    width: 100%;
    margin: 10px 0px 30px 15px;
    color: white;
    font-size: 50%;
    text-decoration: underline;
    white-space: nowrap;
  `,

  SignUpBtn: styled.div`
    width: 350px;
    height: 49px;
    margin: 0px auto 0px auto;
    color: white;
    font-size: 170%;
    cursor: pointer;
  `,

  SignInContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 350px;
    height: 40px;
    margin: 20px auto 0px auto;
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
