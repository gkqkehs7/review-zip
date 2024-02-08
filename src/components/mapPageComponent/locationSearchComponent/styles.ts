import styled from 'styled-components';

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-image: url('images/mapPage/Background.png');
    background-size: 108% 105%;
    background-position: 0px -17.5px;
    margin: 0px 0px 0px -10px;
    z-index: 0;
  `,

  TopImage: styled.h2`
    position: absolute;
    color: white;
    text-align: center;
    margin: 60px 0px 0px 0px;
    font-size: 235%;
    z-index: 3;
  `,

  SearchingContainer: styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 0px;
    margin: 0px 0px 0px 0px;
  `,

  SearchBarForm: styled.form`
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 46px;
    margin: 130px auto;
    padding: 0px 0px 0px 0px;
    border: 0px;
    z-index: 3;
  `,

  SearchIcon: styled.img`
    position: absolute;
    margin: 0px 0px 0px 10px;
    z-index: 3;
  `,

  SearchBar: styled.input`
    background-color: rgba(255, 255, 255, 0.4);
    width: 100%;
    height: 40px;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 55px;
    border-radius: 22px;
    outline: none;
    border: 0;
    color: white;
    font-size: 110%;
    z-index: 3;

    &::placeholder {
      color: white;
      font-size: 90%;
      text-align: center;
      margin-left: 35px;
    }
  `,

  PlaceList: styled.ul`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 195px auto 0px auto;
    padding: 0px;
    color: black;
    overflow: auto;
    z-index: 3;

    &:: -webkit-scrollbar {
      display: none;
    }
  `,

  StarsImage: styled.div`
    position: absolute;
    background-image: url('images/mapPage/Stars.png');
    background-size: 100% 100%;
    top: 250px;
    left: -20px;
    z-index: 2;
  `,
};

export default styles;
