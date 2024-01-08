import { useState } from 'react';
import styles from './style';

const users = [
  'a',
  'bㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇ',
  'c',
  'd',
  'e',
  'f',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

interface LikeListProps {
  likeListPop: boolean;
  popUplikelist: () => void;
}

const LikeList: React.FC<LikeListProps> = ({ likeListPop, popUplikelist }) => {
  return (
    <styles.Container style={{ display: likeListPop ? 'flex' : 'none' }}>
      <styles.TopContainer>
        <styles.TopText>
          공감한 인원 리스트
          <styles.ExitButton onClick={popUplikelist}>x</styles.ExitButton>
        </styles.TopText>
      </styles.TopContainer>

      <styles.Line />

      <styles.UserListContainer>
        {users.map((user, index) => (
          <styles.User key={index}>{user}</styles.User>
        ))}
      </styles.UserListContainer>
    </styles.Container>
  );
};

export default LikeList;
