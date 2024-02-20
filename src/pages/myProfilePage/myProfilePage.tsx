import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { changeInputValue } from '@/hooks/chageInputValue';

import {
  DeleteAxiosInstance,
  GetAxiosInstance,
  PatchAxiosInstance,
  PostAxiosInstance,
} from '@/api/axios.methods';
import { Post, User } from '@/types/common.types';
import {
  GetUserPostsResponse,
  GetUserInfoResponse,
  GetFollowingsResponse,
  GetFollowersResponse,
  CreateImagesResponse,
} from '@/types/response.types';

import { checkDevice } from '@/utils/checkDeviceSize';
import { responsiveBackgroundImageSize } from '@/utils/responsiveBackgroundImageSize';

import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';
import LikeListComponent from '@/components/common/likeListComponent/likeListComponent';
import PostComponent from '@/components/postComponent/postComponent';
import LoadingModalComponent from '@/components/common/loadingModalComponent/loadingModalComponent';
import PostListComponent from '@/components/myProfilePageComponent/postListComponent/postListComponent';
import ScrabPostListComponent from '@/components/myProfilePageComponent/scrabPostListComponent/scrabPostListComponent';

import styles from './style';
import ProfileBackgroundImage1440 from '/images/myProfilePage/ProfileBackground1440.png';
import ProfileBackgroundImage1680 from '/images/myProfilePage/ProfileBackground1680.png';
import ProfileBackgroundImage1920 from '/images/myProfilePage/ProfileBackground1920.png';
import PencilImage from '/images/myProfilePage/Pencil.png';
import CameraImage from '/images/myProfilePage/Camera.png';
import Map from '/images/friendProfilePage/MapImage.png';
import Storage from '/images/myProfilePage/StorageImage.png';
import PostItem from '/images/myProfilePage/PostItemImage.png';

