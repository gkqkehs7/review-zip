import { CurtPost, User } from '@/types/common.types';
import { GetUserInfoResponse } from '@/types/response.types';

import ProfileNameImageComponent from '@components/myProfilePageComponent/profileNameImageComponent/profileNameImageComponent';
import UserProfileStatsComponent from '@components/myProfilePageComponent/userProfileStatsComponent/userProfileStatsComponent';
import ButtonComponent from '@components/myProfilePageComponent/buttonComponent/buttonComponent';
import ReviewPictureComponent from '@components/myProfilePageComponent/reviewPicturesComponent/reviewPictureComponent';
import styles from './style';

export interface ProfileProps {
  isEditProfile: boolean;
  isFriend?: boolean;
  userInfo?: User;
  userId?: string | number;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean[]>>;
  setIsEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  setFriendListOpen: React.Dispatch<React.SetStateAction<boolean>>;
  postItemIsClicked: boolean;
  setPostClicked: React.Dispatch<React.SetStateAction<boolean>>;
  storageIsClicked: boolean;
  setStorageClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setIsScrab: React.Dispatch<React.SetStateAction<string>>;
  setPostIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  curtPosts: CurtPost[];
  setPostId: React.Dispatch<React.SetStateAction<number>>;
}

const ProfileComponent: React.FC<ProfileProps> = ({
  isEditProfile,
  userInfo,
  setIsClicked,
  setIsEditProfile,
  isFriend,
  setFriendListOpen,
  postItemIsClicked,
  setPostClicked,
  storageIsClicked,
  setStorageClicked,
  setIsScrab,
  setPostIsClicked,
  curtPosts,
  setPostId,
}) => {
  return (
    <styles.ProfilePictureContainer>
      <styles.ProfileContainer>
        {/*좌측의 이름과 프로필 사진이 뜨는 컴포넌트 */}
        <ProfileNameImageComponent
          isEditProfile={isEditProfile}
          isFriend={isFriend}
          userInfo={userInfo}
        />

        {/*게시물,리뷰어,리뷰잉 수와 프로필 수정 버튼이 들어있는 컴포넌트 */}
        <UserProfileStatsComponent
          setIsClicked={setIsClicked}
          setIsEditProfile={setIsEditProfile}
          isEditProfile={isEditProfile}
          isFriend={isFriend}
          setFriendListOpen={setFriendListOpen}
          userInfo={userInfo}
        />
      </styles.ProfileContainer>

      {/* 게시물 ,저장소 버튼 컴포넌트  */}
      <ButtonComponent
        postItemIsClicked={postItemIsClicked}
        setPostClicked={setPostClicked}
        storageIsClicked={storageIsClicked}
        setStorageClicked={setStorageClicked}
      />

      {/* 리뷰 게시물 이미지 컴포넌트 */}
      <ReviewPictureComponent
        setPostIsClicked={setPostIsClicked}
        posts={curtPosts}
      />
    </styles.ProfilePictureContainer>
  );
};

export default ProfileComponent;
