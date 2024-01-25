import MyProfilePage from '@pages/myProfilePage/myProfilePage';
import FriednImage from '/images/friendProfilePage/FriendImage.png';

import React, { useEffect, useState } from 'react';

const posts = [
  {
    reviewImage: 'images/myProfilePage/Component10.png',
    postId: '',
    likes: 432,
    saves: 21,
  },
  {
    reviewImage: 'images/myProfilePage/ReviewPicture.png',
    postId: '',
    likes: 34,
    saves: 29,
  },
  {
    reviewImage: 'images/myProfilePage/Component12.png',
    postId: '',
    likes: 76,
    saves: 65,
  },
  {
    reviewImage: 'images/myProfilePage/Component13.png',
    postId: '',
    likes: 22,
    saves: 18,
  },
  {
    reviewImage: 'images/myProfilePage/Component14.png',
    postId: '',
    likes: 91,
    saves: 87,
  },
  {
    reviewImage: 'images/myProfilePage/Component15.png',
    postId: '',
    likes: 15,
    saves: 13,
  },
  {
    reviewImage: 'images/myProfilePage/ReviewPicture.png',
    postId: '',
    likes: 45,
    saves: 39,
  },
  {
    reviewImage: 'images/myProfilePage/ReviewPicture.png',
    postId: '',
    likes: 68,
    saves: 70,
  },
  {
    reviewImage: 'images/myProfilePage/ReviewPicture.png',
    postId: '',
    likes: 53,
    saves: 49,
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
