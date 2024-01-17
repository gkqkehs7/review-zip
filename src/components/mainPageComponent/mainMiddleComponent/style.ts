import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-20px);
  }

  60% {
    transform: translateY(-10px);
  }
`;

const styles = {
  Container: styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    text-align: center;
    position: relative;
  `,

  LeftContainer: styled.div`
    cursor: pointer;
    margin: -25vh auto;
  `,

  MiddleContainer: styled.div`
    cursor: pointer;
    margin: -10vh auto;
  `,

  RightContainer: styled.div`
    cursor: pointer;
    margin: -20vh auto;
  `,

  TextContainer: styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 3vh 3vw;
  `,

  Text: styled.p`
    color: white;
    font-size: x-large;
    font-weight: bold;
  `,

  ArrowImage: styled.img`
    cursor: pointer;

    position: absolute;
    width: 50px;
    height: 50px;
    left: 48%;
    bottom: 10px;
    transform: translate(-50%, -50%);

    animation: ${bounceAnimation} 1s infinite;
  `,
};

export default styles;
