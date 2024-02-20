import { Link } from 'react-router-dom';
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

const postLeftStyles = {
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
    justify-content: space-between;
    align-items: center;
  `,

  TopText: styled.div`
    color: #9766d1;
    font-size: small;
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

  TopText: styled.div`
    display: flex;
    justify-content: flex-end;
    color: #9766d1;
    font-size: small;
    font-weight: bold;
  `,

  Line: styled.div`
    border-top: 1px solid black;
    width: 100%;
    margin: 5px 0 5px 0;
  `,

  UserContainer: styled.div`
    display: flex;
    align-items: center;

    cursor: pointer;
  `,

  UserImage: styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
  `,

  UserName: styled.div`
    font-weight: 600;
    margin: 0 15px 0 8px;
  `,

  PostDate: styled.div``,

  ImageSliderContainer: styled.div`
    padding: 10px 0;
  `,

  Buttons: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
  `,

  LikeSrabButtons: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  LikeButton: styled.img`
    cursor: pointer;
    width: 26px;
    height: auto;
    margin-right: 10px;

    &:hover {
      transform: scale(1.1);
    }
  `,

  ScrabButton: styled.img`
    cursor: pointer;
    margin-right: 10px;

    &:hover {
      transform: scale(1.1);
    }
  `,

  MapButton: styled.img`
    cursor: pointer;
    width: 26px;
    height: auto;

    &:hover {
      transform: scale(1.1);
    }
  `,

  LikeContainer: styled.div`
    display: flex;
    align-items: center;
  `,

  LikeText: styled.span`
    cursor: pointer;
    font-weight: bold;
    font-size: small;
    margin-right: 3px;
  `,

  LikeUserImage: styled.img`
    border-radius: 50px;
    width: 18px;
    height: 18px;
  `,
  PostContentContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  `,

  PostContent: styled.div``,

  MoreContentButton: styled.div`
    cursor: pointer;
    font-size: small;
    text-decoration: underline;
  `,

  SpaceShipImageContainer: styled.div`
    display: flex;
    justify-content: flex-end;
  `,

  SpaceShipImage: styled.img`
    align-items: right;
    width: 2vw;
    height: auto;
  `,
};

export { postLeftStyles, styles };
