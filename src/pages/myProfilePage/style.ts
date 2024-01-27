import styled from 'styled-components';
import { IoCloseSharp } from 'react-icons/io5';

const styles = {
  Container: styled.div`
    // 화면 전체 사용하게
    background-image: url('images/myProfilePage/ProfileBackgroundImage.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
  `,
  MainLogoImage: styled.img`
    width: 200px;
    height: 50px;
    margin-top: 30px;
    margin-left: 30px;
    position: relative;
    left: 0;
    transition: left 0.5s linear;

    @media (max-width: 900px) {
      left: -100%; // 화면 너비가 600px 이하일 때 왼쪽으로 밀어내기
    }
  `,
  MainLogoContainer: styled.div`
    width: 100%;
    overflow: hidden;
  `,
  ProfilePictureContainer: styled.div`
    positipn: relative;
    top: 0;
    width: 900px;
    min-width: 400px;
    margin: 0 auto;
  `,
  ProfileContainer: styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    border-bottom: solid 2px #d5b2ff;
  `,
  PostComponentContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 20px 20px 0 0;
  `,
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
