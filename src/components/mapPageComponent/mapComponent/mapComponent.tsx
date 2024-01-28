import { Map } from 'react-kakao-maps-sdk';
import ZoomController from '@/components/mapPageComponent/zoomControllerComponent/zoomControllerComponent';
import styles from './styles';
import React, { useState } from 'react';

const MapComponent: React.FC = () => {
  const [previous, setPrevious] = useState(7); //지도의 이전 level을 나타내는 값
  const [deltaY, setDeltaY] = useState(0);

  return (
    <styles.MapContiner>
      {/* 카카오 지도 객체 */}
      <Map
        id="map"
        center={{ lat: 36.715133, lng: 127.734086 }}
        style={{
          display: 'flex',
          flexGrow: 1,
          height: '100%',
          scale: '1',
        }}
        level={previous}
        onZoomChanged={(map) => {
          const mapLevel = map.getLevel();
          setPrevious(mapLevel);

          if (previous > mapLevel) {
            console.log('previouse' + previous);
            setDeltaY((deltaY) => deltaY - 31.5);
          } else {
            setDeltaY((deltaY) => deltaY + 27.5);
          }
        }}
      ></Map>
      {/*  줌 컨트롤시 바 조절 */}
      <ZoomController deltaY={deltaY} />
      <styles.PurpleStar />
    </styles.MapContiner>
  );
};

export default MapComponent;
