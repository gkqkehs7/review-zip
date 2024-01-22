import styled, { keyframes, css } from 'styled-components';
import { MentionsInput, Mention } from 'react-mentions';

const moveRight = () => keyframes`
  to {
    left: 66%;
  }
`;

const revert = () => keyframes`
  from {
    left: 66%;
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
    padding: 1.5vh 2.5vh 2vh 2.5vh;

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
            animation: ${moveRight()} 2s forwards;
          `
        : css`
            animation: ${revert()} 2s forwards;
          `}
  `,

  TopContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
  `,

  UserContainer: styled.div`
    display: flex;
    align-items: center;
  `,

  UserImage: styled.img`
    width: 40.8px;
    height: 40.8px;
    border-radius: 50%;
  `,

  UserName: styled.div`
    margin: 0 15px 0 8px;
    font-weight: bold;
  `,

  SendButton: styled.div`
    cursor: pointer;
    color: #9766d1;
    font-weight: bold;

    &:hover {
      transform: scale(1.1);
    }
  `,

  Line: styled.div`
    border-top: 1px solid black;
    width: 100%;
    margin: 5px 0 10px 0;
  `,

  MentionsTextarea: styled(MentionsInput)`
    flex: 1;
    font-family: Slack-Lato, appleLogo, sans-serif;
    font-size: 15px;
    padding: 8px 9px;

    & strong {
      background-color: #e5d9f4;
    }

    & textarea {
      height: 44px;
      padding: 9px 10px !important;
      outline: none !important;
      border-radius: 4px !important;
      resize: none !important;
      line-height: 22px;
      border: none;
    }

    & ul {
      border: 1px solid lightgray;
      max-height: 200px;
      overflow-y: auto;
      padding: 9px 10px;
      background: white;
      border-radius: 4px;
      width: 150px;
    }
  `,

  EachMention: styled.button<{ focus: boolean }>`
    padding: 4px 20px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    color: black;
    width: 100%;

    ${({ focus }) =>
      focus &&
      `
    background: #9766D1;
    color: white;
    `};
  `,

  HashTagContainer: styled.div`
    display: flex;
    margin-bottom: 10px;
  `,

  HashTag: styled.div`
    background-color: #e5d9f4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;

    border-radius: 13px;
    margin-right: 10px;
  `,

  HashTagText: styled.div`
    font-weight: 600;
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
    width: 37px;
    height: auto;
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
