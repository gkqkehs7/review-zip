import { faker } from '@faker-js/faker';
import React, { useEffect, useRef } from 'react';
import styles from './style';

interface LikeListComponentProps {
  closeLikeList: () => void;
  likeListOpen: boolean;
}

const users = [
  {
    id: 1,
    name: '제니',
    profileImage: faker.image.avatar(),
    follow: false,
  },

  {
    id: 1,
    name: '제니',
    profileImage: faker.image.avatar(),
    follow: false,
  },

  {
    id: 1,
    name: '제니',
    profileImage: faker.image.avatar(),
    follow: false,
  },

  {
    id: 1,
    name: '제니',
    profileImage: faker.image.avatar(),
    follow: false,
  },

  {
    id: 1,
    name: '제니',
    profileImage: faker.image.avatar(),
    follow: false,
  },
  {
    id: 1,
    name: '제니',
    profileImage: faker.image.avatar(),
    follow: false,
  },
  {
    id: 1,
    name: '제니',
    profileImage: faker.image.avatar(),
    follow: false,
  },
];

const LikeListComponent: React.FC<LikeListComponentProps> = ({
  closeLikeList,
  likeListOpen,
}) => {
  const userList = useRef<HTMLDivElement>(null);

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
          <styles.SearchInput placeholder="검색" />
        </styles.SearchContainer>

        <styles.UserListContainer
          ref={userList}
          onScroll={(e) => e.preventDefault()}
          onWheel={(e) => e.preventDefault()}
        >
          {users.map((user, index) => (
            <styles.UserList key={index}>
              <styles.UserData>
                <styles.UserImage src={user.profileImage} />
                <styles.UserName>{user.name}</styles.UserName>
              </styles.UserData>

              <styles.FollowButton>
                <styles.FollowText>삭제</styles.FollowText>
              </styles.FollowButton>
            </styles.UserList>
          ))}
        </styles.UserListContainer>
      </styles.InnerContainer>
    </styles.Container>
  );
};

export default LikeListComponent;
