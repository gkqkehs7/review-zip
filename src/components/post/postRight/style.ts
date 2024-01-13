import styled from 'styled-components';
import { GrLike } from 'react-icons/gr';

const styles = {
  Container: styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 75vh;
    background-color: white;
    padding: 1.5vh 2.5vh 2vh 2.5vh;
    margin-left: 7px;

    position: relative;
  `,

  UserContainer: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  `,

  UserImage: styled.img`
    width: 40.8px;
    height: 40.8px;
    border-radius: 50%;
  `,

  UserName: styled.div`
    margin: 0 15px 0 8px;
  `,

  PostDate: styled.div``,

  Line: styled.div`
    border-top: 1px solid black;
    width: 100%;
    margin: 5px 0 10px 0;
  `,

  PostContentContainer: styled.div`
    flex: 1;
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

  PostContent: styled.div``,

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
