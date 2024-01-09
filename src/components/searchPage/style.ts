import styled from 'styled-components';
import { Link } from 'react-router-dom';
const styles = {
  //SearchPage에 쓰이는 MenuBar
  ComponentBox: styled.div`
    position: absolute;
    bottom: 3vh;
    left: 7vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 40px;
    padding: 2vh 0.3vw 2vh 0.3vw;
  `,

  Union: styled(Link)`
    position: relative;
    width: 2vw;
    height: 3.8vh;
    margin: 0.6vw;
    color: white;
    z-index: 3;
    cursor: pointer;
    background-image: url('images/searchPage/UnionSmall.png');
    background-size: cover;
    background-position: center;
  `,

  Plus: styled(Link)`
    position: relative;
    width: 2vw;
    height: 3.8vh;
    margin: 0.6vw;
    color: white;
    z-index: 3;
    cursor: pointer;
    background-image: url('images/searchPage/Plus.png');
    background-size: cover;
    background-position: center;
  `,
  Home: styled(Link)`
    position: relative;
    width: 2vw;
    height: 3.8vh;
    margin: 0.6vw;
    color: white;
    z-index: 3;
    cursor: pointer;
    background-image: url('images/searchPage/Home.png');
    background-size: cover;
    background-position: center;
  `,
  Find: styled(Link)`
    position: relative;
    width: 2vw;
    height: 4vh;
    margin: 0.6vw;
    color: white;
    z-index: 3;
    cursor: pointer;
    background-image: url('images/searchPage/Find.png');
    background-size: cover;
    background-position: center;
  `,

  Map: styled(Link)`
    position: relative;
    width: 2vw;
    height: 3.8vh;
    margin: 0.6vw;
    color: white;
    z-index: 3;
    cursor: pointer;
    background-image: url('images/searchPage/Map.png');
    background-size: cover;
    background-position: center;
  `,

  User: styled(Link)`
    position: relative;
    width: 2vw;
    height: 3.5vh;
    margin: 0.6vw;
    color: white;
    z-index: 3;
    cursor: pointer;
    background-image: url('images/searchPage/User.png');
    background-size: cover;
    background-position: center;
  `,
};

export default styles;
