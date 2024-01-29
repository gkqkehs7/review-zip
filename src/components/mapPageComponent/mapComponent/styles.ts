import styled from 'styled-components';

const styles = {
  Container: styled.div`
    postion: relative;
    width: 100%;
    height: 100%;
  `,

  MapContainer: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `,

  PurpleStar: styled.div`
    position: absolute;
    width: 192.54px;
    height: 198.78px;
    background-size: 100% 100%;
    background-image: url('images/mapPage/PurpleStar.png');
    bottom: 50px;
    right: 50px;
    z-index: 3;
  `,
};

export default styles;
