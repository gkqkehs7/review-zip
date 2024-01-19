import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  TopButtonContainer: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2vh;
  `,
  LinkContainer: styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5vw;
    min-width: 80px;
    height: 10vh;
    cursor: pointer;
  `,
  LeftPurpleRectangle: styled.div`
    position: relative;
    top: 0;
    left: 2vw;
    background-color: #d5b2ff;
    width: 50px;
    height: 10px;
    border-radius: 2px;
  `,

  RightPurpleRectangle: styled.div`
    position: relative;
    top: 0;
    left: 8vw;
    background-color: #d5b2ff;
    width: 50px;
    height: 10px;
    border-radius: 2px;
  `,
  Buttonimg: styled.img`
    width: 13px;
    height: 13px;
  `,
  ButtonName: styled.p`
    min-width: 100px;
    color: white;
    font-size: 15px;
    margin: 0 10px 0 10px;
  `,
};

export default styles;
