import { useState } from 'react';

import ReviewPictureComponent from '@/components/myProfilePageComponent/reviewPicturesComponent/reviewPictureComponent';
import ProfileNameImageComponent from '@/components/myProfilePageComponent/profileNameImageComponent/profileNameImageComponent';
import UserProfileStatsComponent from '@/components/myProfilePageComponent/userProfileStatsComponent/userProfileStatsComponent';
import ButtonComponent from '@/components/myProfilePageComponent/buttonComponent/buttonComponent';

import styles from './style';
import MainLogo from '/images/myProfilePage/MainLogoImage.png';

const MyProfilePage: React.FC = () => {
  const [postItemIsClicked, setPostClicked] = useState<boolean>(true);
  const [storageIsClicked, setStorageClicked] = useState<boolean>(false);
  //화면에 표시된 순서대로 게시물, 리뷰어 , 리뷰잉이 클릭이 된건지에 대한 값이 배열에 들어감
  const [isClicked, setIsClicked] = useState<boolean[]>([false, false, false]);
  const [isEditProfile, setIsEditProfile] = useState<boolean>(false);

  return (
    <styles.Container>
      {/*상단 컨테이너*/}
      {/*리뷰어가 클릭이 됐을 때와 리뷰잉이 클릭이 됐을 때 다른 창이 뜨게끔 */}
      {isClicked[1] && <></>}
      {isClicked[2] && <></>}
      <styles.MainLogoContainer>
        <styles.MainLogoImage src={MainLogo} />
      </styles.MainLogoContainer>
      <styles.ProfilePictureContainer>
        <styles.ProfileContainer>
          {/*좌측의 이름과 프로필 사진이 뜨는 컴포넌트 */}
          <ProfileNameImageComponent isEditProfile={isEditProfile} />
          {/*게시물,리뷰어,리뷰잉 수와 프로필 수정 버튼이 들어있는 컴포넌트 */}
          <UserProfileStatsComponent
            storageIsClicked={storageIsClicked}
            setIsClicked={setIsClicked}
            setIsEditProfile={setIsEditProfile}
            isEditProfile={isEditProfile}
          />
        </styles.ProfileContainer>
        {/*리뷰어가 클릭 됐을 때 나타날 검색창 */}
        {/*게시물 ,저장소 버튼 컴포넌트  */}
        <ButtonComponent
          postItemIsClicked={postItemIsClicked}
          setPostClicked={setPostClicked}
          storageIsClicked={storageIsClicked}
          setStorageClicked={setStorageClicked}
        />
        {/* 리뷰 게시물 이미지 컴포넌트 */}
        <ReviewPictureComponent storageIsClicked={storageIsClicked} />
      </styles.ProfilePictureContainer>
    </styles.Container>
  );
};

export default MyProfilePage;
