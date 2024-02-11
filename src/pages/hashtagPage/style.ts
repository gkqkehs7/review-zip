import styled from 'styled-components';
import { IoSearch, IoCloseSharp } from 'react-icons/io5';

const styles = {
  Container: styled.div`
    // 화면 전체 사용하게
    position: relative;
    background-image: url('images/myProfilePage/ProfileBackgroundImage.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
  `,

  HashtagTopContainer: styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 100px;
    border-bottom: solid 2px #d5b2ff;
  `,

  TagName: styled.p`
    margin-left: 30px;
    color: white;
    font-size: 40px;
    font-weight: bolder;
  `,

  TagCount: styled.p`
    color: white;
    font-size: 20px;
    font-weight: bolder;
  `,

  HashtagContainer: styled.div`
    position: relative;
    top: 0;
    width: 900px;
    min-width: 400px;
    margin: 0 auto;
  `,

  PostOverlay: styled.div`
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
