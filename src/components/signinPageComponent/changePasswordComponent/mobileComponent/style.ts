import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  Container: styled.div`
    background-image: url('images/signinPage/Background.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    font-size: 115%;
    font-weight: bold;
  `,

  Right: styled.div`
    display: flex;
    flex-direction: column;
    width: 494.6px;
    height: 700px;
    margin: 0px 0px 0px 0px;
  `,

  InputContainer: styled.p`
    width: 100%;
    margin: 10px 0px 0px 0px;
  `,

  InputTitle: styled.div`
    width: 100%;
    height: fit-content;
    margin: 20px 0px 60px 0px;
    font-weight: bold;
    color: white;
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
    width: fit-content;
    margin: 10px 0px 100px 15px;
    color: white;
    font-size: 80%;
    text-decoration: underline;
    white-space: nowrap;
  `,

  ChangeBtn: styled(Link)`
    width: 100%;
    height: fit-content;
    margin: 0px 0px 0px 0px;
    color: white;
    font-size: 250%;
    white-space: nowrap;
    cursor: pointer;
  `,

  Footer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    margin: 50px auto 0px auto;
    padding: 0px 0px 0px 5px;
  `,
  SignUp: styled(Link)`
    width: 69px;
    height: fit-content;
    margin: 0px 0vw 0px 0vw;
    color: white;
    white-space: nowrap;
    cursor: pointer;
  `,

  PrivacyPolicy: styled.p`
    width: fit-content;
    margin: 0px 0px 0px 50px;
    color: #323a54;
    font-size: 125%;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
  `,
};
export default styles;
