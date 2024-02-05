import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  Container: styled.div`
    overflow: auto;
  `,

  HashtagContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    border-bottom: 2px solid white;
    height: 50px;
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
