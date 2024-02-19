import styled from 'styled-components';
import { IoCloseSharp } from 'react-icons/io5';

const styles = {
  Container: styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  `,

  CloseBtn: styled(IoCloseSharp)`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 50px;
    height: 50px;
    color: black;

    cursor: pointer;
    z-index: 2;
  `,

  InnerContainer: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
  `,

  MapContainer: styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
  `,

  PurpleStar: styled.div`
    background-size: 100% 100%;
    background-image: url('images/mapPage/PurpleStar.png');
    position: absolute;
    bottom: 0px;
    right: 0px;
    border: 1px solid balck;
    z-index: 2;
  `,
};

export default styles;
