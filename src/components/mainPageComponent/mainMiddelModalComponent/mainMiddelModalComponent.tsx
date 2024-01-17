import FrameComponent from '@/components/common/frameComponent/frameComponent';

import styles from './style';

import SpaceShipImage from '/images/post/SpaceShip.png';

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
  const hashtags = ['제천 덕수산성', '5월 초봄', '달이 잘 보이는 곳'];

  return (
    <styles.Container
      style={{
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
            {/* 우주선 이미지 */}
            <styles.SpaceShipImageContainer>
              <styles.SpaceShipImage src={SpaceShipImage} />
            </styles.SpaceShipImageContainer>

            {/* 글씨 */}
            <styles.Text>
              외계인 왈: "우주에 도달한 것을 축하해 지구의 달은 마치 내 머리형과
              비슷하구나"
            </styles.Text>
          </styles.TextContainer>

          <styles.HashTagContainer>
            {hashtags.map((hashtag, index) => (
              <styles.HashTag key={index}>#{hashtag}</styles.HashTag>
            ))}
          </styles.HashTagContainer>
          <styles.LikeText>공감 수 5000개</styles.LikeText>
        </styles.ContentContainer>
      </styles.InnerContainer>
    </styles.Container>
  );
};

export default MainMiddelModalComponent;
