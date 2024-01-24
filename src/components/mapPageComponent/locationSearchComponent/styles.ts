import styled from 'styled-components';

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    postion: relative;
    background-image: url('images/mapPage/Background.png');
    background-size: 110% 110%;
    background-position: 0px -30px;
    width: 404px;
    height: 100%;
    margin: 0px 0px 0px -10px;
    border: 1px solid red;
    z-index: 0;
  `,

  Top: styled.div`
    background-image: url('images/mapPage/Top.png');
    background-size: 100% 100%;
    width: 268px;
    height: 61px;
    border: 1px solid white;
    margin: 71px auto 0px auto;
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
    z-index: 1;
    font-size: 100%;
    margin: 0px 0px 0px 0px;

    &::placeholder {
      color: white;
      padding: 0px 0px 0px 55px;
    }
  `,

  PlaceList: styled.ul``,

  Pagnitation: styled.div``,
  Stars: styled.div`
    position: relative;
    background-image: url('images/mapPage/Stars.png');
    background-size: 115% 115%;
    width: 265.94px;
    height: 461.43px;
    margin: 200px 0px 0px 0px;
    border: 1px solid white;
    transform: rotate(-15deg);
    z-index: 0;
  `,
};

export default styles;
