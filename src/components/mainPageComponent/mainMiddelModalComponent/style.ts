import styled from 'styled-components';

const styles = {
  Container: styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 1;
    z-index: 999;
    transition: opacity 0.3s ease-in-out;
  `,

  InnerContainer: styled.div`
    width: 70%;
    height: 60%;

    display: flex;
    align-items: center;
    justify-content: center;
  `,

  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
  `,

  TextContainer: styled.div`
    display: flex;
    padding: 10px;
    width: 400px;
    height: 200px;
    border: 2px solid white;
    border-radius: 10px;
  `,

  Text: styled.div`
    max-height: 6vh;
    color: white;
    font-weight: bold;
  `,

  HashTagContainer: styled.div`
    display: flex;
    margin: 4px 0;
  `,

  HashTagText: styled.div`
    margin: 4px 2px;
    color: white;
    font-weight: bold;
  `,

  LikeTextContainer: styled.div`
    display: flex;
    justify-content: flex-start;
  `,

  LikeText: styled.div`
    color: white;
    font-weight: bold;
    margin: 4px 0;
  `,
};

export default styles;
