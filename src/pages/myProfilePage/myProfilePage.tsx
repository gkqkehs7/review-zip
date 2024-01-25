import { useState, useCallback } from 'react';

import ReviewPictureComponent from '@/components/myProfilePageComponent/reviewPicturesComponent/reviewPictureComponent';
import ProfileNameImageComponent from '@/components/myProfilePageComponent/profileNameImageComponent/profileNameImageComponent';
import UserProfileStatsComponent from '@/components/myProfilePageComponent/userProfileStatsComponent/userProfileStatsComponent';
import ButtonComponent from '@/components/myProfilePageComponent/buttonComponent/buttonComponent';
import FriendListComponent from '@/components/myProfilePageComponent/friendListComponent/friendListComponent';
import PostComponent from '@/components/postComponent/postComponent';

import styles from './style';
import MainLogo from '/images/myProfilePage/MainLogoImage.png';

//게시물 정보를 담은 배열의 게시물 타입
export type PictureType = {
  reviewImage: string;
  postId: string;
  likes: number;
  saves: number;
};

//프로필 페이지 Props 타입
interface ProfiilePageProps {
  isFriend?: boolean;
  friendImage?: string;
  pictures?: PictureType[];
}

const MyProfilePage: React.FC<ProfiilePageProps> = ({
  isFriend,
  friendImage,
  pictures,
}) => {
  //게시물 버튼을 클릭한 경우, 저장소 버튼을 클릭한 경우에 대한 state
  const [postItemIsClicked, setPostClicked] = useState<boolean>(true);
  const [storageIsClicked, setStorageClicked] = useState<boolean>(false);
  //화면에 표시된 순서대로 게시물, 리뷰어 , 리뷰잉이 클릭이 된건지에 대한 값이 배열에 들어감
  const [isClicked, setIsClicked] = useState<boolean[]>([false, false, false]);
  //프로필 수정
  const [isEditProfile, setIsEditProfile] = useState<boolean>(false);
  //게시물이 클릭
  const [postIsClicked, setPostISClicked] = useState<boolean>(false);
  //모달 오픈
  const [openModal, setOpenModal] = useState<boolean>(false);
  //리뷰잉이나 리뷰어 눌렀을 때 쓸 컴폰넌트 오픈
  const [friendListOpen, setFriendListOpen] = useState<boolean>(false);

  const modalOpen = useCallback(() => {
    setOpenModal(true);
  }, [openModal]);

  const modalClose = useCallback(() => {
    setOpenModal(false);
  }, [openModal]);

  // '친구 목록' 모달을 닫는 함수
  const closeFriendListModal = () => {
    setFriendListOpen(false);
    modalClose();
  };

  return (
    <styles.Container>
      {/*상단 컨테이너*/}
      {/*리뷰어가 클릭이 됐을 때와 리뷰잉이 클릭이 됐을 때 다른 창이 뜨게끔 */}
      {isClicked[1] && (
        <FriendListComponent
          closeFriendListModal={closeFriendListModal}
          friendListOpen={friendListOpen}
          isReviewer={isClicked[1]}
        />
      )}
      {isClicked[2] && (
        <FriendListComponent
          closeFriendListModal={closeFriendListModal}
          friendListOpen={friendListOpen}
          isReviewer={!isClicked[2]}
        />
      )}
      {/* 게시물이 클릭이 된 경우  */}
      {postIsClicked && (
        <styles.Overlay>
          <styles.ExitButtonContainer
            onClick={() => {
              setPostISClicked(false);
            }}
          >
            <styles.ExitButton />
          </styles.ExitButtonContainer>
          <PostComponent modalOpen={modalOpen} modalClose={modalClose} />
        </styles.Overlay>
      )}
      {/*메인 로고 - 뷰포트 크기에 의해 일정 크기 이하에서는 옆으로 넘어감  */}
      <styles.MainLogoContainer>
        <styles.MainLogoImage src={MainLogo} />
      </styles.MainLogoContainer>
      <styles.ProfilePictureContainer>
        <styles.ProfileContainer>
          {/*좌측의 이름과 프로필 사진이 뜨는 컴포넌트 */}
          <ProfileNameImageComponent
            isEditProfile={isEditProfile}
            friendProfileImage={friendImage}
            isFriend={isFriend}
          />
          {/*게시물,리뷰어,리뷰잉 수와 프로필 수정 버튼이 들어있는 컴포넌트 */}
          <UserProfileStatsComponent
            setIsClicked={setIsClicked}
            setIsEditProfile={setIsEditProfile}
            isEditProfile={isEditProfile}
            isFriend={isFriend}
            setFriendListOpen={setFriendListOpen}
          />
        </styles.ProfileContainer>
        {/*게시물 ,저장소 버튼 컴포넌트  */}
        <ButtonComponent
          postItemIsClicked={postItemIsClicked}
          setPostClicked={setPostClicked}
          storageIsClicked={storageIsClicked}
          setStorageClicked={setStorageClicked}
        />
        {/* 리뷰 게시물 이미지 컴포넌트 */}
        <ReviewPictureComponent
          storageIsClicked={storageIsClicked}
          setPostISClicked={setPostISClicked}
          picture={pictures}
        />
      </styles.ProfilePictureContainer>
    </styles.Container>
  );
};

export default MyProfilePage;
