import styled, { keyframes, css } from 'styled-components';

const moveLeft = (widthValue) => keyframes`
  to {
    transform: translate(calc(-50% - ${widthValue} - 10px), -50%);
  }
`;

const moveRight = (widthValue) => keyframes`
  to {
    transform: translate(calc(50% - ${widthValue} + 10px), -50%);
  }
`;

const revert = () => keyframes`
  to {
    transform: translate(-50%, -50%);
  }
`;

const styles = {
  Container: styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
  `,

  Card1: styled.div`
    width: ${(props) => props.width};

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${(props) =>
      props.splitCards &&
      css`
        animation: ${moveLeft(props.move)} 2s forwards;
      `}
  `,

  Card2: styled.div`
    width: ${(props) => props.width};

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${(props) =>
      props.splitCards &&
      css`
        animation: ${moveRight(props.move)} 2s forwards;
      `}
  `,
};

export default styles;
