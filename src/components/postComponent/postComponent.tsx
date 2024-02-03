import { useState, useEffect } from 'react';

import PostLeft from '@/components/postComponent/postLeftComponent/postLeftComponent';
import PostRight from '@/components/postComponent/postRightComponent/postRightComponent';
import LikeListComponent from '@/components/common/likeListComponent/likeListComponent';

import styles from './style';
import { Post, User } from '@/types/common.types';
import {
  DeleteAxiosInstance,
  GetAxiosInstance,
  PostAxiosInstance,
} from '@/api/axios.methods';
import { GetPostLikedUsersResponse } from '@/types/response.types';
import { IoTrendingUp } from 'react-icons/io5';

interface PostComponentProps {
  post: Post;
  modalOpen: () => void;
  modalClose: () => void;
  setPostIsClicked?: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostComponent: React.FC<PostComponentProps> = ({
  post,
  modalOpen,
  modalClose,
  setPostIsClicked,
}) => {
  const [postLikedUsers, setPostLikedUsers] = useState<User[]>([]);
  const [split, setSplit] = useState<boolean>(false);
  const [likeListOpen, setLikeListOpen] = useState<boolean>(false);

  const [checkLike, setCheckLiked] = useState<boolean>(post.checkLike);
  const [checkScrab, setCheckScrab] = useState<boolean>(post.checkScrab);

  // 좋아요 누른 목록 가져오기 나중에 postId로 변경
  const getLikeUsers = async () => {
    try {
      const response = await GetAxiosInstance<GetPostLikedUsersResponse>(
        `/v1/posts/${post.postId}/users`,
      );

      setPostLikedUsers(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  // 좋아요 누르기
  const likePost = async () => {
    try {
      setCheckLiked(true);

      await PostAxiosInstance(`/v1/posts/${post.postId}/like`);
    } catch (error) {
      setCheckLiked(false);
      console.log(error);
    }
  };

  // 좋아요 취소
  const unLikePost = async () => {
    try {
      setCheckLiked(false);

      await DeleteAxiosInstance(`/v1/posts/${post.postId}/like`);
    } catch (error) {
      setCheckLiked(true);
      console.log(error);
    }
  };

  const scrabPost = async () => {
    try {
      setCheckScrab(true);
    } catch (error) {
      setCheckScrab(false);
    }
  };

  const unScrabPost = async () => {
    try {
      setCheckScrab(false);
    } catch (error) {
      setCheckScrab(true);
    }
  };

  const splitPost = () => {
    setSplit(!split);
  };

  const openLikeListModal = () => {
    setLikeListOpen(true);
    modalOpen();
  };

  const closeLikeListModal = () => {
    setLikeListOpen(false);
    modalClose();
  };

  const handleOutsideClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    // 클릭된 요소가 Container 자체인 경우에만 postIsClicked 상태를 변경
    if (event.target === event.currentTarget) {
      setPostIsClicked && setPostIsClicked(false);
    }
  };

  useEffect(() => {
    getLikeUsers();
  }, []);

  return (
    <styles.Container onClick={handleOutsideClick}>
      <PostRight
        split={split}
        openLikeListModal={openLikeListModal}
        post={post}
        checkLike={checkLike}
        checkScrab={checkScrab}
        likePost={likePost}
        unLikePost={unLikePost}
        scrabPost={scrabPost}
        unScrabPost={unScrabPost}
      />

      <PostLeft
        split={split}
        post={post}
        splitPost={splitPost}
        checkLike={checkLike}
        checkScrab={checkScrab}
        likePost={likePost}
        unLikePost={unLikePost}
        scrabPost={scrabPost}
        unScrabPost={unScrabPost}
      />

      <LikeListComponent
        users={postLikedUsers}
        likeListOpen={likeListOpen}
        closeLikeListModal={closeLikeListModal}
      />
    </styles.Container>
  );
};

export default PostComponent;
