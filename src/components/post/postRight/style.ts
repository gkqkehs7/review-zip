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

  LikeButton: styled(GrLike)`
    cursor: pointer;
    width: 1.5vw;
    margin-right: 10px;
  `,

  ScrabButton: styled.img`
    width: 1.5vw;
    height: auto;
    cursor: pointer;
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
    width: 2vw;
    height: auto;
  `,
};

export default styles;
