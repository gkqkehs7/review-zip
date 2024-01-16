import styles from './style';

import { useEffect, useState } from 'react';
import mainTopBackgroundImage from '/images/mainPage/MainTopBackground.png';
import DownArrowImage from '/images/mainPage/DownArrow.png';

interface MainTopComponentProps {
  openModal: boolean;
}

const MainTopComponent: React.FC<MainTopComponentProps> = ({ openModal }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // 좋아요 목록 눌렀을 때, 스크롤 막기
  useEffect(() => {
    document.body.style.cssText = `
        position: fixed;
        top: -${window.scrollY}px;
        overflow-y: scroll;
        `;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const handleScrollDown = () => {
    document.body.style.cssText = '';

    console.log('시작');
    window.scrollTo({
      top: scrollPosition + window.innerHeight,
      behavior: 'smooth',
    });

    setTimeout(() => {
      document.body.style.cssText = `
        position: fixed;
        top: -${window.scrollY}px;
        overflow-y: scroll;
        `;
    }, 800);
  };

  return (
    <styles.Container>
      {/* 아래 화살표 */}
      <styles.ArrowImage src={DownArrowImage} onClick={handleScrollDown} />
    </styles.Container>
  );
};

export default MainTopComponent;
