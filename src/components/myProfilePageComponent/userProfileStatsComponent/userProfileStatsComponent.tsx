import styles from './style';

const UserProfileStatsComponent = () => {
  return (
    <div>
      <styles.UserProfileStatsContainer>
        <styles.UserProfileStats>게시물 09</styles.UserProfileStats>
        <styles.UserProfileStats>리뷰어 30</styles.UserProfileStats>
        <styles.UserProfileStats>리뷰잉 30</styles.UserProfileStats>
      </styles.UserProfileStatsContainer>
      <styles.EditProfileButtonContainer>
        <styles.EditProfileButton>프로필 수정</styles.EditProfileButton>
      </styles.EditProfileButtonContainer>
    </div>
  );
};

export default UserProfileStatsComponent;
