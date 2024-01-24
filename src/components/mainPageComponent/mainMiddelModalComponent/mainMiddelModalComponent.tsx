import FrameComponent from '@/components/common/frameComponent/frameComponent';

import styles from './style';

interface MainMiddelModalComponentProps {
  mainMiddleModalOpen: boolean;
  closeMainMiddleModal: () => void;
  closeLoadingModal: () => void;
  openLoadingModal: () => void;
}

const MainMiddelModalComponent: React.FC<MainMiddelModalComponentProps> = ({
  mainMiddleModalOpen,
  closeMainMiddleModal,
  closeLoadingModal,
  openLoadingModal,
}) => {
  const hashtags = ['hastag1', 'hashtag2', 'hashtag3'];

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
        <FrameComponent openLoadingModal={openLoadingModal} />

        {/* 게시글 내용 */}
        <styles.ContentContainer>
          <styles.TextContainer>
            <styles.Text>게시글 내용</styles.Text>
          </styles.TextContainer>

          {/* 해시태그들 */}
          <styles.HashTagContainer>
            {hashtags.map((hashtag, index) => (
              <styles.HashTagText key={index}>#{hashtag}</styles.HashTagText>
            ))}
          </styles.HashTagContainer>

          {/* 공감 개수 */}
          <styles.LikeTextContainer>
            <styles.LikeText>공감 수 5000개</styles.LikeText>
          </styles.LikeTextContainer>
        </styles.ContentContainer>
      </styles.InnerContainer>
    </styles.Container>
  );
};

export default MainMiddelModalComponent;
