import { useState } from 'react';
import { faker } from '@faker-js/faker';

import PostLeft from '@/components/postComponent/postLeftComponent/postLeftComponent';
import PostRight from '@/components/postComponent/postRightComponent/postRightComponent';
import PostAll from '@/components/postComponent/postAllComponent/postAllComponent';
import LikeListComponent from '@/components/common/likeListComponent/likeListComponent';

import { IPost } from '@/types/posts.types';

const PostComponent: React.FC = () => {
  const [split, setSplit] = useState<boolean>(false);

  const [likeListOpen, setLikeListOpen] = useState<boolean>(false);

  const splitPost = () => {
    setSplit(!split);
  };

  const openLikeList = () => {
    setLikeListOpen(true);
  };

  const closeLikeList = () => {
    setLikeListOpen(false);
  };

  const post: IPost = {
    id: 1,
    title: '개쩌는 제목',
    content:
      '나 김민우, 새로운 세상을 떠나 세상을 모험하는 멋진 모험가가 될것이니라',
    iLike: true,
    date: 1,
    star: 3,
    like: true,
    likeNum: 150,
    scrab: false,
    user: {
      id: 1,
      email: 'test@naver.com',
      nickname: '미누',
      name: '김민우',
      profileImage: faker.image.avatar(),
    },
    hashTags: ['제천 덕수산성', '5월 초봄'],
    postImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      },
    ],
  };

  return (
    <>
      {split ? (
        <PostLeft splitPost={splitPost} post={post} />
      ) : (
        <PostAll splitPost={splitPost} post={post} />
      )}

      <PostRight split={split} post={post} openLikeList={openLikeList} />

      {/* 좋아요 목록 */}
      <LikeListComponent
        likeListOpen={likeListOpen}
        closeLikeList={closeLikeList}
      />
    </>
  );
};

export default PostComponent;
