import styled from 'styled-components';
import { IoSearch, IoCloseSharp } from 'react-icons/io5';

const styles = {
  Container: styled.div`
    position: absolute;

    width: 100vw;
    height: 100vh;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.7);
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  `,

  InnerContainer: styled.div`
    width: 400px;
    height: 200px;
    background-color: white;
    border-radius: 25px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  TopContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  `,

  Title: styled.div`
    font-size: large;
    font-weight: bold;
  `,

  ExitButton: styled(IoCloseSharp)`
    width: 33px;
    height: 33px;

    cursor: pointer;
  `,

  ErrorMessageContainer: styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  ErrorMessage: styled.div`
    font-weight: bold;
  `,
};

export default styles;
