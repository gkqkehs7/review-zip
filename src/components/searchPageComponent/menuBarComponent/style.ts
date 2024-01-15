import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  //SearchPage에 쓰이는 MenuBar
  ComponentBox: styled.div`
    position: absolute;
    bottom: 3vh;
    left: 7vw;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 21px 5px 21px 5px;
  `,

  Union: styled(Link)`
    position: relative;
    background-image: url('images/searchPage/UnionSmallImage.png');
    background-size: cover;
    background-position: center;
    width: 2vw;
    height: 3.8vh;
    margin: 11px;
    color: white;
    z-index: 3;
    cursor: pointer;
  `,

  Plus: styled(Link)`
    position: relative;
    background-image: url('images/searchPage/PlusImage.png');
    background-size: cover;
    background-position: center;
    width: 2vw;
    height: 3.8vh;
    margin: 11px;
    color: white;
    z-index: 3;
    cursor: pointer;
  `,
  Home: styled(Link)`
    position: relative;
    background-image: url('images/searchPage/HomeImage.png');
    background-size: cover;
    background-position: center;
    width: 2vw;
    height: 3.8vh;
    margin: 11px;
    color: white;
    z-index: 3;
    cursor: pointer;
  `,
  Find: styled(Link)`
    position: relative;
    background-image: url('images/searchPage/FindImage.png');
    background-size: cover;
    background-position: center;
    width: 2vw;
    height: 4vh;
    margin: 11px;
    color: white;
    z-index: 3;
    cursor: pointer;
  `,

  Map: styled(Link)`
    position: relative;
    background-image: url('images/searchPage/MapImage.png');
    background-size: cover;
    background-position: center;
    width: 2vw;
    height: 3.8vh;
    margin: 11px;
    color: white;
    z-index: 3;
    cursor: pointer;
  `,

  User: styled(Link)`
    position: relative;
    background-image: url('images/searchPage/UserImage.png');
    background-size: cover;
    background-position: center;
    width: 2vw;
    height: 3.5vh;
    margin: 11px;
    color: white;
    z-index: 3;
    cursor: pointer;
  `,
};

export default styles;
