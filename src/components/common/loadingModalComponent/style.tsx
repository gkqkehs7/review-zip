import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const styles = {
  Container: styled.div`
    position: absolute;

    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  `,

  Image: styled.img`
    width: 122px;
    height: 122px;
    animation: ${rotateAnimation} 3s linear infinite;
  `,
};

export default styles;
