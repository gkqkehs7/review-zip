import { useState } from 'react';

import PostLeft from '@/components/postComponent/postLeftComponent/postLeftComponent';
import PostRight from '@/components/postComponent/postRightComponent/postRightComponent';
import LikeListComponent from '@/components/common/likeListComponent/likeListComponent';

import styles from './style';
import { Post } from '@/types/common.types';

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
  const [split, setSplit] = useState<boolean>(false);

  const [likeListOpen, setLikeListOpen] = useState<boolean>(false);

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

  return (
    <styles.Container onClick={handleOutsideClick}>
      <PostRight
        split={split}
        openLikeListModal={openLikeListModal}
        post={post}
      />
      <PostLeft split={split} post={post} splitPost={splitPost} />

      <LikeListComponent
        likeListOpen={likeListOpen}
        closeLikeListModal={closeLikeListModal}
      />
    </styles.Container>
  );
};

export default PostComponent;
