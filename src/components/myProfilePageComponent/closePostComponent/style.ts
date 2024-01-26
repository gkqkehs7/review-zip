import styled from 'styled-components';

const styles = {
  Overlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* 검은색 배경, 투명도 조절 */
    z-index: 2;
    cursor: pointer;
  `,
};

export default styles;
