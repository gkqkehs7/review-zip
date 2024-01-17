import StarRatingComponent from '@/components/common/starRatingComponent/starsRatingComponent';
import ImageSliderComponent from '@/components/common/imageSliderComponent/imageSliderComponent';

import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';

import { IPost } from '@/types/posts.types';

import styles from './style';
import ScrabButtonImage from '/images/post/ScrabButton.png';
import LikeButtonImage from '/images/post/LikeButton.png';
import NotScrabButtonImage from '/images/post/NotScrabButton.png';
import NotLikeButtonImage from '/images/post/NotLikeButton.png';

import { useMediaQuery } from 'react-responsive';

interface PostAllComponentProps {
  splitPost: () => void;
  post: IPost;
}

const PostAllComponent: React.FC<PostAllComponentProps> = ({
  splitPost,
  post,
}) => {
  const device = checkDevice();

  const splitContent = (content: string): string => {
    if (content.length < 15) {
      return content;
    }

    return content.slice(0, 15) + '...';
  };
  const calculateSize = (
    DesktopWidth: number,
    DesktopHeight: number,
    LaptopWidth: number,
    LaptopHeight: number,
    PadWidth: number,
    PadHeight: number,
  ): { width: string; height: string } => {
    const isDesktop = useMediaQuery({ query: '(min-width:1920px)' });
    const isLaptop = useMediaQuery({
      query: '(min-width: 1680px) and (max-width: 1919px)',
    });
    const isPad = useMediaQuery({ query: '(max-width: 1679px)' });

    if (isDesktop) {
      return { width: `${DesktopWidth}px`, height: `${DesktopHeight}px` };
    }

    if (isLaptop) {
      return { width: `${LaptopWidth}px`, height: `${LaptopHeight}px` };
    }

    return { width: `${PadWidth}px`, height: `${PadHeight}px` };
  };

  return (
    <styles.Container
      style={responsiveWidthHeight(
        device,
        { width: 1000, height: 1000 },
        { width: 1000, height: 1000 },
        { width: 1000, height: 1000 },
        { width: 800, height: 800 },
        { width: 500, height: 500 },
        { width: 500, height: 500 },
      )}
    >
      <styles.TopText>나의 우주에게</styles.TopText>

      <styles.Line />

      {/* 맨 위 유저 정보, 게시글 날짜 */}
      <styles.UserContainer>
        <styles.UserImage src={post.user.profileImage} />
        <styles.UserName>{post.user.nickname}</styles.UserName>
        <styles.PostDate>{post.date}일 전</styles.PostDate>
      </styles.UserContainer>

      {/* image slider */}
      <ImageSliderComponent sliderImages={post.postImages} />

      {/* 좋아요, 스크랩, 별 버튼 */}
      <styles.Buttons>
        <styles.LikeSrabButtons>
          {post.like ? (
            <styles.LikeButton
              src={LikeButtonImage}
              style={responsiveWidthHeight(
                device,
                { width: 50, height: 50 },
                { width: 40, height: 40 },
                { width: 30, height: 30 },
                { width: 20, height: 20 },
                { width: 20, height: 20 },
                { width: 10, height: 10 },
              )}
            />
          ) : (
            <styles.LikeButton src={NotLikeButtonImage} />
          )}

          {post.scrab ? (
            <styles.ScrabButton src={ScrabButtonImage} />
          ) : (
            <styles.ScrabButton src={NotScrabButtonImage} />
          )}
        </styles.LikeSrabButtons>

        <StarRatingComponent count={post.star} width={30} all={true} />
      </styles.Buttons>

      {/* 좋아요 개수 */}
      <styles.LikeContainer>
        <styles.LikeText>
          {post.likeNum}명이 이 게시글을 좋아합니다
        </styles.LikeText>
        <styles.LikeUserImage src={post.user.profileImage} />
      </styles.LikeContainer>

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

export default PostAllComponent;
