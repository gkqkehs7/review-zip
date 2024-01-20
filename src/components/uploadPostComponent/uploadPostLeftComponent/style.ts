import styled, { keyframes, css } from 'styled-components';
import { BsBackspace } from 'react-icons/bs';

const moveLeft = () => keyframes`
  to {
    left: 34%;
  }
`;

const revert = () => keyframes`
  from {
    left: 34%;
  }
  to {
    left: 50%;
  }
`;

interface ContainerProps {
  splitPost: boolean;
}

const styles = {
  Container: styled.div<ContainerProps>`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 15px;

    width: 30%;
    height: 80%;
    min-width: 350px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${(props) =>
      props.splitPost
        ? css`
            animation: ${moveLeft()} 2s forwards;
          `
        : css`
            animation: ${revert()} 2s forwards;
          `}
  `,

  TopContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,

  ToNextText: styled.div`
    cursor: pointer;
    color: black;
    font-size: medium;
    font-weight: bold;
  `,

  BackButton: styled(BsBackspace)`
    cursor: pointer;
  `,

  Line: styled.div`
    border-top: 1px solid black;
    width: 100%;
    margin: 5px 0 5px 0;
  `,

  ImageSliderContainer: styled.div`
    padding: 10px 0;
  `,

  SpaceShipImageContainer: styled.div`
    display: flex;
    justify-content: flex-end;
  `,

  SpaceShipImage: styled.img`
    align-items: right;
    width: 45.25px;
    height: auto;
  `,
};

export default styles;
