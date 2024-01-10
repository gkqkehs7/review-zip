import { useCallback, useEffect, useRef, useState } from 'react';
import LoadingModalComponent from '../../common/LoadingModal/LoadingModal';
import Post from '../../post/post';
import styles from './style';
import mainBottomBackgroundImage from '/images/mainPage/mainBottomBackground.png';

const MainBottom: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  // 새로운 포스트 (위 스크롤은 막기)
  const newPost = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      if (loading) {
        event.preventDefault();
      } else {
        setLoading(true);

        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    },
    [loading],
  );

  return (
    <styles.Container
      style={{
        backgroundImage: `url(${mainBottomBackgroundImage})`,
      }}
      id="your-div-id"
      onWheel={newPost}
    >
      <Post />

      {loading && <LoadingModalComponent />}
    </styles.Container>
  );
};

export default MainBottom;
