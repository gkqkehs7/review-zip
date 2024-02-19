import { Map } from 'react-kakao-maps-sdk';
import ZoomController from '@/components/mapPageComponent/zoomControllerComponent/zoomControllerComponent';
import styles from './styles';
import React, { useEffect, useRef, useState } from 'react';
import LocationSearchComponent from '../locationSearchComponent/loactionSearchComponent';
import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';
import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';
import { PlaceInfo } from '@/pages/mapPage/mapPage';

interface MapComponentProps {
  width: 80 | 100;
  height: 80 | 100;
  placeDataStroage: PlaceInfo[]; //placeData를 여러개 담을수 있는 데이터가필요하다.
  setplaceDataStroage: React.Dispatch<React.SetStateAction<PlaceInfo[]>>;
}

const MapComponent: React.FC<MapComponentProps> = ({
  width,
  height,
  placeDataStroage,
  setplaceDataStroage,
}) => {
  const [previous, setPrevious] = useState<number>(6); //지도의 이전 level을 나타내는 값
  const [deltaY, setDeltaY] = useState<number>(0);

  //저장버튼 누를경우 해당값이 placeData에 담긴다.

  useEffect(() => {
    console.log(placeDataStroage);
  }, [placeDataStroage]);

  const mapRef = useRef<kakao.maps.Map>(null);
  var times = height / 2.8;

  const device = checkDevice();
  return (
    <styles.Container
      style={{
        width: `${width}%`,
        height: `${height}%`,
      }}
    >
      <styles.InnerContainer>
        <LocationSearchComponent
          mapRef={mapRef}
          width={width}
          height={height}
          setplaceDataStroage={setplaceDataStroage}
        />
        <styles.MapContainer>
          <styles.CloseBtn onClick={() => alert('close')} />
          <GroupBarComponent direction="col" color="white" />

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
                setDeltaY((deltaY) => deltaY - times * (previous - current));
              } else if (previous < current) {
                setDeltaY((deltaY) => deltaY + times * (current - previous));
              }
            }}
          ></Map>
          <ZoomController deltaY={deltaY} height={height} width={width} />
        </styles.MapContainer>

        <styles.PurpleStar
          style={responsiveWidthHeight(
            device,
            { width: 150, height: 150 },
            { width: 130, height: 130 },
            { width: 110, height: 110 },
            { width: 90, height: 90 },
            { width: 70, height: 70 },
            { width: 50, height: 50 },
          )}
        />
        {/* 줌 컨트롤시 바 조절 */}
      </styles.InnerContainer>
    </styles.Container>
  );
};

export default MapComponent;
