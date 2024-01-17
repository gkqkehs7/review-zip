import { useState } from 'react';

import PostComponent from '@/components/postComponent/postComponent';
import LoadingModalComponent from '@/components/common/loadingModalComponent/loadingModalComponent';

import styles from './style';
import mainBottomBackgroundImage from '/images/mainPage/MainBottomBackground.png';
import DownArrowImage from '/images/mainPage/DownArrow.png';

interface MainBottomComponentProps {
  modalOpen: () => void;
  modalClose: () => void;
  scrollToTop: () => void;
}

const MainBottomComponent: React.FC<MainBottomComponentProps> = ({
  modalOpen,
  modalClose,
  scrollToTop,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  // 마우스 아래 휠 이벤트 감지해서 새로운 포스트 불러오기
  const newPost = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0) {
      if (!loading) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    } else {
    }
  };

  return (
    <styles.Container onWheel={newPost}>
      {/* 게시글 component */}
      <PostComponent modalOpen={modalOpen} modalClose={modalClose} />

      {/* 아래 화살표 */}
      <styles.ArrowImage src={DownArrowImage} />

      {/* 위로 가는 화살표 */}
      <styles.TopScrollButton onClick={scrollToTop}></styles.TopScrollButton>

      {loading && <LoadingModalComponent />}
    </styles.Container>
  );
};

export default MainBottomComponent;
