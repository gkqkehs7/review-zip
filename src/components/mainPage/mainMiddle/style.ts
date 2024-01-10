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
