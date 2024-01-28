import styled from 'styled-components';

const styles = {
  ZoomContainer: styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: space-around;
    top: 177px;
    right: 50px;
    background-color: rgba(255, 255, 255, 0.7);
    width: 62px;
    height: 524px;
    border-radius: 31px;
    z-index: 1;
  `,
  ZoominImage: styled.div`
    background-image: url('images/mapPage/ZoomIn.png');
    background-size: 100% 100%;
    width: 30px;
    height: 30px;
    margin: 10px auto 0px auto;
  `,
  ZoomVerticalBar: styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(180, 180, 180, 0.6);
    width: 15px;
    height: 391px;
    margin: 0px auto 0px auto;
    border-radius: 7px;
  `,

  ZoomHorizonBar: styled.div`
    postion: relative;
    background-color: rgba(0, 0, 0, 0.6);
    margin: auto 0px auto -18px;
    width: 51px;
    height: 13px;
  `,

  ZoomOutImage: styled.div`
    background-image: url('images/mapPage/ZoomOut.png');
    background-size: 100% 100%;
    width: 30px;
    height: 30px;
    margin: 0px auto 10px auto;
  `,
};

export default styles;
