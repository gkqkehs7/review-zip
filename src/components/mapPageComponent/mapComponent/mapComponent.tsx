import { Map } from 'react-kakao-maps-sdk';
import ZoomController from '@/components/mapPageComponent/zoomControllerComponent/zoomControllerComponent';
import styles from './styles';
import React, { useRef, useState } from 'react';
import { KakaoMap } from 'kakao-maps-sdk';
import LocationSearchComponent from '../locationSearchComponent/loactionSearchComponent';

const MapComponent: React.FC = () => {
  const [previous, setPrevious] = useState(1); //지도의 이전 level을 나타내는 값
  const [deltaY, setDeltaY] = useState(0);
  const mapRef = useRef<kakao.maps.Map>(null);

  return (
    <styles.Container>
      <styles.MapContainer>
        <LocationSearchComponent mapRef={mapRef} />
        {/* 카카오 지도 객체 */}
        <Map
          id="map"
          ref={mapRef}
          center={{ lat: 37.566826, lng: 126.9786567 }}
          style={{
            display: 'flex',
            flexGrow: 1,
            height: '100%',
            scale: '1',
          }}
          level={1}
          // onZoomChanged={(map) => {
          //   const mapLevel = map.getLevel();
          //   setPrevious(mapLevel);
          //   console.log('previouse : ' + previous);
          //   console.log('mapLevel : ' + mapLevel);
          //   if (previous > mapLevel) {
          //     setDeltaY((deltaY) => deltaY - 31.5);
          //   } else {
          //     setDeltaY((deltaY) => deltaY + 27.5);
          //   }
          // }}
        ></Map>
      </styles.MapContainer>
      {/*  줌 컨트롤시 바 조절 */}
      <ZoomController deltaY={deltaY} />
      <styles.PurpleStar />
    </styles.Container>
  );
};

export default MapComponent;
