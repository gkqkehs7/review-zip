import styled from 'styled-components';

const styles = {
  ZoomContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    top: 50px;
    right: 50px;
    background-color: rgba(255, 255, 255, 0.7);
    width: 62px;
    height: 500px;
    border-radius: 31px;
    z-index: 1;
  `,
  ZoominImage: styled.div`
    background-image: url('images/mapPage/ZoomIn.png');
    background-size: 100% 100%;
    width: 30px;
    height: 6%;
    margin: 10px auto 0px auto;
  `,
  ZoomVerticalBar: styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(180, 180, 180, 0.6);
    width: 15px;
    height: 75%;
    margin: 0px auto 0px auto;
    border-radius: 7px;
  `,

  ZoomHorizonBar: styled.div`
    postion: relative;
    background-color: rgba(0, 0, 0, 0.6);
    margin: auto 0px auto -18px;
    width: 50px;
    height: 12.5px;
  `,

  ZoomOutImage: styled.div`
    background-image: url('images/mapPage/ZoomOut.png');
    background-size: 100% 100%;
    width: 30px;
    height: 6%;
    margin: 0px auto 10px auto;
  `,
};

export default styles;
