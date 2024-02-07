import styled from 'styled-components';
import { Link } from 'react-router-dom';

//userNameContainer가 받을 props 프로필 변경시 이름 밑에 밑줄이 그어지게
interface NameProps {
  isEditProfile: boolean;
}

const styles = {
  // 화면 전체 사용하게
  Container: styled.div`
    background-image: url('images/myProfilePage/ProfileBackgroundImage.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    padding: 0 0 10vh 0;

    position: relative;
  `,
  //post Component 클릭 시
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
  //프로필 상단과 게시물을 감싸는 컨테이너
  ProfilePictureContainer: styled.div`
    position: relative;
    top: 0;
    width: 900px;
    min-width: 400px;
    margin: 0 auto;
  `,
  //프로필 상단을 감싸는 컨테이너
  ProfileContainer: styled.div`
    display: flex;
    justify-content: center;
    margin: 7vh auto 0;
    padding: 0 0 2vh 0;
    border-bottom: solid 2px #d5b2ff;
  `,
  //post Component를 감싸는 컨테이너
  PostComponentContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 20px 20px 0 0;
  `,
  //프로필 이름 이미지 컨테이너
  NameImageContainer: styled.div`
    display: flex;
  `,
  //유저의 프로필 이미지
  UserProfileImage: styled.img`
    width: 153px;
    height: 153px;
    border: solid #d5b2ff;
    border-radius: 50%;
  `,
  //프로필 수정시에 프로필사진을 입력을 받을 input
  EditUserProfile: styled.input`
    position: absolute;
    width: 153px;
    height: 153px;
    cursor: pointer;
    background: transparent;
    opacity: 0;
    border: none;
    outline: none;
    z-index: 100;
  `,
  //프로필 수정 시에 프로필 사진 밑에 뜰 카메라 아이콘
  IconCamera: styled.img`
    position: relative;
    left: -3vw;
    top: 15vh;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  `,
  // 유저 이름 컨테이너
  UserNameContainer: styled.div<NameProps>`
    width: 200px;
    min-width: 100px;
    height: 100px;
    margin: 0 20px;
    //이름 수정시에 밑에만 border
    ${({ isEditProfile }) =>
      isEditProfile ? 'border-bottom: 1px solid white;' : ''}
  `,
  //유저 이름
  UserName: styled.p`
    margin-left: 30px;
    color: white;
    font-size: 40px;
    font-weight: bolder;
  `,
  //프로필 수정시에 유저 이름 입력받을 input
  EditUserName: styled.input`
    background: transparent;
    color: white;
    font-size: 40px;
    font-weight: bolder;
    border: none;
    outline: none;
    cursor: pointer;
  `, //프로필 수정시에 유저 이름 밑에 뜰 아이콘 (연필)
  IconEditUserName: styled.img`
    position: relative;
    top: 8vh;
    left: -3vw;
    width: 40px;
    height: 40px;
  `,
  //게시글,리뷰어,리뷰잉 수가 뜨는 컨테이너
  UserProfileStatsContainer: styled.div`
    display: flex;
    margin-top: 5vh;
  `,
  //게시글,리뷰어,리뷰잉 수
  UserProfileStats: styled.p`
    color: white;
    font-weight: bolder;
    margin: 20px;
    cursor: pointer;
  `,
  //나인 경우 프로필 수정 버튼 다른 유저인 경우 리뷰잉 버튼이 들어갈 컨테이너
  EditProfileButtonContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 50px 0 20px;
  `,
  //프로필 수정 버튼 다른 유저인 경우 리뷰잉 버튼
  EditProfileButton: styled.button`
    background-color: #957db3;
    width: 95px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: bolder;
    color: black;
    border-radius: 7px;
    cursor: pointer;
  `,
  //다른 유저인 경우 띄울 지도 버튼
  MapButton: styled.img`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
  `,
  //최상위 버튼 컨테이너 (게시글, 저장소 버튼)
  TopButtonContainer: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2vh;
  `,
  //버튼 이미지와 버튼 이름을 감쌀 컨테이너
  ButtonContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5vw;
    min-width: 80px;
    height: 10vh;
    cursor: pointer;
  `,
  //게시글 클릭시 왼쪽에 뜰 보라색 도형
  LeftPurpleRectangle: styled.div`
    position: relative;
    top: 0;
    left: 3vw;
    background-color: #d5b2ff;
    width: 60px;
    height: 10px;
    border-radius: 2px;
  `,
  //저장소 클릭 시 오른쪽에 뜰 보라색 도형
  RightPurpleRectangle: styled.div`
    position: relative;
    top: 0;
    left: 8vw;
    background-color: #d5b2ff;
    width: 60px;
    height: 10px;
    border-radius: 2px;
  `,
  //게시글 저장소 옆에 붙을 이미지
  Buttonimg: styled.img`
    width: 13px;
    height: 13px;
  `,
  //게시글 저장소 버튼 이름
  ButtonName: styled.p`
    min-width: 100px;
    color: white;
    font-size: 15px;
    margin: 0 10px 0 10px;
  `,
};

export default styles;
