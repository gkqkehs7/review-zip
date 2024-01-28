import styled from 'styled-components';

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    postion: relative;
    background-image: url('images/mapPage/Background.png');
    background-size: 110% 110%;
    background-position: -10px -30px;
    width: 454px;
    height: 100%;
    margin: 0px 0px 0px -10px;

    z-index: 0;
  `,

  TopImage: styled.div`
    background-image: url('images/mapPage/Top.png');
    background-size: 100% 100%;
    width: 268px;
    height: 61px;
    margin: 71px 0 0 0;
  `,

  SearchingContainer: styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 350px;
    height: 800px;
  `,

  SearchBarForm: styled.form`
    display: flex;
    postion: relative;
    width: 300px;
    height: 40px;
    border: 0px;
    margin: 50px auto;
    padding: 0px 0px 0px 0px;
  `,

  SearchIcon: styled.img`
    position: absolute;
    width: 40px;
    height: 40px;
    z-index: 1;
    padding: 0px 0px 0px 10px;
  `,

  SearchBar: styled.input`
    background-color: rgba(255, 255, 255, 0.4);
    width: 100%;
    height: 45px;
    border-radius: 22px;
    border: none;
    color: white;
    z-index: 2;
    font-size: 110%;
    margin: 0px 0px 0px 0px;

    &::placeholder {
      color: white;
      padding: 0px 0px 0px 55px;
    }
  `,

  PlaceList: styled.ul`
    postion: relative;
    width: 240px;
    height: fit-content;
    margin: 30px auto;
    z-index: 3;
    color: white;
    border: 1px solid white;
  `,

  Pagnitation: styled.div``,

  StarsImage: styled.div`
    position: absolute;
    top: 90px;
    left: 0px;
    background-image: url('images/mapPage/Stars.png');
    background-size: 115% 115%;
    width: 265.94px;
    height: 461.43px;
    margin: 200px 0px 0px 0px;

    transform: rotate(-12deg);
    z-index: 0;
  `,
};

export default styles;
