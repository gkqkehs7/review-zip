import styles from './style';
import FrameImage from '../../../../public/images/mainPage/Frame.png';
import SpaceShipImage from '../../../../public/images/Post/spaceShip.png';

interface MainMiddleModalProps {
  modalOpen: boolean;
  toggleModal: () => void;
}

const MainMiddelModal: React.FC<MainMiddleModalProps> = ({
  modalOpen,
  toggleModal,
}) => {
  const hashtags = ['제천 덕수산성', '5월 초봄', '달이 잘 보이는 곳'];

  return (
    <styles.Container
      style={{
        opacity: modalOpen ? 1 : 0,
        pointerEvents: modalOpen ? 'all' : 'none',
      }}
      onClick={toggleModal}
    >
      <styles.InnerContainer>
        {/* 액자 */}
        <styles.FrameContainer>
          <styles.Frame src={FrameImage} />
        </styles.FrameContainer>

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
              <styles.HashTag>#{hashtag}</styles.HashTag>
            ))}
          </styles.HashTagContainer>
          <styles.LikeText>공감 수 5000개</styles.LikeText>
        </styles.ContentContainer>
      </styles.InnerContainer>
    </styles.Container>
  );
};

export default MainMiddelModal;
