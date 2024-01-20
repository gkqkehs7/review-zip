import styled from 'styled-components';

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
  MainLogoImage: styled.img`
    width: 200px;
    height: 50px;
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
  NameImageContainer: styled.div`
    display: flex;
    margin-top: 10vh;
  `,
  UserProfileImage: styled.img`
    width: 153px;
    height: 153px;
    border: solid #d5b2ff;
    border-radius: 50%;
  `,
  UserNameContainer: styled.div`
    width: 200px;
    min-width: 100px;
    height: 100px;
  `,
  UserName: styled.p`
    margin-left: 30px;
    color: white;
    font-size: 40px;
    font-weight: bolder;
  `,
  UserProfileStatsContainer: styled.div`
    display: flex;
    margin-top: 15vh;
  `,
  UserProfileStats: styled.p`
    min-width: 100px;
    color: white;
    font-weight: bolder;
    margin: 20px;
  `,
  EditProfileButtonContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 50px 0 20px 0;
  `,
  EditProfileButton: styled.button`
    background-color: #957db3;
    width: 130px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    border-radius: 7px;
  `,
  TopButtonContainer: styled.div`
    display: flex;
    justify-content: center;
  `,
  ButtonContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 10vh;
  `,
  Buttonimg: styled.img`
    width: 16px;
    height: 13px;
  `,
  ButtonName: styled.p`
    color: white;
    margin: 0 2px 0 2px;
  `,
};

export default styles;
