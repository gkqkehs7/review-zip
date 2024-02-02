import StarRatingComponent from '@/components/common/starRatingComponent/starsRatingComponent';

import { Post } from '@/types/common.types';

import styles from './style';
import ScrabButtonImage from '/images/post/ScrabButton.png';
import LikeButtonImage from '/images/post/LikeButton.png';
import NotScrabButtonImage from '/images/post/NotScrabButton.png';
import NotLikeButtonImage from '/images/post/NotLikeButton.png';
import SpaceShipImage from '/images/post/SpaceShip.png';

interface PostRightComponentProps {
  post: Post;
  split: boolean;
  openLikeListModal: () => void;
}

const PostRightComponent: React.FC<PostRightComponentProps> = ({
  post,
  split,
  openLikeListModal,
}) => {
  return (
    <styles.Container splitPost={split}>
      {/* 유저 정보 */}
      <styles.UserContainer>
        <styles.UserImage src={post.userInfo.profileUrl} />
        <styles.UserName>{post.userInfo.nickname}</styles.UserName>
        <styles.PostDate>{post.createdAt.toString()}</styles.PostDate>
      </styles.UserContainer>

      <styles.Line />

      {/* 게시글 내용 */}
      <styles.PostContentContainer>
        <styles.PostContent>{post.comment}</styles.PostContent>
      </styles.PostContentContainer>

      {/* 해시태그들 */}
      <styles.HashTagContainer>
        {post.hashtags.map((hashtag, index) => (
          <styles.HashTag key={index}>
            <styles.HashTagText># {hashtag}</styles.HashTagText>
          </styles.HashTag>
        ))}
      </styles.HashTagContainer>

      {/* 좋아요 개수 */}
      <styles.LikeContainer>
        <styles.LikeText onClick={openLikeListModal}>
          {post.likeNum}명이 이 게시글을 좋아합니다
        </styles.LikeText>
        <styles.LikeUserImage src={post.userInfo.nickname} />
      </styles.LikeContainer>

      {/* 아래 선 */}
      <styles.Line />

      {/* 좋아요, 스크랩, 별 버튼 */}
      <styles.Buttons>
        {/* 좋아요 버튼 */}
        <styles.LikeSrabButtons>
          {post.checkLike ? (
            <styles.LikeButton src={LikeButtonImage} />
          ) : (
            <styles.LikeButton src={NotLikeButtonImage} />
          )}

          {/* 스크랩 버튼 */}
          {post.checkScrab ? (
            <styles.ScrabButton src={ScrabButtonImage} />
          ) : (
            <styles.ScrabButton src={NotScrabButtonImage} />
          )}
        </styles.LikeSrabButtons>

        {/* 별점 */}
        <StarRatingComponent count={post.point} all={true} />
      </styles.Buttons>

      {/* 우주선 아이콘 */}
      <styles.SpaceShipImageContainer>
        <styles.SpaceShipImage src={SpaceShipImage} />
      </styles.SpaceShipImageContainer>
    </styles.Container>
  );
};

export default PostRightComponent;
