import React, { useCallback, useEffect, useRef, useState } from 'react';
import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom';

import ReviewingStopModalComponent from '@/components/myProfilePageComponent/reviewingStopModalComponent/reviewingStopModalComponent';

import { changeInputValue } from '@/hooks/chageInputValue';

import { IUser } from '@/types/common.types';

import styles from './style';
import { GetUserInfoResponse } from '@/types/response.types';

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

interface LikeListComponentProps {
  closeLikeListModal: () => void;
  likeListOpen: boolean;
  isReviewer?: boolean;
  isReviewing?: boolean;
  setFriendId: React.Dispatch<React.SetStateAction<number>>;
  setIsFriend: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo?: GetUserInfoResponse;
}

const LikeListComponent: React.FC<LikeListComponentProps> = ({
  closeLikeListModal,
  likeListOpen,
  isReviewer,
  isReviewing,
  setFriendId,
  setIsFriend,
  userInfo,
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
              <Link
                to="/friendProfilePage"
                onClick={() => {
                  setFriendId(1);
                }}
              >
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
              {/*리뷰어 ,리뷰잉 , 공감 리스트에 따라 버튼 다르게 하는 함수 */}
              {chooseButton(user.profileImage, user.name)}
            </styles.UserList>
          ))}
        </>
      );
    },
    [searchInput],
  );

  const chooseButton = (profileImage: string, name: string) => {
    if (isReviewer || isReviewing) {
      //버튼의 틀은 동일하고 버튼의 이름과 용도가 다르게
      return (
        <styles.FollowButton
          onClick={
            isReviewing
              ? () => {
                  setReviewingStop(!reviewingStop);
                  setReviewingUSer(profileImage);
                  setReviewingUserName(name);
                }
              : () => {}
          }
        >
          <styles.FollowText>
            {isReviewer ? '삭제' : '리뷰잉'}
          </styles.FollowText>
        </styles.FollowButton>
      );
    } else {
      //리뷰어나 리뷰잉이 아니면 버튼이 없음
      return <></>;
    }
  };

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
        <ReviewingStopModalComponent
          reviewingUser={reviewingUSer}
          reviewingUserName={reviewingUserName}
          setReviewingStop={setReviewingStop}
        />
      )}
      <styles.Container
        onScroll={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        style={{
          opacity: likeListOpen ? 1 : 0,
          pointerEvents: likeListOpen ? 'auto' : 'none',
        }}
      >
        <styles.InnerContainer>
          {/*리뷰잉 리뷰어 글씨, 나가기 버튼 */}
          <styles.TopContainer>
            <styles.Title>
              {isReviewer ? '리뷰어' : isReviewing ? '리뷰잉' : '공감한 인원'}
            </styles.Title>
            <styles.ExitButton onClick={closeLikeListModal}>
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

export default LikeListComponent;
