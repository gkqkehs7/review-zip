import styled from 'styled-components';

const styles = {
  Container: styled.div`
    position: absolute;

    width: 100vw;
    height: 100vh;
    z-index: 1100;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.7);
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  `,
  ReviewingStopModal: styled.div`
    width: 500px;
    height: 300px;
    background-color: white;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2000;
  `,
  ReviewingProfileContainer: styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2000;
  `,
  ReviewingUserProfile: styled.img`
    border-radius: 50px;
    width: 90px;
    height: 90px;
    z-index: 2000;
  `,
  BorderTopContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top: solid black 1px;
    cursor: pointer;
    z-index: 2000;
  `,
};

export default styles;
