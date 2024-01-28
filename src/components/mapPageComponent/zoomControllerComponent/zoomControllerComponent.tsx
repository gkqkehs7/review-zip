import React, { useRef } from 'react';
import styles from './styles';

interface ZoomControllerProps {
  deltaY: number;
}

const ZoomControllerComponent: React.FC<ZoomControllerProps> = ({ deltaY }) => {
  return (
    //  지도 우측 상단에 존재하는 줌 컨트롤러
    <styles.ZoomContainer>
      <styles.ZoominImage />
      <styles.ZoomVerticalBar>
        <styles.ZoomHorizonBar
          style={{
            transition: 'transform 0.3s ease-in-out',
            transform: `translateY(${deltaY}px)`,
          }}
        />
      </styles.ZoomVerticalBar>
      <styles.ZoomOutImage />
    </styles.ZoomContainer>
  );
};

export default ZoomControllerComponent;
