import styled from 'styled-components';

const styles = {
  Container: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  `,

  InnerContainer: styled.div`
    width: 70%;
    height: 60%;

    display: flex;
    align-items: center;
  `,

  FrameContainer: styled.div`
    cursor: pointer;
  `,

  Frame: styled.img`
    height: 350px;
    object-fit: contain;
  `,

  ContentContainer: styled.div``,

  TextContainer: styled.div`
    display: flex;
    align-items: center;
    margin: 4px 0;
  `,

  Text: styled.div`
    max-height: 6vh;
    color: white;
    font-weight: bold;
  `,

  SpaceShipImageContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 2px;
  `,

  SpaceShipImage: styled.img`
    align-items: right;
    width: auto;
    height: 6vh;
  `,

  HashTagContainer: styled.div`
    display: flex;
    margin: 4px 0;
  `,

  HashTag: styled.div`
    margin: 4px 2px;
    color: white;
    font-weight: bold;
  `,

  LikeText: styled.div`
    color: white;
    font-weight: bold;
    margin: 4px 0;
  `,
};

export default styles;
