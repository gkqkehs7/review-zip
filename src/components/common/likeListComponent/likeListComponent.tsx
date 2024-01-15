import React, { useCallback, useEffect, useRef, useState } from 'react';
import { faker } from '@faker-js/faker';

import { changeInputValue } from '@/hooks/chageInputValue';

import { IUser } from '@/types/users.types';

import styles from './style';

interface LikeListComponentProps {
  closeLikeList: () => void;
  likeListOpen: boolean;
}

const users: IUser[] = [
  {
    id: 1,
    name: '제니',
    nickname: '닉넴1',
    profileImage: faker.image.avatar(),
    follow: false,
  },

  {
    id: 2,
    name: '예니',
    nickname: '닉넴1',
    profileImage: faker.image.avatar(),
    follow: false,
  },

  {
    id: 3,
    name: '민우',
    nickname: '닉넴1',
    profileImage: faker.image.avatar(),
    follow: false,
  },

  {
    id: 4,
    name: '나이',
    nickname: '닉넴1',
    profileImage: faker.image.avatar(),
    follow: false,
  },

  {
    id: 5,
    name: '거미',
    nickname: '닉넴1',
    profileImage: faker.image.avatar(),
    follow: false,
  },
  {
    id: 6,
    name: '코끼리',
    nickname: '닉넴1',
    profileImage: faker.image.avatar(),
    follow: false,
  },
  {
    id: 7,
    name: '미누',
    nickname: '닉넴1',
    profileImage: faker.image.avatar(),
    follow: false,
  },
];

const LikeListComponent: React.FC<LikeListComponentProps> = ({
  closeLikeList,
  likeListOpen,
}) => {
  const [searchInput, setSearchInput] = useState<string>('');

  const userList = useRef<HTMLDivElement>(null);

  const filterUsers = useCallback(
    (users: IUser[]) => {
      const filterUserlist = users.filter((user: IUser) =>
        user.name.includes(searchInput),
      );

      return (
        <>
          {filterUserlist.map((user: IUser) => (
            <styles.UserList key={user.id}>
              <styles.UserData>
                <styles.UserImage src={user.profileImage} />
                <styles.UserName>{user.name}</styles.UserName>
              </styles.UserData>

              <styles.FollowButton>
                <styles.FollowText>삭제</styles.FollowText>
              </styles.FollowButton>
            </styles.UserList>
          ))}
        </>
      );
    },
    [searchInput],
  );

  // 유저 리스트에 focus되도록 하는 함수
  useEffect(() => {
    if (userList.current) {
      userList.current.focus();
    }
  }, []);

  return (
    <styles.Container
      onScroll={(e) => e.stopPropagation()}
      onWheel={(e) => e.stopPropagation()}
      style={{
        opacity: likeListOpen ? 1 : 0,
        pointerEvents: likeListOpen ? 'auto' : 'none',
      }}
    >
      <styles.InnerContainer>
        <styles.TopContainer>
          <styles.Title>타이틀</styles.Title>
          <styles.ExitButton onClick={closeLikeList}>
            나가기 버튼
          </styles.ExitButton>
        </styles.TopContainer>

        <styles.Line />

        <styles.SearchContainer>
          <styles.SearchIcon>돋보기 그림</styles.SearchIcon>
          <styles.SearchInput
            placeholder="검색"
            onChange={(e) => changeInputValue(e, setSearchInput)}
          />
        </styles.SearchContainer>

        <styles.UserListContainer
          ref={userList}
          onScroll={(e) => e.preventDefault()}
          onWheel={(e) => e.preventDefault()}
        >
          {filterUsers(users)}
        </styles.UserListContainer>
      </styles.InnerContainer>
    </styles.Container>
  );
};

export default LikeListComponent;
