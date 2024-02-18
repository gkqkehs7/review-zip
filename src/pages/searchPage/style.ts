import styled from 'styled-components';

const styles = {
  Container: styled.div`
    // 화면 전체 사용하게
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  `,
  // 검색창이 포커스 된 경우 나타날 검색창 확장 영역 컴포넌트
  SearchBarExtends: styled.div`
    position: relative;
    top: 0;
    background-color: rgba(255, 255, 255, 0.4);
    max-height: 736px;
    font-size: 20px;
    border: none;
    z-index: 100;
    border-radius: 0 0 30.5px 30.5px;
    overflow: auto; //요소가 많은 경우 안보이게
  `,

  //검색창과 검색창 확장 영역을 감쌀 컨테이너
  SearchBarContainer: styled.div``,
};
export default styles;
