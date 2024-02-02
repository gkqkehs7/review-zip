import { Map } from 'react-kakao-maps-sdk';
import ZoomController from '@/components/mapPageComponent/zoomControllerComponent/zoomControllerComponent';
import styles from './styles';
import React, { useRef, useState } from 'react';
import LocationSearchComponent from '../locationSearchComponent/loactionSearchComponent';
import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';
import { clickData } from '@/hooks/locationSearch';

const MapComponent: React.FC = () => {
  const [previous, setPrevious] = useState(6); //지도의 이전 level을 나타내는 값
  const [deltaY, setDeltaY] = useState(0);
  const mapRef = useRef<kakao.maps.Map>(null);
  var times = 37.5;

  const device = checkDevice();
  if (device == 'LargeDesktop') {
    times = 37.5;
  } else if (device == 'SmallDesktop') {
    times = 36;
  } else if (device == 'LargeLaptop') {
    times = 34.5;
  } else if (device == 'SmallLaptop') {
    times = 30.5;
  } else if (device == 'Pad') {
    times = 27;
  } else {
    times = 21.5;
  }

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
          }}
          minLevel={11}
          level={previous}
          maxLevel={1}
          onZoomChanged={(map) => {
            const current = map.getLevel();
            setPrevious(current);
            if (previous > current) {
              //지도 레벨이 감소했을때 ,
              setDeltaY((deltaY) => deltaY - times * (previous - current));
            } else if (previous < current) {
              //지도 레벨이 증가했을때
              // console.log('증가 전: ' + deltaY);
              setDeltaY((deltaY) => deltaY + times * (current - previous));
              console.log('최대: ' + deltaY);
            }
          }}
        ></Map>
      </styles.MapContainer>
      {/*  줌 컨트롤시 바 조절 */}
      <ZoomController deltaY={deltaY} />
      <styles.PurpleStar
        style={responsiveWidthHeight(
          device,
          { width: 190, height: 190 },
          { width: 170, height: 170 },
          { width: 150, height: 150 },
          { width: 130, height: 130 },
          { width: 110, height: 110 },
          { width: 90, height: 90 },
        )}
      />
    </styles.Container>
  );
};

export default MapComponent;
