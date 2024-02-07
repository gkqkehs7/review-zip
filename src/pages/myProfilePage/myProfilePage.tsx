import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { GetAxiosInstance } from '@/api/axios.methods';
import { CurtPost, Post, User } from '@/types/common.types';
import {
  GetUserPostsResponse,
  GetUserInfoResponse,
  GetRandomPostResponse,
  GetFollowingsResponse,
  GetFollowersResponse,
} from '@/types/response.types';

import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';
import ProfileClickComponent from '@/components/myProfilePageComponent/profileClickComponent/profileClickComponent';
import LogoComponent from '@/components/myProfilePageComponent/logoComponent/logoComponent';
import LoadingModalComponent from '@/components/common/loadingModalComponent/loadingModalComponent';
import ProfileComponent from '@/components/myProfilePageComponent/profileComponent/profileComponent';

import styles from './style';

const MyProfilePage: React.FC = () => {
  const { userId } = useParams(); // me or number

  // const isFriend = userId === 'me' ? false : true;

  //게시물 버튼을 클릭한 경우, 저장소 버튼을 클릭한 경우에 대한 state
  const [postItemIsClicked, setPostClicked] = useState<boolean>(true);
  const [storageIsClicked, setStorageClicked] = useState<boolean>(false);

  //프로필 수정
  const [isEditProfile, setIsEditProfile] = useState<boolean>(false);

  //게시물이 클릭
  const [postIsClicked, setPostIsClicked] = useState<boolean>(false);

  //리뷰잉이나 리뷰어 눌렀을 때 쓸 컴폰넌트 오픈
  const [friendListOpen, setFriendListOpen] = useState<boolean>(false);

  // 화면에 표시된 순서대로 게시물, 리뷰어 , 리뷰잉이 클릭이 된건지에 대한 값이 배열에 들어감
  const [isClicked, setIsClicked] = useState<boolean[]>([false, false, false]);

  //post가 클릭 됐을 때 아이디
  const [postId, setPostId] = useState<number>(0);

  // 스크랩한 게시물인 경우 /scrab이 붙음
  const [isScrab, setIsScrab] = useState<string>('');
  const [isFriend, setIsFriend] = useState<boolean>(false);

  // const [listLikeOpen ];
  // const [postOpen] ;

  const [userInfo, setUserInfo] = useState<User>();
  const [curtPosts, setCurtPosts] = useState<CurtPost[]>([]);
  const [scrabPosts, setScrabPosts] = useState<CurtPost[]>();
  const [followings, setFollowings] = useState<User[]>([]);
  const [followers, setFollowers] = useState<User[]>([]);
  const [post, setPost] = useState<Post>();

  // 클릭된 포스트 가져오기
  const getPost = useCallback(async () => {
    try {
      const response = await GetAxiosInstance<GetRandomPostResponse>(
        `/v1/posts/${postId}`,
      );

      setPost(response.data.result);
    } catch (error) {
      console.log(error);
    }
  }, [postId]);

  // 올린 게시글들 가져오기
  const getCurtPosts = useCallback(async () => {
    try {
      const response = await GetAxiosInstance<GetUserPostsResponse>(
        `/v1/users/${userId}/posts?page=0&size=8`,
      );
      setCurtPosts(response.data.result.postList);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // 스크랩한 게시글들 가져오기
  const getScrabPosts = useCallback(async () => {
    try {
      const response = await GetAxiosInstance<GetUserPostsResponse>(
        `/v1/users/${userId}/posts/scrabs?page=0&size=8`,
      );
      setScrabPosts(response.data.result.postList);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // 유저들의 정보(닉네임, 프로필 이미지 등) 가져오기
  const getUserInfo = useCallback(async () => {
    try {
      const response = await GetAxiosInstance<GetUserInfoResponse>(
        `/v1/users/${userId}`,
      );
      setUserInfo(response.data.result);
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  // 팔로잉 목록 가져오기
  const getFollowingList = useCallback(async () => {
    try {
      const response = await GetAxiosInstance<GetFollowingsResponse>(
        `/v1/users/${userId}/followings`,
      );

      setFollowings(response.data.result);
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  // 팔로워 목록 가져오기
  const getFollowerList = useCallback(async () => {
    const response = await GetAxiosInstance<GetFollowersResponse>(
      `/v1/users/${userId}/followers`,
    );

    setFollowers(response.data.result);
  }, [userId]);

  useEffect(() => {
    if (postId) {
      getPost();
    }
  }, [postId]);

  useEffect(() => {
    getCurtPosts(); // 게시글들 가져오기
    getScrabPosts(); // 스크랩 게시글들 가져오기
    getUserInfo(); // 유저 정보 가져오기
    getFollowingList(); // 팔로잉 리스트 가져오기
    getFollowerList(); // 팔로워 리스트 가져오기
  }, []);

  return (
    <>
      {userInfo && curtPosts ? (
        <styles.Container>
          {/*보라색 세로 그룹 바  */}
          <GroupBarComponent color="purple" direction="row" />

          {/* {
            !isFriend && <div>프로필 수정 버튼</div>
          } */}

          {/* 이것도 밖으로 빼고 */}
          {/*리뷰어가 클릭이 됐을 때와 리뷰잉이 클릭이 됐을 때 다른 창이 뜨게끔하고 post클릭 이벤트 같이 클릭과 관련된 컴포넌트  */}
          <ProfileClickComponent
            followings={followings}
            followers={followers}
            post={post}
            friendListOpen={friendListOpen}
            isClicked={isClicked}
            setFriendListOpen={setFriendListOpen}
            setPostIsClicked={setPostIsClicked}
            postIsClicked={postIsClicked}
          />

          {/* 이거 없애요 */}
          <LogoComponent />

          {/* 이거 밖으로 빼세요 */}
          {/*프로필 (프로필 사진, 이름, 게시물 컴포넌트 등등) 상위 컴포넌트  */}
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

          {/* 리뷰잉용 <LikeListComponent /> */}

          {/* 리뷰어용 <ListListComponent /> */}

          {/* 스크랩 한건지? 내가 작성한 것들인지? */}
          {/* <PostListComponent /> */}
          {/* <ScrabPostListComponent /> */}
          {/* 밑에 사진 나오는 것들 props={posts} 이 compoennt안에서 map으로 보여줄 수 있게 -> 여기만 overflow: auto */}
        </styles.Container>
      ) : (
        <LoadingModalComponent message="데이터 로딩중" />
      )}
    </>
  );
};

export default MyProfilePage;
