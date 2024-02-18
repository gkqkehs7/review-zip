import styled, { keyframes } from 'styled-components';

const ArrowButtonBounceAnimation = keyframes`
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

const ScrollToTopButtonBounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(20px);
  }

  60% {
    transform: translateY(10px);
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
    position: relative;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    text-align: center;
  `,

  InnerContainer: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
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
    animation: ${ArrowButtonBounceAnimation} 1s infinite;
  `,

  TopButton: styled.img`
    position: absolute;
    bottom: 20px;
    right: 20px;

    background-color: white;
    border-radius: 50px;
    width: 70px;
    height: 70px;

    cursor: pointer;

    transform: translate(-50%, -50%);
    animation: ${ScrollToTopButtonBounceAnimation} 1s infinite;

    margin: 20px;
  `,
};

export default styles;
