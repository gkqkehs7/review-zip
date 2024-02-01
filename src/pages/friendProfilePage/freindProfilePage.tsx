import MyProfilePage from '@pages/myProfilePage/myProfilePage';
import FriednImage from '/images/friendProfilePage/FriendImage.png';

import React, { useEffect, useState } from 'react';

const posts = [
  {
    postImageUrl: 'images/myProfilePage/Component1.png',
    postId: 1,
    likeNum: 103,
    scrabNum: 47,
  },
  {
    postImageUrl: 'images/myProfilePage/Component2.png',
    postId: 2,
    likeNum: 380,
    scrabNum: 31,
  },
  {
    postImageUrl: 'images/myProfilePage/Component3.png',
    postId: 3,
    likeNum: 84,
    scrabNum: 79,
  },
];

const FreindProfilePage: React.FC = () => {
  const [isFriend, setIsFriend] = useState<boolean>(false);

  useEffect(() => {
    setIsFriend(true);
  }, []);

  return (
    <MyProfilePage
      isFriend={isFriend}
      friendImage={FriednImage}
      pictures={posts}
    />
  );
};

export default FreindProfilePage;
