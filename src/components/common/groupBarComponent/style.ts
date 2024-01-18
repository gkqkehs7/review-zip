import styled from 'styled-components';

const styles = {
  Container: styled.div`
    position: fixed;
    z-index: 1000;
  `,

  IconContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 330px;
    height: 50px;
    background-color: #7843b6;
    cursor: pointer;
  `,

  Icon: styled.img`
    width: 30px;
    height: auto;
    padding: 10px;
  `,

  MenuContainer: styled.div<{ isVisible: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 330px;
    height: 50px;

    border-radius: 20px;
    background-color: #d9d9d9;
    height: ${(props) => (props.isVisible ? '50px' : '0')};
    transition: height 0.5s ease;
  `,

  Menu: styled.div`
    width: 50px;
    height: 100%;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover {
      background-color: #d5b2ff;
    }
  `,

  MenuText: styled.div<{ isVisible: boolean }>`
    display: ${(props) => (props.isVisible ? 'flex' : 'none')};
    font-weight: bold;
  `,
};

export default styles;
