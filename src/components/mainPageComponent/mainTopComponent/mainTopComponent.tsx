import styles from './style';

import { useEffect, useState } from 'react';
import mainTopBackgroundImage from '/images/mainPage/MainTopBackground.png';
import DownArrowImage from '/images/mainPage/DownArrow.png';
import MapComponent from '@/components/mapPageComponent/mapComponent/mapComponent';

interface MainTopComponentProps {
  openModal: boolean;
  handleScrollDown: () => void;
}

const MainTopComponent: React.FC<MainTopComponentProps> = ({
  handleScrollDown,
}) => {
  return (
    <styles.Container>
      {/* 아래 화살표 */}
      <styles.ArrowImage src={DownArrowImage} onClick={handleScrollDown} />
    </styles.Container>
  );
};

export default MainTopComponent;
