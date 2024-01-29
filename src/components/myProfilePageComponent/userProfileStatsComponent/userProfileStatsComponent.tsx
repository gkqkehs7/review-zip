import { Link } from 'react-router-dom';

import styles from './style';
import Map from '/images/friendProfilePage/MapImage.png';

export interface UserProfileStatsProps {
  setIsClicked: React.Dispatch<React.SetStateAction<boolean[]>>;
  setIsEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  isEditProfile: boolean;
  isFriend: boolean | undefined;
  setFriendListOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const UserProfileStatsComponent: React.FC<UserProfileStatsProps> = ({
  setIsClicked,
  setIsEditProfile,
  isEditProfile,
  isFriend,
  setFriendListOpen,
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
            setFriendListOpen(true);
          }}
        >
          리뷰어 30
        </styles.UserProfileStats>
        <styles.UserProfileStats
          onClick={() => {
            setIsClicked([false, false, true]);
            setFriendListOpen(true);
          }}
        >
          리뷰잉 30
        </styles.UserProfileStats>
      </styles.UserProfileStatsContainer>
      <styles.EditProfileButtonContainer>
        <styles.EditProfileButton
          onClick={() => {
            isFriend
              ? setIsEditProfile(false)
              : setIsEditProfile(!isEditProfile);
          }}
        >
          {isFriend ? '리뷰잉' : '프로필 수정'}
        </styles.EditProfileButton>
        {isFriend && (
          <Link to="">
            <styles.PlusButton src={Map} />
          </Link>
        )}
      </styles.EditProfileButtonContainer>
    </div>
  );
};

export default UserProfileStatsComponent;
