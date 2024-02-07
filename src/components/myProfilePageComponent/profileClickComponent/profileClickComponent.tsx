import { useState, useCallback } from 'react';
import { Post, User } from '@/types/common.types';

import LikeListComponent from '@/components/common/likeListComponent/likeListComponent';
import PostComponent from '@/components/postComponent/postComponent';

import styles from './style';

//게시물 정보를 담은 배열의 게시물 타입
export type DataType = {
  post: Post;
  followings: User[];
  followers: User[];
  friendListOpen: boolean;
  isClicked: boolean[];
  setFriendListOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPostIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  postIsClicked: boolean;
};

const ProfileClickComponent: React.FC<DataType> = ({
  followings,
  followers,
  post,
  friendListOpen,
  isClicked,
  setFriendListOpen,
  setPostIsClicked,
  postIsClicked,
}) => {
  //모달 오픈
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [alertModalOpen, setAlertModalOpen] = useState<boolean>(false); // delete modal 띄우기용

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

  // alert창 열기
  const openAlertModal = useCallback(() => {
    setAlertModalOpen(true);
  }, []);

  return (
    <div>
      {/*리뷰어가 클릭이 됐을 때와 리뷰잉이 클릭이 됐을 때 다른 창이 뜨게끔 */}
      {isClicked[1] && (
        <LikeListComponent
          users={followers}
          closeLikeListModal={closeFriendListModal}
          likeListOpen={friendListOpen}
          isReviewer={isClicked[1]}
          isReviewing={isClicked[2]}
        />
      )}
      {isClicked[2] && (
        <LikeListComponent
          users={followings}
          closeLikeListModal={closeFriendListModal}
          likeListOpen={friendListOpen}
          isReviewer={isClicked[1]}
          isReviewing={isClicked[2]}
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
            openAlertModal={openAlertModal}
          />
        </styles.Overlay>
      )}
    </div>
  );
};

export default ProfileClickComponent;
