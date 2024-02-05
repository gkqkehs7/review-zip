import { Link } from 'react-router-dom';
import { GetUserInfoResponse } from '@/types/response.types';
import styles from './style';
import Map from '/images/friendProfilePage/MapImage.png';

export interface UserProfileStatsProps {
  setIsClicked: React.Dispatch<React.SetStateAction<boolean[]>>;
  setIsEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  isEditProfile: boolean;
  isFriend: boolean | undefined;
  setFriendListOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo?: GetUserInfoResponse;
  myInfo?: GetUserInfoResponse;
  userId?: string | number;
}
const UserProfileStatsComponent: React.FC<UserProfileStatsProps> = ({
  setIsClicked,
  setIsEditProfile,
  isEditProfile,
  isFriend,
  setFriendListOpen,
  userInfo = defaultUserInfo,
}) => {
  return (
    <div>
      <styles.UserProfileStatsContainer>
        <styles.UserProfileStats
          onClick={() => {
            setIsClicked([true, false, false]);
          }}
        >
          게시물
        </styles.UserProfileStats>
        <styles.UserProfileStats
          onClick={() => {
            setIsClicked([false, true, false]);
            setFriendListOpen(true);
          }}
        >
          리뷰어 {userInfo.followerNum}
        </styles.UserProfileStats>
        <styles.UserProfileStats
          onClick={() => {
            setIsClicked([false, false, true]);
            setFriendListOpen(true);
          }}
        >
          리뷰잉 {userInfo.followingNum}
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
          <Link to="/mapPage">
            <styles.PlusButton src={Map} />
          </Link>
        )}
      </styles.EditProfileButtonContainer>
    </div>
  );
};

const defaultUserInfo: GetUserInfoResponse = {
  userId: 0,
  name: 'string',
  nickname: 'string',
  profileUrl: 'string',
  followingNum: 0,
  followerNum: 0,
  following: true,
};
export default UserProfileStatsComponent;
