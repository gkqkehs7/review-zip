import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { GetAxiosInstance } from '@/api/axios.methods';
import { CurtPost, Post, User } from '@/types/common.types';
import {
  GetUserPostsResponse,
  GetUserInfoResponse,
  GetRandomPostResponse,
} from '@/types/response.types';

import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';
import ProfileClickComponent from '@/components/myProfilePageComponent/profileClickComponent/profileClickComponent';
import LogoComponent from '@/components/myProfilePageComponent/logoComponent/logoComponent';

import styles from './style';
import ProfileComponent from '@/components/myProfilePageComponent/profileComponent/profileComponent';

const MyProfilePage: React.FC = () => {
  //게시물 버튼을 클릭한 경우, 저장소 버튼을 클릭한 경우에 대한 state
  const [postItemIsClicked, setPostClicked] = useState<boolean>(true);
  const [storageIsClicked, setStorageClicked] = useState<boolean>(false);
  //프로필 수정
  const [isEditProfile, setIsEditProfile] = useState<boolean>(false);
  //게시물이 클릭
  const [postIsClicked, setPostIsClicked] = useState<boolean>(false);
  //리뷰잉이나 리뷰어 눌렀을 때 쓸 컴폰넌트 오픈
  const [friendListOpen, setFriendListOpen] = useState<boolean>(false);

  //화면에 표시된 순서대로 게시물, 리뷰어 , 리뷰잉이 클릭이 된건지에 대한 값이 배열에 들어감
  const [isClicked, setIsClicked] = useState<boolean[]>([false, false, false]);
  // 스크랩한 게시물인 경우 /scrab이 붙음
  const [isScrab, setIsScrab] = useState<string>('');
  //간단한 게시물 정보
  const [curtPosts, setCurtPosts] = useState<CurtPost[]>([]);

  //프로필 상단에 들어갈 유저 정보
  const [userInfo, setUserInfo] = useState<GetUserInfoResponse>();
  const [isFriend, setIsFriend] = useState<boolean>(false);
  //userId에 본인 프로필 페이지인 경우 me가 들어가고, 다른 유저인 경우는 숫자가 들어감
  const [friendId, setFriendId] = useState<number>(1);

  //post가 클릭 됐을 때 아이디
  const [postId, setPostId] = useState<number>(0);
  const [post, setPost] = useState<Post>(defaultPost);
  const [users, setUsers] = useState<User[]>(defaultUser);

  const { userId } = useParams();

  //prop으로 내릴 post 가져오기
  const getPost = async () => {
    try {
      const response = await GetAxiosInstance<GetRandomPostResponse>(
        `/v1/posts/${postId}`,
      );

      setPost(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  // 포스트들 가져오기
  const getCurtPosts = async () => {
    try {
      const response = await GetAxiosInstance<GetUserPostsResponse>(
        `/v1/users/${userId}/posts${isScrab}?page=0&size=8`,
      );
      setCurtPosts(response.data.result.postList);

      console.log('Posts:', response.data.result);
      console.log(`/v1/users/${userId}/posts${isScrab}?page=0&size=8`);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(userId);

  // 유저들의 정보(닉네임, 프로필 이미지 등) 가져오기
  const getUserInfo = async () => {
    try {
      const response = await GetAxiosInstance<GetUserInfoResponse>(
        `/v1/users/${userId}`,
      );
      setUserInfo(response.data.result);

      console.log('UserInfo:', response.data.result);
      console.log(`/v1/users/${userId}/`);
    } catch (error) {
      console.log(error);
    }
  };

  //경로가 이동되면서 userId가 바뀌거나 아니면 저장소 버튼을 눌러서 isScrab이 달라지면 서버에서 데이터를 호출
  useEffect(() => {
    if (userId) {
      getCurtPosts();
    }
  }, [userId, isScrab]);

  //userId가 바뀌면 유저 정보 다시 호출
  useEffect(() => {
    if (userId) {
      getUserInfo();
    }
  }, [userId]);

  //클릭한 psotId가 바뀌면 포스트 데이터 다시 호출
  useEffect(() => {
    if (postId) {
      getPost();
    }
  }, [postId]);

  return (
    <styles.Container>
      {/*보라색 세로 그룹 바  */}
      <GroupBarComponent color="purple" direction="row" />
      {/*리뷰어가 클릭이 됐을 때와 리뷰잉이 클릭이 됐을 때 다른 창이 뜨게끔하고 post클릭 이벤트 같이 클릭과 관련된 컴포넌트  */}
      <ProfileClickComponent
        users={users}
        post={post}
        friendListOpen={friendListOpen}
        isClicked={isClicked}
        setFriendListOpen={setFriendListOpen}
        setPostIsClicked={setPostIsClicked}
        postIsClicked={postIsClicked}
      />
      <LogoComponent />
      {/*프로필 (프로필 사진, 이름, 게시물 컴포넌트 등등) 상위 컴포넌트 */}
      <ProfileComponent
        isEditProfile={isEditProfile}
        isFriend={isFriend}
        userInfo={userInfo}
        userId={userId}
        setIsClicked={setIsClicked}
        setIsEditProfile={setIsEditProfile}
        setFriendListOpen={setFriendListOpen}
        postItemIsClicked={postItemIsClicked}
        setPostClicked={setPostClicked}
        storageIsClicked={storageIsClicked}
        setStorageClicked={setStorageClicked}
        setIsScrab={setIsScrab}
        setPostIsClicked={setPostIsClicked}
        curtPosts={curtPosts}
        setPostId={setPostId}
      />
      s
    </styles.Container>
  );
};

const defaultPost: Post = {
  postId: 0,
  comment: '',
  point: 0,
  likeNum: 0,
  checkLike: false,
  checkMine: true,
  checkScrab: false,
  createdAt: '',
  userInfo: { userId: 3, nickname: 'ahffk', profileUrl: '' },
  hashtags: [],
  postImages: [],
};

const defaultUser: User[] = [
  {
    userId: 3,
    nickname: 'ahffk',
    profileUrl: '',
  },
];
export default MyProfilePage;
