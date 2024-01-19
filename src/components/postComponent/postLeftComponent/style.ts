import styled, { keyframes, css } from 'styled-components';
import { BsBackspace } from 'react-icons/bs';

const moveLeft = (widthValue) => keyframes`
  to {
    left: 25%;
    /* transform: translate(calc(-50% - ${widthValue} - 10px), -50%); */
  }
`;

const revert = () => keyframes`
  from {
    left: 25%;
  }
  to {
    left: 50%;
  }
`;

const postLeftStyles = {
  Container: styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 15px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${(props) =>
      props.splitPost
        ? css`
            animation: ${moveLeft(props.splitPost)} 2s forwards;
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
  Container: styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 15px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${(props) =>
      props.splitPost
        ? css`
            animation: ${moveLeft(props.splitPost)} 2s forwards;
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
  `,

  UserImage: styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
  `,

  UserName: styled.div`
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
  `,

  ScrabButton: styled.img`
    cursor: pointer;
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
