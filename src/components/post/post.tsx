import { useState } from 'react';
import PostLeft from './postLeft/postLeft';
import PostRight from './postRight/postRight';
import PostAll from './postAll/postAll';
import { faker } from '@faker-js/faker';
import { IPost } from '../../types/posts.types';

const Post: React.FC = () => {
  const [split, setSplit] = useState<boolean>(false);

  const post: IPost = {
    id: 1,
    title: '개쩌는 제목',
    content:
      '나 김민우, 새로운 세상을 떠나 세상을 모험하는 멋진 모험가가 될것이니라',
    iLike: true,
    date: 1,
    star: 3,
    like: 150,
    user: {
      id: 1,
      email: 'test@naver.com',
      nickname: '미누',
      name: '김민우',
      profileImage: faker.image.avatar(),
    },
    hashTags: ['제천 덕수산성', '5월 초봄', '달이 잘 보이는 곳'],
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

  const splitPost = () => {
    setSplit(!split);
  };

  return (
    <>
      {split ? (
        <PostLeft splitPost={splitPost} post={post} />
      ) : (
        <PostAll splitPost={splitPost} post={post} />
      )}

      <PostRight split={split} post={post} />
    </>
  );
};

export default Post;
