import styles from './style';

import ProfilePhotoImage from '/images/myProfilePage/ProfilePhotoImage.png';

const ProfileNameImageComponent = () => {
  return (
    <styles.NameImageContainer>
      <styles.UserProfileImage src={ProfilePhotoImage} />
      <styles.UserNameContainer>
        <styles.UserName>엔젤</styles.UserName>
      </styles.UserNameContainer>
    </styles.NameImageContainer>
  );
};

export default ProfileNameImageComponent;
