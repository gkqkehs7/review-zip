import styled from 'styled-components';

const styles = {
  Container: styled.div`
    position: absolute;

    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  `,

  InnerContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 365px;
    height: 215px;

    border-radius: 24px;
    background-color: white;

    padding: 0 100px;
  `,

  DeleteText: styled.div``,

  ButtonsContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  `,

  CancleButton: styled.div`
    cursor: pointer;
    font-weight: bold;
    &:hover {
      transform: scale(1.1);
    }
  `,

  DeleteButton: styled.div`
    cursor: pointer;
    font-weight: bold;
    color: red;
    &:hover {
      transform: scale(1.1);
    }
  `,
};

export default styles;
