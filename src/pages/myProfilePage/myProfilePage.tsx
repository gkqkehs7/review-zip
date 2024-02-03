import { useState, useCallback, useEffect, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { GetAxiosInstance } from '@/api/axios.methods';
import { CurtPost, Post, User } from '@/types/common.types';
import {
  GetUserPostsResponse,
  GetUserInfoResponse,
  GetRandomPostResponse,
} from '@/types/response.types';
import ReviewPictureComponent from '@/components/myProfilePageComponent/reviewPicturesComponent/reviewPictureComponent';
import ProfileNameImageComponent from '@/components/myProfilePageComponent/profileNameImageComponent/profileNameImageComponent';
import UserProfileStatsComponent from '@/components/myProfilePageComponent/userProfileStatsComponent/userProfileStatsComponent';
import ButtonComponent from '@/components/myProfilePageComponent/buttonComponent/buttonComponent';
import LikeListComponent from '@/components/common/likeListComponent/likeListComponent';
import PostComponent from '@/components/postComponent/postComponent';

import styles from './style';
import MainLogo from '/images/myProfilePage/MainLogoImage.png';
import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';
import LoadingModalComponent from '@/components/common/loadingModalComponent/loadingModalComponent';

//게시물 정보를 담은 배열의 게시물 타입
export type PictureType = {
  postId: number;
  postImageUrl: string;
  likeNum: number;
  scrabNum: number;
};

const MyProfilePage: React.FC = memo(({}) => {
  //게시물 버튼을 클릭한 경우, 저장소 버튼을 클릭한 경우에 대한 state
  const [postItemIsClicked, setPostClicked] = useState<boolean>(true);
  const [storageIsClicked, setStorageClicked] = useState<boolean>(false);
  //화면에 표시된 순서대로 게시물, 리뷰어 , 리뷰잉이 클릭이 된건지에 대한 값이 배열에 들어감
  const [isClicked, setIsClicked] = useState<boolean[]>([false, false, false]);
  //프로필 수정
  const [isEditProfile, setIsEditProfile] = useState<boolean>(false);
  //게시물이 클릭
  const [postIsClicked, setPostIsClicked] = useState<boolean>(false);
  //모달 오픈
  const [openModal, setOpenModal] = useState<boolean>(false);
  //리뷰잉이나 리뷰어 눌렀을 때 쓸 컴폰넌트 오픈
  const [friendListOpen, setFriendListOpen] = useState<boolean>(false);

  // 스크랩한 게시물인 경우 /scrab이 붙음
  const [isScrab, setIsScrab] = useState<string>('');
  //간단한 게시물 정보
  const [curtPosts, setCurtPosts] = useState<CurtPost[]>([]);
  //userId 본인 프로필 페이지인 경우 me 다른 유저들은 숫자 일단은 3을 기본으로
  const [userId, setUserId] = useState<string | number>(3);
  //프로필 상단에 들어갈 유저 정보
  const [userInfo, setUserInfo] = useState<GetUserInfoResponse>();
  const [isFriend, setIsFriend] = useState<boolean>(false);
  //userId에 본인 프로필 페이지인 경우 me가 들어가고, 다른 유저인 경우는 숫자가 들어감
  const [friendId, setFriendId] = useState<number>(1);
  //***문제 == > 데이터를 서버에서 받아와도 그 이전에 받아온 데이터를 props로 내려버려서 화면에 이전에 받아온 데이터가 떠버림 근데 그래도 state가 바뀌면 재랜더링이 되야 되는데 안됨 -> loading이 끝났을 때만 화면에 띄우게끔 state를 만듦
  const [curtPostLoading, setCurtPostLoading] = useState<boolean>(false);
  //userInfo의 로딩
  const [userInfoLoading, setUserInfoLoading] = useState<boolean>(false);

  const location = useLocation();
  const [post, setPost] = useState<Post>(defaultPost);
  const [users, setUsers] = useState<User[]>(defaultUser);

  // 랜덤으로 게시글 한개 가져오기
  const getPost = async () => {
    try {
      const response =
        await GetAxiosInstance<GetRandomPostResponse>('/v1/posts/3');

      setPost(response.data.result);

      console.log(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  // 포스트들 가져오기
  const getCurtPosts = async () => {
    setCurtPostLoading(true);
    try {
      const response = await GetAxiosInstance<GetUserPostsResponse>(
        `/v1/users/${userId}/posts${isScrab}?page=0&size=8`,
      );
      //일단은 배열 길이로 같은 데이터인지 다른 데이터인지 구볋함
      if (response.data.result.postList.length !== curtPosts.length) {
        setCurtPosts(response.data.result.postList);
      }
      console.log('Posts:', response.data.result);
      console.log(`/v1/users/${userId}/posts${isScrab}?page=0&size=8`);
    } catch (error) {
      console.log(error);
    } finally {
      setCurtPostLoading(false); //로딩이 끝난 경우 false로 바꾸기
    }
  };

  console.log(userId);
  // 유저들의 정보(닉네임, 프로필 이미지 등) 가져오기
  const getUserInfo = async () => {
    setUserInfoLoading(true);
    try {
      const response = await GetAxiosInstance<GetUserInfoResponse>(
        `/v1/users/${userId}`,
      );
      if (response.data.result.userId !== userInfo?.userId) {
        setUserInfo(response.data.result);
      } // 이전에 받아온 데이터와 다른 경우에만 set을 해줌
      console.log('UserInfo:', response.data.result);
      console.log(`/v1/users/${userId}/`);
    } catch (error) {
      console.log(error);
    } finally {
      setUserInfoLoading(false);
    }
  };

  useEffect(() => {
    // 현재 경로에 따라 userId를 설정
    if (location.pathname === '/myProfilePage') {
      setUserId(userId);
    } else if (location.pathname.startsWith('/friendProfilePage')) {
      setUserId(friendId);
    }
  }, [location.pathname, friendId]);

  //경로가 이동되면서 userId가 바뀌거나 아니면 저장소 버튼을 눌러서 isScrab이 달라지면 서버에서 데이터를 호출
  useEffect(() => {
    if (userId) {
      getCurtPosts();
      getUserInfo();
      getPost();
    }
  }, [userId, isScrab]);

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
      {/*리뷰어가 클릭이 됐을 때와 리뷰잉이 클릭이 됐을 때 다른 창이 뜨게끔 */}
      {isClicked[1] && (
        <LikeListComponent
          users={users}
          closeLikeListModal={closeFriendListModal}
          likeListOpen={friendListOpen}
          isReviewer={isClicked[1]}
          isReviewing={isClicked[2]}
          setFriendId={setFriendId}
          setIsFriend={setIsFriend}
        />
      )}
      {isClicked[2] && (
        <LikeListComponent
          users={users}
          closeLikeListModal={closeFriendListModal}
          likeListOpen={friendListOpen}
          isReviewer={isClicked[1]}
          isReviewing={isClicked[2]}
          setFriendId={setFriendId}
          setIsFriend={setIsFriend}
        />
      )}
      {/* 게시물이 클릭이 된 경우  */}
      {postIsClicked && (
        <styles.Overlay>
          <PostComponent
            post={post}
            modalOpen={modalOpen}
            modalClose={modalClose}
            setPostIsClicked={setPostIsClicked}
          />
        </styles.Overlay>
      )}
      {/*메인 로고 - 뷰포트 크기에 의해 일정 크기 이하에서는 옆으로 넘어감  */}
      <styles.MainLogoContainer>
        <styles.MainLogoImage src={MainLogo} />
      </styles.MainLogoContainer>
      <styles.ProfilePictureContainer>
        {/*보라색 세로 그룹 바  */}
        <GroupBarComponent color="purple" direction="col" />
        <styles.ProfileContainer>
          {/*좌측의 이름과 프로필 사진이 뜨는 컴포넌트 */}
          {!userInfoLoading && userInfo ? ( //유저 정보가 새로 로딩이 된 경우
            <ProfileNameImageComponent
              isEditProfile={isEditProfile}
              isFriend={isFriend}
              userInfo={userInfo}
            />
          ) : (
            <LoadingModalComponent />
          )}
          {/*게시물,리뷰어,리뷰잉 수와 프로필 수정 버튼이 들어있는 컴포넌트 */}
          {!userInfoLoading && userInfo ? (
            <UserProfileStatsComponent
              setIsClicked={setIsClicked}
              setIsEditProfile={setIsEditProfile}
              isEditProfile={isEditProfile}
              isFriend={isFriend}
              setFriendListOpen={setFriendListOpen}
              userInfo={userInfo}
            />
          ) : (
            <LoadingModalComponent />
          )}
        </styles.ProfileContainer>
        {/*게시물 ,저장소 버튼 컴포넌트  */}
        <ButtonComponent
          postItemIsClicked={postItemIsClicked}
          setPostClicked={setPostClicked}
          storageIsClicked={storageIsClicked}
          setStorageClicked={setStorageClicked}
          setIsScrab={setIsScrab}
        />
        {/* 리뷰 게시물 이미지 컴포넌트 */}
        {!curtPostLoading && curtPosts ? (
          <ReviewPictureComponent
            storageIsClicked={storageIsClicked}
            setPostISClicked={setPostIsClicked}
            curtPost={curtPosts}
          />
        ) : (
          <></>
        )}
      </styles.ProfilePictureContainer>
    </styles.Container>
  );
});

const defaultPost: Post = {
  postId: 0,
  comment: '',
  point: 0,
  likeNum: 0,
  checkLike: false,
  checkScrab: false,
  createdAt: new Date(),
  userInfo: { id: 3, nickname: 'ahffk', profileUrl: '', following: true },
  hashtags: [],
  postImages: [],
};

const defaultUser: User[] = [
  {
    id: 3,
    nickname: 'ahffk',
    profileUrl: '',
    following: true,
  },
];
export default MyProfilePage;
