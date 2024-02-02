import { useEffect, useState } from 'react';
import { changeInputValue } from '@/hooks/chageInputValue';

import styles from './style';
import ProfilePhotoImage from '/images/myProfilePage/ProfilePhotoImage.png';
import PencilImage from '/images/myProfilePage/Pencil.png';
import CameraImage from '/images/myProfilePage/Camera.png';
import { GetUserInfoResponse } from '@/types/response.types';

export interface ProfileNameImagePrps {
  isEditProfile: boolean;
  friendProfileImage?: string;
  isFriend?: boolean;
  friend?: string;
  userInfo?: GetUserInfoResponse;
}

const ProfileNameImageComponent: React.FC<ProfileNameImagePrps> = ({
  isEditProfile,
  friendProfileImage,
  isFriend = false,
  friend = '',
  userInfo = defaultUserInfo,
}) => {
  const [selectedImage, setSelectedImage] = useState<File | null>();
  const [userName, setUserName] = useState<string>(userInfo.nickname);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const imageFile = event.target.files[0];
      setSelectedImage(imageFile);
    }
  };

  useEffect(() => {
    isFriend && setUserName(userInfo.nickname);
  }, [isFriend]);
  console.log(userInfo);
  return (
    <styles.NameImageContainer>
      {/* 유저가 고른 이미지가 있을 경우 해당 이미지 url 아닌 경우 기본 이미지 주소 */}
      <styles.UserProfileImage
        src={
          selectedImage
            ? URL.createObjectURL(selectedImage)
            : userInfo.profileUrl
        }
        alt="ProfileImage"
      />
      {/* 프로필 수정시에 투명한 input태그를 통해 이미지 파일 받아오고 카메라 아이콘 표시 */}
      {isEditProfile && (
        <>
          <styles.EditUserProfile type="file" onChange={handleFileChange} />
          <styles.IconCamera src={CameraImage} />
        </>
      )}
      <styles.UserNameContainer isEditProfile={isEditProfile}>
        <styles.UserName>
          {/* 프로필 수정시에 유저 이름 받을 input*/}
          {isEditProfile && (
            <styles.EditUserName
              type="text"
              value={userName}
              onChange={(e) => changeInputValue(e, setUserName)}
            />
          )}
          {/* input 태그 입력 중에 기존 이름이 동시에 뜨지 않도록 프로필 수정이 끝나면 userName이 뜨도록 함*/}
          {!isEditProfile && userName}
        </styles.UserName>
      </styles.UserNameContainer>
      {/* 프로필 수정시에 인풋 태그 옆에 뜰 연필 아이콘  */}
      {isEditProfile && <styles.IconEditUserName src={PencilImage} />}
    </styles.NameImageContainer>
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

export default ProfileNameImageComponent;
