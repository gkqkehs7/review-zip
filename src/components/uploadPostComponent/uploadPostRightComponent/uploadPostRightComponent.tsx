import { IPost } from '@/types/posts.types';

import styles from './style';
import SpaceShipImage from '/images/post/SpaceShip.png';

interface PostRightComponentProps {
  post: IPost;
  split: boolean;
}

const UploadPostRightComponent: React.FC<PostRightComponentProps> = ({
  post,
  split,
}) => {
  return (
    <styles.Container splitPost={split}>
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
