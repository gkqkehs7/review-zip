import styled from 'styled-components';

const styles = {
  Container: styled.div`
    // 화면 전체 사용하게
    background-image: url('images/myProfilePage/ProfileBackgroundImage.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    padding: 0 0 10vh 0;
    overflow-y: scroll;
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
};

export default styles;
