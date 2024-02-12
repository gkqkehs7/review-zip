import styles from './style';
import StarImage from '/images/myProfilePage/StarImage.png';
import Storage from '/images/myProfilePage/StorageImage.png';
import Union from '/images/myProfilePage/Union.png';
import { Post } from '@/types/common.types';

interface ChangePageProps {
  setClickedPost: React.Dispatch<React.SetStateAction<Post | undefined>>;
  posts: Post[];
}

const ReviewPictureComponent: React.FC<ChangePageProps> = ({
  setClickedPost,
  posts,
}) => {
  return (
    <>
      {posts.length === 0 ? (
        <div>게시글 없음</div>
      ) : (
        <styles.RveiwPicturesContainer>
          {posts.map((post, index) => (
            <styles.PictureContainer
              key={index}
              onClick={() => {
                setClickedPost(post); //클릭한 post의 postId를 넣어줌
              }}
            >
              <styles.PictureBorder>
                <styles.Picture
                  src={post.postImages[0].imageUrl} //postImages 배열이 undefined로 에러가 남
                  alt={'Picture' + String(post.postId)}
                />
              </styles.PictureBorder>
              {/* 게시물의 좋아요가 100개 이상인 경우 Union 아이콘 표시 */}
              {post.likeNum > 100 ? (
                <styles.IconUnion src={Union} alt="Union" />
              ) : (
                <styles.IconUnion style={{ visibility: 'hidden' }} />
              )}

              {/* 게시물에 마우스 hover시에만 보일 아이콘들 */}
              <styles.IconContainer>
                <styles.IconBox>
                  <styles.Icon src={StarImage} />
                  <styles.Count>{post.likeNum}</styles.Count>
                </styles.IconBox>
                <styles.IconBox>
                  <styles.Icon src={Storage} />
                  <styles.Count>{post.scrabNum}</styles.Count>{' '}
                  {/*스크랩 수가 없음 */}
                </styles.IconBox>
              </styles.IconContainer>
            </styles.PictureContainer>
          ))}
        </styles.RveiwPicturesContainer>
      )}
    </>
  );
};

export default ReviewPictureComponent;
