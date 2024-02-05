import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdOutlineDelete } from 'react-icons/md';

const styles = {
  Container: styled.div`
    overflow: auto;
  `,

  HistoryContainer: styled.div`
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

  History: styled.div`
    color: black;
    font-weight: 500;
  `,

  DeleteButton: styled(MdOutlineDelete)`
    cursor: pointer;
    width: 30px;
    height: 30px;

    &:hover {
      transform: scale(1.1);
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

  //위의 이미지 옆에 표시될 내용 username이나 hashtag
  UserName: styled.div`
    color: black;
    font-size: 20px;
  `,

  PlusFriendLink: styled(Link)`
    &:hover {
      transform: scale(1.1);
    }
  `,

  HashTagLink: styled(Link)`
    text-align: center;
  `,

  Content: styled.div`
    position: relative;
    color: black;
    font-size: 20px;
    text-align: center;
  `,

  SeeReviewButton: styled(Link)`
    background-color: white;
    background-size: cover;
    background-position: center;
    padding: 10px;
    font-size: 15px;
    text-align: center;
    color: black;
    cursor: pointer;
    border-radius: 20px;
  `,
};

export default styles;
