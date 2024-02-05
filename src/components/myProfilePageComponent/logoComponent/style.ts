import styled from 'styled-components';

const styles = {
  MainLogoImage: styled.img`
    width: 200px;
    height: 50px;
    margin-top: 30px;
    margin-left: 30px;
    position: relative;
    left: 0;
    transition: left 0.5s linear;
    visibility: hidden; //일단 숨겨놓음

    @media (max-width: 900px) {
      left: -100%; // 화면 너비가 600px 이하일 때 왼쪽으로 밀어내기
    }
  `,
  MainLogoContainer: styled.div`
    width: 100%;
    overflow: hidden;
  `,
};

export default styles;
