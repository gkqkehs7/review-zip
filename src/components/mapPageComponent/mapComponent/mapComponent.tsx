import React, { useEffect, useRef, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import styles from './styles';
import ZoomController from '@/components/mapPageComponent/zoomControllerComponent/zoomControllerComponent';
import LocationSearchComponent from '../locationSearchComponent/loactionSearchComponent';
import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';
import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';
import { PlaceInfo } from '@/types/common.types';

interface MapComponentProps {
  width: 80 | 100;
  height: 80 | 100;
  closeMapModal?: () => void;
  savePlaceData?: React.Dispatch<React.SetStateAction<PlaceInfo | undefined>>;
}

const MapComponent: React.FC<MapComponentProps> = ({
  width,
  height,
  closeMapModal,
  savePlaceData,
}) => {
  const device = checkDevice();

  const mapRef = useRef<kakao.maps.Map>(null);

  const [previous, setPrevious] = useState<number>(6); //지도의 이전 level을 나타내는 값
  const [deltaY, setDeltaY] = useState<number>(0);
  // 장소에 대한 데이터를 담는 변수
  const [placeData, setPlaceData] = useState<PlaceInfo>({
    place_name: '',
    address_name: '',
    road_address_name: '',
    phone: '',
    x: '',
    y: '',
  });

  // 장소 저장
  useEffect(() => {
    if (savePlaceData) {
      savePlaceData(placeData);
    }
  }, [placeData]);

  var times = height / 2.8;

  return (
    <styles.Container>
      <styles.InnerContainer
        style={{
          width: `${width}%`,
          height: `${height}%`,
        }}
      >
        <LocationSearchComponent
          mapRef={mapRef}
          width={width}
          height={height}
          setPlaceInnfo={setPlaceData}
        />
        <styles.MapContainer>
          <GroupBarComponent direction="col" color="white" />
          <styles.CloseBtn onClick={closeMapModal} />
          <styles.CloseBtn onClick={closeMapModal} />
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
