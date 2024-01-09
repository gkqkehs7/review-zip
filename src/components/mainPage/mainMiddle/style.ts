import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background: linear-gradient(to bottom, #251a34 50%, #331b50 50%);
    position: relative;
  `,

  LeftContainer: styled.div`
    margin: -25vh auto;
  `,

  MiddleContainer: styled.div`
    margin: -10vh auto;
  `,

  RightContainer: styled.div`
    margin: -20vh auto;
  `,

  Frame: styled.div`
    cursor: pointer;
    background-color: white;
    width: 17vw;
    height: 40vh;
    padding: 12px 12px 20px 10px;
  `,

  FrameSticker: styled.img`
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
  `,

  ImageContainer: styled.div`
    width: 100%;
    height: 35vh;
    display: flex;
    background-color: black;
    justify-content: center;
    align-items: center;
  `,

  Image: styled.img`
    object-fit: cover;
    width: 100%;
    height: auto;
  `,

  FrameBottom: styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0;
  `,

  StarImage: styled.img`
    width: 20px;
    height: 20px;
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
