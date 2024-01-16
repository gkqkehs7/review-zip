import styled from 'styled-components';

const styles = {
  HistoryContainer: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 28.8px 40px 28.8px 40px;
    border-bottom: 1px solid white;
  `,
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
  //친구 추가 이미지
  PlusFriend: styled.img`
    margin: 0 28.8px 0 28.8px;
  `,
};

export default styles;
