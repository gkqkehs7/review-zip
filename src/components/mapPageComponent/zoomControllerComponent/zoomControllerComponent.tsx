import React, { useRef } from 'react';
import styles from './styles';
import { checkDevice } from '@/utils/checkDeviceSize';
import { responsiveWidthHeight } from '@/utils/reponsiveSize';

interface ZoomControllerProps {
  deltaY: number;
}

const ZoomControllerComponent: React.FC<ZoomControllerProps> = ({ deltaY }) => {
  const device = checkDevice();

  return (
    //  지도 우측 상단에 존재하는 줌 컨트롤러
    <styles.ZoomContainer
      style={responsiveWidthHeight(
        device,
        { width: 62, height: 520 },
        { width: 62, height: 500 },
        { width: 62, height: 480 },
        { width: 62, height: 420 },
        { width: 62, height: 380 },
        { width: 62, height: 30 },
      )}
    >
      <styles.ZoominImage />
      <styles.ZoomVerticalBar
        style={responsiveWidthHeight(
          device,
          { width: 15, height: 390 },
          { width: 15, height: 375 },
          { width: 15, height: 360 },
          { width: 15, height: 315 },
          { width: 15, height: 275 },
          { width: 15, height: 240 },
        )}
      >
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
