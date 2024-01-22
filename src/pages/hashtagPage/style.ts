import styled from 'styled-components';
import { IoSearch, IoCloseSharp } from 'react-icons/io5';

const styles = {
  Container: styled.div`
    // 화면 전체 사용하게
    background-image: url('images/myProfilePage/ProfileBackgroundImage.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  `,
  HashtagContainer: styled.div`
    positipn: relative;
    top: 0;
    width: 900px;
    min-width: 400px;
    margin: 0 auto;
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
    overflow: hidden;
    display: flex;
    justify-content: space-between;
  `,
  HashtagTopContainer: styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 100px;
    border-bottom: solid 2px #d5b2ff;
  `,
  ExitSearchContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px 20px 0 0;
  `,
  ExitButton: styled(IoCloseSharp)`
    color: white;
    width: 40px;
    height: 25px;
    cursor: pointer;
  `,
  SearchIcon: styled(IoSearch)`
    color: white;
    width: 28px;
    height: 25px;
    cursor: pointer;
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
  DropdownContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    padding: 0 200px;
    margin-bottom: 2vh;
  `,
  SortDropdown: styled.p`
    color: white;
    font-size: 15px;
  `,
  DownImage: styled.img`
    width: 15px;
    height: 15px;
  `,
};

export default styles;
