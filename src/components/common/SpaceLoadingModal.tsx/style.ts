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
  `,

  Text: styled.div`
    color: white;
    font-size: x-large;
    font-weight: bold;
  `,
};

export default styles;
