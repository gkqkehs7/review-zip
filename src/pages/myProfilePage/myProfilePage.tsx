import ReviewPictureComponent from '@/components/myProfilePageComponent/reviewPicturesComponent/reviewPictureComponent';
import ProfileNameImageComponent from '@/components/myProfilePageComponent/profileNameImageComponent/profileNameImageComponent';
import UserProfileStatsComponent from '@/components/myProfilePageComponent/userProfileStatsComponent/userProfileStatsComponent';
import ButtonComponent from '@/components/myProfilePageComponent/buttonComponent/buttonComponent';
import styles from './style';

const MyProfilePage = () => {
  return (
    <styles.Container>
      {/*상단 컨테이너*/}
      <styles.ProfileContainer>
        {/*좌측의 이름과 프로필 사진이 뜨는 컴포넌트 */}
        <ProfileNameImageComponent />
        {/*게시물,리뷰어,리뷰잉 수와 프로필 수정 버튼이 들어있는 컴포넌트 */}
        <UserProfileStatsComponent />
      </styles.ProfileContainer>
      {/*게시물 ,저장소 버튼 컴포넌트  */}
      <ButtonComponent />
      {/* 리뷰 게시물 이미지 컴포넌트 */}
      <ReviewPictureComponent />
    </styles.Container>
  );
};

export default MyProfilePage;
