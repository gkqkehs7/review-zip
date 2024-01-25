import React, { useCallback, useEffect, useRef, useState } from 'react';
import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom';
import { changeInputValue } from '@/hooks/chageInputValue';

import { IUser } from '@/types/users.types';

import styles from './style';

const users: IUser[] = [
  {
    id: 1,
    name: '제니',
    nickname: '닉넴1',
    profileImage: 'images/friendProfilePage/FriendImage.png',
    follow: true,
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

interface FriendListComponentProps {
  closeFriendListModal: () => void;
  friendListOpen: boolean;
  isReviewer: boolean;
}

const FriendListComponent: React.FC<FriendListComponentProps> = ({
  closeFriendListModal,
  friendListOpen,
  isReviewer,
}) => {
  const [searchInput, setSearchInput] = useState<string>('');
  //리뷰잉 취소
  const [reviewingStop, setReviewingStop] = useState<boolean>(false);
  //리뷰잉 취소 이미지
  const [reviewingUSer, setReviewingUSer] = useState<string>('');
  //리뷰잉 취소 상대
  const [reviewingUserName, setReviewingUserName] = useState<string>('');

  const userList = useRef<HTMLDivElement>(null);

  // 검색시에 유저 filter되게 해주는 함수
  const filterUsers = useCallback(
    (users: IUser[]) => {
      const filterUserlist = users.filter((user: IUser) =>
        user.name.includes(searchInput),
      );

      return (
        <>
          {filterUserlist.map((user: IUser) => (
            <styles.UserList key={user.id}>
              <Link to="/friendProfilePage">
                <styles.UserData>
                  <styles.UserImage src={user.profileImage} />
                  <styles.UserName>{user.name}</styles.UserName>
                  {user.follow ? (
                    <styles.Reviewing>•리뷰잉</styles.Reviewing>
                  ) : (
                    <div></div> //리뷰잉을 해놓지 않았으면 아무것도 안뜸
                  )}
                </styles.UserData>
              </Link>

              <styles.FollowButton
                onClick={
                  isReviewer
                    ? () => {}
                    : () => {
                        setReviewingStop(!reviewingStop);
                        setReviewingUSer(user.profileImage);
                        setReviewingUserName(user.name);
                      }
                }
              >
                <styles.FollowText>
                  {isReviewer ? '삭제' : '리뷰잉'}
                </styles.FollowText>
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
    <>
      {' '}
      {/*리뷰잉 취소를 누른 경우*/}
      {reviewingStop && (
        <styles.Container style={{ zIndex: '1000' }}>
          <styles.ReviewingStopModal>
            <styles.ReviewingProfileContainer>
              <styles.ReviewingUserProfile src={reviewingUSer} />
              <p>@{reviewingUserName}님의 리뷰잉을 취소하시겠습니까?</p>
            </styles.ReviewingProfileContainer>
            <styles.BorderTopContainer>
              <p style={{ color: 'red' }}>리뷰잉 취소</p>
            </styles.BorderTopContainer>
            <styles.BorderTopContainer
              onClick={() => {
                setReviewingStop(false);
              }}
            >
              <p>취소</p>
            </styles.BorderTopContainer>
          </styles.ReviewingStopModal>
        </styles.Container>
      )}
      <styles.Container
        onScroll={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        style={{
          opacity: friendListOpen ? 1 : 0,
          pointerEvents: friendListOpen ? 'auto' : 'none',
        }}
      >
        <styles.InnerContainer>
          {/*리뷰잉 리뷰어 글씨, 나가기 버튼 */}
          <styles.TopContainer>
            <styles.TitleContainer>
              <styles.Title>{isReviewer ? '리뷰어' : '리뷰잉'}</styles.Title>
            </styles.TitleContainer>
            <styles.ExitButton onClick={closeFriendListModal}>
              나가기 버튼
            </styles.ExitButton>
          </styles.TopContainer>

          <styles.Line />

          {/* 검색창 */}
          <styles.SearchContainer>
            <styles.SearchIcon>돋보기 그림</styles.SearchIcon>
            <styles.SearchInput
              placeholder="검색"
              onChange={(e) => changeInputValue(e, setSearchInput)}
            />
          </styles.SearchContainer>

          {/* 유저 검색 리스트 */}
          <styles.UserListContainer
            ref={userList}
            onScroll={(e) => e.preventDefault()}
            onWheel={(e) => e.preventDefault()}
          >
            {filterUsers(users)}
          </styles.UserListContainer>
        </styles.InnerContainer>
      </styles.Container>
    </>
  );
};

export default FriendListComponent;
