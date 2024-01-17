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
    // 화면 전체 사용하게
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
  `,

  TopScrollButton: styled.div`
    position: absolute;
    bottom: 0;
    right: 0;

    background-color: white;
    border-radius: 50px;
    width: 100px;
    height: 100px;

    cursor: pointer;
  `,

  ArrowImage: styled.img`
    position: absolute;
    width: 50px;
    height: 50px;
    bottom: 0;
    left: 48%;
    transform: translate(-50%, -50%);
    animation: ${bounceAnimation} 1s infinite;
  `,
};

export default styles;
