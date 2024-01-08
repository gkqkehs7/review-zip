import styled from 'styled-components';
import { BsBackspace } from 'react-icons/bs';

const styles = {
  Container: styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 75vh;

    background-color: white;
    padding: 1.5vh 2.5vh 2vh 2.5vh;

    margin-right: 7px;
  `,

  TopContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  BackButton: styled(BsBackspace)`
    cursor: pointer;
  `,

  TopText: styled.div`
    color: #9766d1;
    font-size: small;
    font-weight: bold;
  `,

  Line: styled.div`
    border-top: 1px solid black;
    width: 100%;
    margin: 5px 0 5px 0;
  `,

  ImageSliderContainer: styled.div`
    padding: 10px 0;
  `,

  SpaceShipImageContainer: styled.div`
    display: flex;
    justify-content: flex-end;
  `,

  SpaceShipImage: styled.img`
    align-items: right;
    width: 2vw;
    height: auto;
  `,
};

export default styles;
