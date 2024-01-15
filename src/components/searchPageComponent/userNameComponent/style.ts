import styled from 'styled-components';
import { Link } from 'react-router-dom';
const styles = {
  //username 옆에 뜰 이미지 - 원
  UserNameImage: styled.img`
    position: relative;
    bottom: 1vh;
    width: 2vw;
    max-width: 56px;
    height: 4vh;
    max-height: 53px;
    margin: 0 40px 0 40px;
    border-radius: 50px;
  `,
  //위의 이미지 옆에 표시될 내용 username이나 hashtag
  Content: styled.span`
    position: relative;
    bottom: 2vh;
    color: black;
    font-size: 20px;
  `,
  //유저가 찾는 데이터가 username인 경우 옆에 표시될 친구 추가 아이콘
  PlusFriend: styled(Link)`
    position: relative;
    right: 50px;
    bottom: 2vh;
    background-image: url('images/searchPage/PlusFriendImage.png');
    background-size: cover;
    background-position: center;
    width: 1.2vw;
    max-width: 23px;
    height: 2vh;
    max-height: 3px;
    z-index: 100;
    cursor: pointer;
  `,
};

export default styles;
