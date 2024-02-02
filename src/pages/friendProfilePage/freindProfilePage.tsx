import MyProfilePage from '@pages/myProfilePage/myProfilePage';
import FriendImage from '/images/friendProfilePage/FriendImage.png';

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
  //userId에 본인 프로필 페이지인 경우 me가 들어가고, 다른 유저인 경우는 숫자가 들어감
  const [friendId, setFriendId] = useState<number>(1);

  useEffect(() => {
    setIsFriend(true);
  }, []);

  return (
    <MyProfilePage
      isFriend={isFriend}
      friendImage={FriendImage}
      pictures={posts}
      friendId={friendId}
      setFriendId={setFriendId}
    />
  );
};

export default FreindProfilePage;
