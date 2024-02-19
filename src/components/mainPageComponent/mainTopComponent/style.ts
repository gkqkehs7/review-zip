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
  `,

  ArrowImage: styled.img`
    cursor: pointer;

    position: absolute;
    width: 30px;
    height: 30px;
    bottom: 0;
    left: 49%;
    transform: translateX(-50%);
    z-index: 999;

    margin-bottom: 3vh;
    animation: ${bounceAnimation} 1s infinite;
  `,
};

export default styles;
