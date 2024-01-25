import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  Container: styled.div`
    position: fixed;
    z-index: 1000;
    display: flex;
  `,

  IconContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    width: 50px;
    height: 330px;
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
    flex-direction: column;
    width: 50px;
    height: 330px;

    border-radius: 20px;
    background-color: #d9d9d9;
    width: ${(props) => (props.isVisible ? '50px' : '0')};
    transition: width 0.5s ease;
  `,

  Menu: styled(Link)`
    width: 100%;
    height: 50px;
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
    color: black;
    display: ${(props) => (props.isVisible ? 'flex' : 'none')};
    font-weight: bold;
  `,
};

export default styles;
