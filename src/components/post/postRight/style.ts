import styled from 'styled-components';
import { GrLike } from 'react-icons/gr';

const styles = {
  Container: styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 565px;
    height: 785px;
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
  LikeText: styled.div`
    font-size: small;
  `,

  LikePersonNumber: styled.span`
    cursor: pointer;
    font-weight: bold;
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
