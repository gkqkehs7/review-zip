import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const styles = {
  Container: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  SpaceImage: styled.img`
    animation: ${fadeInOut} 2s linear infinite;
    width: 15vw;
  `,

  Text: styled.div`
    color: white;
    font-size: x-large;
    font-weight: bold;
    animation: ${fadeInOut} 2s linear infinite;
  `,
};

export default styles;
