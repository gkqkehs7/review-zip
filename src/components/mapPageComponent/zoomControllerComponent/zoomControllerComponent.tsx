import React, { useRef } from 'react';
import styles from './styles';
import { checkDevice } from '@/utils/checkDeviceSize';
import { responsiveWidthHeight } from '@/utils/reponsiveSize';

interface ZoomControllerProps {
  deltaY: number;
  height: number;
  width: number;
}

const ZoomControllerComponent: React.FC<ZoomControllerProps> = ({
  deltaY,
  height,
  width,
}) => {
  const device = checkDevice();

  return (
    //  지도 우측 상단에 존재하는 줌 컨트롤러
    <styles.ZoomContainer
      style={responsiveWidthHeight(
        device,
        { width: 0.6 * width, height: 5.2 * height },
        { width: 0.6 * width, height: 5 * height },
        { width: 0.6 * width, height: 4.8 * height },
        { width: 0.6 * width, height: 4.2 * height },
        { width: 0.6 * width, height: 3.8 * height },
        { width: 0.6 * width, height: 3 * height },
      )}
    >
      <styles.ZoominImage />
      <styles.ZoomVerticalBar
        style={responsiveWidthHeight(
          device,
          { width: 15, height: 3.9 * height },
          { width: 15, height: 3.75 * height },
          { width: 15, height: 3.6 * height },
          { width: 15, height: 3.15 * height },
          { width: 15, height: 2.75 * height },
          { width: 15, height: 2.4 * height },
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