const MyProfilePage: React.FC = () => {
  const device = checkDevice();

  const navigate = useNavigate();

  const { userId } = useParams(); // me or number

  const isFriend = userId === 'me' ? false : true;

  // 게시물 버튼을 클릭한 경우, 저장소 버튼을 클릭한 경우에 대한 state
  const [postButtonClicked, setPostButtonClicked] = useState<boolean>(true);

  // 프로필 수정
  const [isEditProfile, setIsEditProfile] = useState<boolean>(false);

  // 화면에 표시된 순서대로 게시물, 리뷰어 , 리뷰잉이 클릭이 된건지에 대한 값이 배열에 들어감
  const [isClicked, setIsClicked] = useState<boolean[]>([false, false, false]);

  // 리뷰잉이나 리뷰어 눌렀을 때 쓸 컴폰넌트 오픈
  const [likeListOpen, setLikeListOpen] = useState<boolean>(false);

  const [clickedPost, setClickedPost] = useState<Post>();

  const [userInfo, setUserInfo] = useState<User>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [scrabPosts, setScrabPosts] = useState<Post[]>([]);
  const [followings, setFollowings] = useState<User[]>([]);
  const [followers, setFollowers] = useState<User[]>([]);

  //프로필 변경시 고른 이미지
  const [selectedImage, setSelectedImage] = useState<File | null>();

  //유저 프로필 수정시에 업데이트
  const [userNickname, setUserNickname] = useState<string>('');

  // '친구 목록' 모달을 닫는 함수
  const closeLikeListModal = () => {
    setLikeListOpen(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const imageFile = event.target.files[0];
      setSelectedImage(imageFile);
    }
  };

  // 올린 게시글들 가져오기
  const getPosts = useCallback(async () => {
    const response = await GetAxiosInstance<GetUserPostsResponse>(
      `/v1/users/${userId}/posts`,
    );

    setPosts(response.data.result);
  }, []);

  // 스크랩한 게시글들 가져오기
  const getScrabPosts = useCallback(async () => {
    const response = await GetAxiosInstance<GetUserPostsResponse>(
      `/v1/users/${userId}/posts/scrabs`,
    );
    setScrabPosts(response.data.result);
  }, []);

  // 유저들의 정보(닉네임, 프로필 이미지 등) 가져오기
  const getUserInfo = useCallback(async () => {
    const response = await GetAxiosInstance<GetUserInfoResponse>(
      `/v1/users/${userId}`,
    );
    setUserInfo(response.data.result);
    setUserNickname(response.data.result.nickname);
  }, [userId]);

  // 팔로잉 목록 가져오기
  const getFollowingList = useCallback(async () => {
    const response = await GetAxiosInstance<GetFollowingsResponse>(
      `/v1/users/${userId}/followings`,
    );

    setFollowings(response.data.result);
  }, [userId]);

  // 팔로워 목록 가져오기
  const getFollowerList = useCallback(async () => {
    const response = await GetAxiosInstance<GetFollowersResponse>(
      `/v1/users/${userId}/followers`,
    );

    setFollowers(response.data.result);
  }, [userId]);

  // 팔로우 하기
  const followUser = async (user: User) => {
    setUserInfo({ ...user, following: true });
    try {
      await PostAxiosInstance(`/v1/follows/users/${userId}`);
    } catch (error) {
      setUserInfo({ ...user, following: false });
    }
  };

  const unFollowUser = async (user: User) => {
    setUserInfo({ ...user, following: false });
    try {
      await DeleteAxiosInstance(`/v1/follows/users/${userId}`);
    } catch (error) {
      setUserInfo({ ...user, following: true });
    }
  };

  const editProfile = async () => {
    try {
      // 이미지 변경
      if (selectedImage) {
        const formData = new FormData();

        formData.append('fileList', selectedImage);

        const response = await PostAxiosInstance<CreateImagesResponse>(
          '/v1/images/upload',
          formData,
        );

        const { imageIds } = response.data.result;

        await PatchAxiosInstance('/v1/users/me/profileUrl', {
          imageId: imageIds[0],
        });
      }

      // 닉네임 변경
      await PatchAxiosInstance('/v1/users/me/nickname', {
        nickname: userNickname,
      });

      if (userInfo) {
        setUserInfo({ ...userInfo, nickname: userNickname });
      }
      setIsEditProfile(!isEditProfile);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts(); // 내 게시글 가져오기
    getScrabPosts(); //스크랩한 게시글 가져오기signOut
    getUserInfo(); // 유저 정보 가져오기
    getFollowingList(); // 팔로잉 리스트 가져오기
    getFollowerList(); // 팔로워 리스트 가져오기
  }, [userId]);

  const signOut = () => {
    localStorage.clear();
    navigate('/signinPage');
  };

  return (
    <>
      {userInfo && posts ? (
        <styles.Container
          style={responsiveBackgroundImageSize(
            device,
            { imageUrl: ProfileBackgroundImage1920 },
            { imageUrl: ProfileBackgroundImage1920 },
            { imageUrl: ProfileBackgroundImage1680 },
            { imageUrl: ProfileBackgroundImage1680 },
            { imageUrl: ProfileBackgroundImage1440 },
            { imageUrl: ProfileBackgroundImage1440 },
          )}
        >
          {/* 그룹 바 */}
          <GroupBarComponent color="purple" direction="col" />

          {/* 게시물이 클릭이 된 경우  */}
          {clickedPost && (
            <styles.Overlay>
              <PostComponent
                post={clickedPost}
                posts={posts}
                setPosts={setPosts}
                scrabPosts={scrabPosts}
                setScrabPosts={setScrabPosts}
                setClickedPost={setClickedPost}
                canDelete={true}
              />
            </styles.Overlay>
          )}

          {/* 유저 프로필 */}
          <styles.ProfilePictureContainer>
            <styles.ProfileContainer>
              {/*좌측의 이름과 프로필 사진이 뜨는 컨테이너 */}
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
                    <styles.EditUserProfile
                      type="file"
                      onChange={handleFileChange}
                    />
                    <styles.IconCamera src={CameraImage} />
                  </>
                )}
                <styles.UserNameContainer isEditProfile={isEditProfile}>
                  {/*프로필 수정시에는 컨테이너 밑에 밑줄을 위한 props*/}
                  <styles.UserName>
                    {/* 프로필 수정시에 유저 이름 받을 input*/}
                    {isEditProfile && (
                      <styles.EditUserName
                        type="text"
                        value={userNickname}
                        onChange={(e) => changeInputValue(e, setUserNickname)}
                      />
                    )}
                    {/* input 태그에 입력하는 중에 기존 이름이 동시에 뜨지 않도록 프로필 수정이 끝나면 userName이 뜨도록 함*/}
                    {!isEditProfile && userInfo && userNickname}
                  </styles.UserName>
                </styles.UserNameContainer>
                {/* 프로필 수정시에 인풋 태그 옆에 뜰 연필 아이콘  */}
                {isEditProfile && <styles.IconEditUserName src={PencilImage} />}
              </styles.NameImageContainer>

              {/*게시물,리뷰어,리뷰잉 수와 프로필 수정 버튼 */}
              <div>
                <styles.UserProfileStatsContainer>
                  <styles.UserProfileStats>
                    게시물 {posts.length}
                  </styles.UserProfileStats>
                  <styles.UserProfileStats
                    onClick={() => {
                      setIsClicked([false, true, false]);
                      setLikeListOpen(true);
                    }}
                  >
                    리뷰어 {userInfo.followerNum}
                  </styles.UserProfileStats>
                  <styles.UserProfileStats
                    onClick={() => {
                      setIsClicked([false, false, true]);
                      setLikeListOpen(true);
                    }}
                  >
                    리뷰잉 {userInfo.followingNum}
                  </styles.UserProfileStats>
                </styles.UserProfileStatsContainer>

                <styles.EditProfileButtonContainer>
                  {/* 친구이고 팔로우가 안되어있는 경우 */}
                  {isFriend && !userInfo.following && (
                    <styles.FollowButton onClick={() => followUser(userInfo)}>
                      팔로우
                    </styles.FollowButton>
                  )}

                  {/* 친구이고 팔로우가 되어있는 경우 */}
                  {isFriend && userInfo.following && (
                    <styles.FollowButton onClick={() => unFollowUser(userInfo)}>
                      언팔로우
                    </styles.FollowButton>
                  )}

                  {/* 프로필 수정 */}
                  {!isFriend && isEditProfile && (
                    <styles.EditProfileButton onClick={editProfile}>
                      수정 완료
                    </styles.EditProfileButton>
                  )}

                  {/* 나인경우  */}
                  {!isFriend && !isEditProfile && (
                    <styles.EditProfileButton
                      onClick={() => {
                        setIsEditProfile(!isEditProfile);
                      }}
                    >
                      프로필 수정
                    </styles.EditProfileButton>
                  )}

                  {!isFriend && (
                    <styles.SignOutButton onClick={signOut}>
                      로그아웃
                    </styles.SignOutButton>
                  )}

                  <Link to="/mapPage">
                    <styles.MapButton src={Map} />
                  </Link>
                </styles.EditProfileButtonContainer>
              </div>
            </styles.ProfileContainer>

            {/* 게시물 ,저장소 버튼 컨테이너  */}
            <styles.TopButtonContainer>
              {/* 게시물 버튼 클릭시에 위에 표시될 보라색 도형 */}
              {postButtonClicked && <styles.LeftPurpleRectangle />}
              {/* 저장소 버튼 클릭시에 위에 표시될 보라색 도형 */}
              {!postButtonClicked && <styles.RightPurpleRectangle />}
              <styles.ButtonContainer
                onClick={() => {
                  setPostButtonClicked(true); //게시물 버튼 클릭 시 true
                }}
              >
                <styles.Buttonimg src={PostItem} />
                <styles.ButtonName>게시물</styles.ButtonName>
              </styles.ButtonContainer>

              {/* 스크랩 게시물 버튼 */}
              <styles.ButtonContainer
                onClick={() => {
                  setPostButtonClicked(false); //저장소 버튼 클릭시 false
                }}
              >
                <styles.Buttonimg src={Storage} />
                <styles.ButtonName>저장소</styles.ButtonName>
              </styles.ButtonContainer>
            </styles.TopButtonContainer>

            {/* 내가 작성한 게시물*/}
            {postButtonClicked && posts && (
              <PostListComponent
                setClickedPost={setClickedPost}
                post={posts}
                isFriend={isFriend}
              />
            )}

            {/* 저장소에 저장한 게시물*/}
            {!postButtonClicked && scrabPosts && (
              <ScrabPostListComponent
                setClickedPost={setClickedPost}
                scrabPost={scrabPosts}
                isFriend={isFriend}
              />
            )}
          </styles.ProfilePictureContainer>

          {/*리뷰어용 <LikeListComponent />*/}
          {isClicked[1] && (
            <LikeListComponent
              users={followers}
              setUsers={setFollowers}
              closeLikeListModal={closeLikeListModal}
              likeListOpen={likeListOpen}
              isReviewer={isClicked[1]}
              isReviewing={isClicked[2]}
            />
          )}

          {/* 리뷰잉용 <LikeListComponent /> */}
          {isClicked[2] && (
            <LikeListComponent
              users={followings}
              setUsers={setFollowings}
              closeLikeListModal={closeLikeListModal}
              likeListOpen={likeListOpen}
              isReviewer={isClicked[1]}
              isReviewing={isClicked[2]}
            />
          )}
        </styles.Container>
      ) : (
        <LoadingModalComponent message="데이터 로딩중" />
      )}
    </>
  );
};

export default MyProfilePage;
