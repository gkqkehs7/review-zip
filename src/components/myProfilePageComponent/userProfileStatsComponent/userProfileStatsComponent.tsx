import { Link } from 'react-router-dom';

import styles from './style';
import PlusFriend from '/images/myProfilePage/PlusFriend.png';

export interface UserProfileStatsProps {
  storageIsClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean[]>>;
  setIsEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  isEditProfile: boolean;
}
const UserProfileStatsComponent: React.FC<UserProfileStatsProps> = ({
  storageIsClicked,
  setIsClicked,
  setIsEditProfile,
  isEditProfile,
}) => {
  return (
    <div>
      <styles.UserProfileStatsContainer>
        <styles.UserProfileStats
          onClick={() => {
            setIsClicked([true, false, false]);
          }}
        >
          게시물 09
        </styles.UserProfileStats>
        <styles.UserProfileStats
          onClick={() => {
            setIsClicked([false, true, false]);
          }}
        >
          리뷰어 30
        </styles.UserProfileStats>
        <styles.UserProfileStats
          onClick={() => {
            setIsClicked([false, false, true]);
          }}
        >
          리뷰잉 30
        </styles.UserProfileStats>
      </styles.UserProfileStatsContainer>
      <styles.EditProfileButtonContainer>
        <styles.EditProfileButton
          onClick={() => {
            setIsEditProfile(!isEditProfile);
          }}
        >
          프로필 수정
        </styles.EditProfileButton>
        {storageIsClicked && (
          <Link to="">
            <styles.PlusButton src={PlusFriend} />
          </Link>
        )}
      </styles.EditProfileButtonContainer>
    </div>
  );
};

export default UserProfileStatsComponent;
