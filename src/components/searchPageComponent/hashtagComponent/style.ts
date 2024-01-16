import styled from 'styled-components';
import { Link } from 'react-router-dom';
const styles = {
  HistoryContainer: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 28.8px 40px 28.8px 40px;
    border-bottom: 1px solid white;
  `,
  //hashtag 데이터 옆에 뜰 이미지- 모서리 깎인 사각형
  HashtagImage: styled.img`
    position: relative;
    bottom: 1vh;
    width: 2vw;
    max-width: 47px;
    height: 4vh;
    max-height: 47px;
    margin: 0 40px 0 40px;
    border-radius: 10px;
  `,
  //위의 이미지 옆에 표시될 내용 username이나 hashtag
  Content: styled.span`
    position: relative;
    bottom: 2vh;
    color: black;
    font-size: 20px;
  `,
  //유저가 찾는 데이터가 hashtag인 경우 표시될 리뷰 보기 버튼
  SeeReview: styled(Link)`
    background-color: white;
    background-size: cover;
    background-position: center;
    width: 5vw;
    height: 3vh;
    padding: 10px;
    z-index: 3;
    font-size: 15px;
    font-align: center;
    color: black;
    cursor: pointer;
    border-radius: 20px;
  `,
  SeeReviewContainer: styled.div`
    position: relative;
    bottom: 2vh;
  `,
};

export default styles;
