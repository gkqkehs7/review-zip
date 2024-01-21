import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  Container: styled.div`
    // background-image: url('images/signinPage/Signin.png');
    // background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    font-size: 115%;
    font-weight: bold;
  `,

  Right: styled.div`
    width: 494.6px;
    height: 800px;
    margin: 280px 0px 0px 60vw;
    padding: 35px 0px 0px 0px;
  `,

  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 494.6px;
    margin: 0px 0px 0px 0px;
  `,

  InputTitle: styled.p`
    width: 100%;
    height: 16px;
    margin: 20px 0px 20px 0px;
    color: white;
    font-weight: bold;
  `,

  Input: styled.input`
    background-color: rgba(255, 255, 255, 0.3);
    width: 100%;
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

  WarnText: styled.p`
    margin: 10px 0px 30px 15px;
    color: white;
    font-size: 80%;
    text-decoration: underline;
    white-space: nowrap;
  `,

  SignUpBtn: styled(Link)`
    width: 200px;
    height: 29px;
    margin: 0px 0px 0px 0px;
    color: white;
    font-size: 300%;
    cursor: pointer;
  `,

  SignInContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 40px;
    margin: 40px 0px 0px 5px;
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
