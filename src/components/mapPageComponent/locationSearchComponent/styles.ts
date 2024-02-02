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
    width: 70%;
    height: 5%;
    margin: 71px 0 0 0;
  `,

  SearchingContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 800px;
    margin: 0px 0px 0px 0px;
  `,

  SearchBarForm: styled.form`
    display: flex;
    align-items: center;
    postion: relative;
    width: 100%;
    height: 70px;
    margin: 50px auto;
    padding: 0px 0px 0px 0px;
    border: 0px;
  `,

  SearchIcon: styled.img`
    position: absolute;
    width: 40px;
    height: 40px;
    padding: 0px 0px 0px 10px;
    z-index: 3;
  `,

  SearchBar: styled.input`
    background-color: rgba(255, 255, 255, 0.4);
    width: 100%;
    height: 45px;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 55px;
    border-radius: 22px;
    outline: none;
    color: white;
    font-size: 110%;
    z-index: 3;

    &::placeholder {
      color: white;
      text-align: center;
      margin-left: 35px;
    }
  `,

  PlaceList: styled.ul`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;

    height: fit-content;

    margin: 0px auto 0px auto;
    padding: 0px;
    color: black;
    overflow: auto;

    z-index: 2;
    &:: -webkit-scrollbar {
      display: none;
    }
  `,

  StarsImage: styled.div`
    position: absolute;
    top: 90px;
    left: 0px;
    background-image: url('images/mapPage/Stars.png');
    background-size: 115% 105%;
    width: 265px;
    height: 461x;
    margin: 200px 0px 0px 0px;
    transform: rotate(-12deg);

    z-index: 0;
  `,
};

export default styles;
