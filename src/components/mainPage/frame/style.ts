import styled from 'styled-components';

const styles = {
  Container: styled.div`
    position: relative;
    margin: 40vh auto;
  `,

  Frame: styled.div`
    cursor: pointer;
    background-color: white;
    /* width: 325px
    height: 399px; */
    padding: 12px 12px 20px 10px;
  `,

  FrameSticker: styled.img`
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  `,

  ImageContainer: styled.div`
    width: 291px;
    height: 296px;
    display: flex;
    background-color: black;
    justify-content: center;
    align-items: center;
    position: relative;
  `,

  Image: styled.img`
    object-fit: cover;
    width: 100%;
    height: auto;
  `,

  StarContainer: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px;
  `,

  FrameBottom: styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0;
  `,

  StarImage: styled.img`
    width: 26px;
    height: 26px;
  `,

  LikeText: styled.div`
    margin: 0px 5px;
    font-weight: bold;
  `,

  TextContainer: styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 4vh 3vw;
  `,

  Text: styled.p`
    color: white;
    font-size: x-large;
    font-weight: bold;
  `,
};

export default styles;
