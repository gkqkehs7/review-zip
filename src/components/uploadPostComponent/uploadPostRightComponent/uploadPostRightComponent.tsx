import { faker } from '@faker-js/faker';

import { IPost } from '@/types/posts.types';

import styles from './style';
import SpaceShipImage from '/images/post/SpaceShip.png';

interface PostRightComponentProps {
  split: boolean;
}

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

const UploadPostRightComponent: React.FC<PostRightComponentProps> = ({
  split,
}) => {
  return (
    <styles.Container splitPost={split}>
      {/* 유저 정보 */}
      <styles.TopContainer>
        <styles.UserContainer>
          <styles.UserImage src={post.user.profileImage} />
          <styles.UserName>{post.user.nickname}</styles.UserName>
        </styles.UserContainer>

        <styles.SendButton>보내기</styles.SendButton>
      </styles.TopContainer>

      <styles.Line />

      {/* 게시글 내용 */}
      <styles.PostInputContainer>
        <styles.PostInput placeholder="리뷰의 내용을 작성해주세요" />
      </styles.PostInputContainer>

      {/* 해시태그들 */}
      <styles.HashTagContainer>
        {post.hashTags.map((hashTag, index) => (
          <styles.HashTag key={index}>
            <styles.HashTagText># {hashTag}</styles.HashTagText>
          </styles.HashTag>
        ))}
      </styles.HashTagContainer>

      {/* 아래 선 */}
      <styles.Line />

      {/* 우주선 아이콘 */}
      <styles.SpaceShipImageContainer>
        <styles.SpaceShipImage src={SpaceShipImage} />
      </styles.SpaceShipImageContainer>
    </styles.Container>
  );
};

export default UploadPostRightComponent;
