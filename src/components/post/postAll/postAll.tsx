import styles from './style';
import StarRating from '../../common/star/starsRating';
import ImageSlider from '../imageSlider/imageSlider';
import ScrabButtonImage from '/images/Post/ScrabButton.png';
import LikeButtonImage from '/images/Post/LikeButton.png';
import NotScrabButtonImage from '/images/Post/NotScrabButton.png';
import NotLikeButtonImage from '/images/Post/NotLikeButton.png';
import { IPost } from '../../../types/posts.types';

interface PostAllProps {
  splitPost: () => void;
  post: IPost;
}

const PostAll: React.FC<PostAllProps> = ({ splitPost, post }) => {
  const splitContent = (content: string): string => {
    console.log(content.length);
    if (content.length < 15) {
      return content;
    }

    return content.slice(0, 15) + '...';
  };

  return (
    <styles.Container>
      <styles.TopText>나의 우주에게</styles.TopText>

      <styles.Line />

      {/* 맨 위 유저 정보, 게시글 날짜 */}
      <styles.UserContainer>
        <styles.UserImage src={post.user.profileImage} />
        <styles.UserName>{post.user.nickname}</styles.UserName>
        <styles.PostDate>{post.date}일 전</styles.PostDate>
      </styles.UserContainer>

      {/* image slider */}
      <ImageSlider sliderImages={post.postImages} />

      {/* 좋아요, 스크랩, 별 버튼 */}
      <styles.Buttons>
        <styles.LikeSrabButtons>
          {post.like ? (
            <styles.LikeButton src={LikeButtonImage} />
          ) : (
            <styles.LikeButton src={NotLikeButtonImage} />
          )}

          {post.scrab ? (
            <styles.ScrabButton src={ScrabButtonImage} />
          ) : (
            <styles.ScrabButton src={NotScrabButtonImage} />
          )}
        </styles.LikeSrabButtons>

        <StarRating count={post.star} size={20} />
      </styles.Buttons>

      {/* 좋아요 개수 */}
      <styles.LikeText>
        제니님 외 <styles.LikePersonNumber>{post.like}</styles.LikePersonNumber>
        명이 좋아합니다
      </styles.LikeText>

      {/* 게시글 내용 ,더보기 버튼 */}
      <styles.PostContentContainer>
        <styles.PostContent>{splitContent(post.content)}</styles.PostContent>
        <styles.MoreContentButton onClick={splitPost}>
          더보기
        </styles.MoreContentButton>
      </styles.PostContentContainer>
    </styles.Container>
  );
};

export default PostAll;
