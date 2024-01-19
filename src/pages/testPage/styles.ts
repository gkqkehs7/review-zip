import styled, { keyframes, css } from 'styled-components';

const moveLeft = (widthValue) => keyframes`
  to {
    transform: translate(calc(-50%  - 10px), -50%);
  }
`;

const moveRight = (widthValue) => keyframes`
  to {
    transform: translate(calc(50%  + 10px), -50%);
  }
`;

const revert = () => keyframes`
  to {
    transform: translate(-50%, -50%);
  }
`;

const styles = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    position: relative;
  `,

  Card1: styled.div`
    width: ${(props) => props.width};
    height: 400px;
    background-color: white;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${(props) =>
      props.splitCards &&
      css`
        animation: ${moveLeft(props.move)} 2s forwards;
      `}

    background-color: red;
  `,

  Card2: styled.div`
    width: ${(props) => props.width};
    height: 400px;
    background-color: white;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${(props) =>
      props.splitCards &&
      css`
        animation: ${moveRight(props.move)} 2s forwards;
      `}

    background-color: lightblue;
  `,
};

export default styles;
