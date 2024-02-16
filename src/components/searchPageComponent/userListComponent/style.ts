import { Link } from 'react-router-dom';
import styled from 'styled-components';

const styles = {
  Container: styled.div`
    overflow: auto;
  `,
  UserContainer: styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    border-bottom: 2px solid white;
    height: 50px;

    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  `,

  UserData: styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  //username 옆에 뜰 이미지 - 원
  UserImage: styled.img`
    border-radius: 50px;
    margin-right: 10px;
  `,

  UserNickname: styled.div`
    color: black;
    font-size: 20px;
  `,

  //위의 이미지 옆에 표시될 내용 username이나 hashtag
  UserName: styled.div`
    color: black;
    font-size: 12px;
  `,

  UserNicknameName: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  //친구 추가 이미지
  PlusFriend: styled.img`
    margin: 0 28.8px 0 28.8px;

    &:hover {
      transform: scale(1.1);
    }
  `,
};

export default styles;
