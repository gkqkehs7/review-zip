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
    background-size: 100% 100%;
    background-image: url('images/mapPage/PurpleStar.png');
    position: absolute;
    bottom: 50px;
    right: 50px;
    width: 150px;
    height: 150px;
    z-index: 3;
  `,
};

export default styles;
