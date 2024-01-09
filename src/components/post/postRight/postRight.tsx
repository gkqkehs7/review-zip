import styles from './style';
import StarRating from '../../common/star/starsRating';
import ScrabButton from '../../../../public/images/Post/ScrabButton.png';
import SpaceShipImage from '../../../../public/images/Post/spaceShip.png';
import { IPost } from '../../../types/posts.types';
import LikeList from '../likeLIst/likeLIst';
import { useState } from 'react';

interface PostRightProps {
  split: boolean;
  post: IPost;
}

const PostRight: React.FC<PostRightProps> = ({ split, post }) => {
  const [likeListPop, setLikeListPop] = useState<boolean>(false);

  const popUplikelist = () => {
    setLikeListPop(!likeListPop);
  };

  return (
    <styles.Container style={{ display: split ? 'flex' : 'none' }}>
      {/* 유저 정보 */}
      <styles.UserContainer>
        <styles.UserImage src={post.user.profileImage} />
        <styles.UserName>{post.user.nickname}</styles.UserName>
        <styles.PostDate>{post.date}</styles.PostDate>
      </styles.UserContainer>

      <styles.Line />

      <styles.PostContentContainer>
        <styles.PostContent>{post.content}</styles.PostContent>
      </styles.PostContentContainer>

      {/* 좋아요 개수 */}
      <styles.LikeText>
        제니님 외{' '}
        <styles.LikePersonNumber onClick={popUplikelist}>
          {post.like}
        </styles.LikePersonNumber>
        명이 좋아합니다
      </styles.LikeText>

      {/* 아래 선 */}
      <styles.Line />

      {/* 좋아요, 스크랩, 별 버튼 */}
      <styles.Buttons>
        <styles.LikeSrabButtons>
          <styles.LikeButton />
          <styles.ScrabButton src={ScrabButton} />
        </styles.LikeSrabButtons>

        <StarRating count={post.star} size={20} />
      </styles.Buttons>

      {/* 우주선 아이콘 */}
      <styles.SpaceShipImageContainer>
        <styles.SpaceShipImage src={SpaceShipImage} />
      </styles.SpaceShipImageContainer>

      {/* 좋아요 목록 - 나중에 하기 */}
      <LikeList likeListPop={likeListPop} popUplikelist={popUplikelist} />
    </styles.Container>
  );
};

export default PostRight;
