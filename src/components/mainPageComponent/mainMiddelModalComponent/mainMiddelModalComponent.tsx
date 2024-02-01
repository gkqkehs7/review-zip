import FrameComponent from '@/components/common/frameComponent/frameComponent';

import styles from './style';
import { Post } from '@/types/common.types';

interface MainMiddelModalComponentProps {
  post: Post;
  mainMiddleModalOpen: boolean;
  closeMainMiddleModal: () => void;
  closeLoadingModal: () => void;
  openLoadingModal: () => void;
}

const MainMiddelModalComponent: React.FC<MainMiddelModalComponentProps> = ({
  post,
  mainMiddleModalOpen,
  closeMainMiddleModal,
  closeLoadingModal,
  openLoadingModal,
}) => {
  console.log(post);

  return (
    <styles.Container
      style={{
        filter: 'none',
        opacity: mainMiddleModalOpen ? 1 : 0,
        pointerEvents: mainMiddleModalOpen ? 'all' : 'none',
      }}
      onClick={closeMainMiddleModal}
    >
      <styles.InnerContainer>
        {/* 액자 */}
        <FrameComponent post={post} openLoadingModal={openLoadingModal} />

        {/* 게시글 내용 */}
        <styles.ContentContainer>
          <styles.TextContainer>
            <styles.Text>{post.comment}</styles.Text>
          </styles.TextContainer>

          {/* 해시태그들 */}
          <styles.HashTagContainer>
            {post.hashtags.map((hashtag, index) => (
              <styles.HashTagText key={index}>#{hashtag}</styles.HashTagText>
            ))}
          </styles.HashTagContainer>

          {/* 공감 개수 */}
          <styles.LikeTextContainer>
            <styles.LikeText>공감 수 {post.likeNum}개</styles.LikeText>
          </styles.LikeTextContainer>
        </styles.ContentContainer>
      </styles.InnerContainer>
    </styles.Container>
  );
};

export default MainMiddelModalComponent;
