import { useCallback, useEffect, useRef, useState } from 'react';
import LoadingModalComponent from '../../common/LoadingModal/LoadingModal';
import Post from '../../post/post';
import styles from './style';
import mainBottomBackgroundImage from '/images/mainPage/mainBottomBackground.png';
import DownArrowImage from '/images/mainPage/DownArrow.png';

const MainBottom: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  // 마우스 아래 휠 이벤트 감지해서 새로운 포스트 불러오기
  const newPost = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0) {
      if (!loading) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    } else {
    }
  };

  return (
    <styles.Container
      style={{
        backgroundImage: `url(${mainBottomBackgroundImage})`,
      }}
      onWheel={newPost}
    >
      <Post />
      {/* 아래 화살표 */}
      <styles.ArrowImage src={DownArrowImage} />
      {loading && <LoadingModalComponent />}
    </styles.Container>
  );
};

export default MainBottom;
