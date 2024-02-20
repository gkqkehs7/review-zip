import styles from './style';
import StarRating from '../../common/star/starsRating';
import ScrabButtonImage from '/images/Post/ScrabButton.png';
import LikeButtonImage from '/images/Post/LikeButton.png';
import NotScrabButtonImage from '/images/Post/NotScrabButton.png';
import NotLikeButtonImage from '/images/Post/NotLikeButton.png';
import SpaceShipImage from '/images/Post/spaceShip.png';
import { IPost } from '../../../types/posts.types';

interface PostRightProps {
  split: boolean;
  post: IPost;
  openLikeList: () => void;
}

const PostRight: React.FC<PostRightProps> = ({ split, post, openLikeList }) => {
  return (
    <styles.Container style={{ display: split ? 'flex' : 'none' }}>
      {/* 유저 정보 */}
      <styles.UserContainer>
        <styles.UserImage src={post.user.profileImage} />
        <styles.UserName>{post.user.nickname}</styles.UserName>
        <styles.PostDate>{post.date}</styles.PostDate>
      </styles.UserContainer>

      <styles.Line />

      {/* 게시글 내용 */}
      <styles.PostContentContainer>
        <styles.PostContent>{post.content}</styles.PostContent>
      </styles.PostContentContainer>

      {/* 해시태그들 */}
      <styles.HashTagContainer>
        {post.hashTags.map((hashTag, index) => (
          <styles.HashTag key={index}>
            <styles.HashTagText># {hashTag}</styles.HashTagText>
          </styles.HashTag>
        ))}
      </styles.HashTagContainer>

      {/* 좋아요 개수 */}
      <styles.LikeContainer>
        <styles.LikeText onClick={openLikeList}>
          {post.likeNum}명이 이 게시글을 좋아합니다
        </styles.LikeText>
        <styles.LikeUserImage src={post.user.profileImage} />
      </styles.LikeContainer>

      {/* 아래 선 */}
      <styles.Line />

      {/* 좋아요, 스크랩, 별 버튼 */}
      <styles.Buttons>
        {/* 좋아요 버튼 */}
        <styles.LikeSrabButtons>
          {post.like ? (
            <styles.LikeButton src={LikeButtonImage} />
          ) : (
            <styles.LikeButton src={NotLikeButtonImage} />
          )}

          {/* 스크랩 버튼 */}
          {post.scrab ? (
            <styles.ScrabButton src={ScrabButtonImage} />
          ) : (
            <styles.ScrabButton src={NotScrabButtonImage} />
          )}
        </styles.LikeSrabButtons>

        {/* 별점 */}
        <StarRating count={post.star} width={30} all={true} />
      </styles.Buttons>

      {/* 우주선 아이콘 */}
      <styles.SpaceShipImageContainer>
        <styles.SpaceShipImage src={SpaceShipImage} />
      </styles.SpaceShipImageContainer>
    </styles.Container>
  );
};

export default PostRight;
