import { Map } from 'react-kakao-maps-sdk';
import ZoomController from '@/components/mapPageComponent/zoomControllerComponent/zoomControllerComponent';
import styles from './styles';
import React, { useEffect, useRef, useState } from 'react';
import LocationSearchComponent from '../locationSearchComponent/loactionSearchComponent';
import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';
import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';
import { GetAxiosInstance } from '@/api/axios.methods';

interface MapComponentProps {
  width: 80 | 100;
  height: 80 | 100;
}

export interface PlaceInfo {
  place_name: string;
  address_name: string;
  road_address_name: string;
  phone: string;
  x: string;
  y: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ width, height }) => {
  const [previous, setPrevious] = useState<number>(6); //지도의 이전 level을 나타내는 값
  const [deltaY, setDeltaY] = useState<number>(0);

  //장소에 대한 데이터를 담는 변수
  const [placeData, setPlaceData] = useState<PlaceInfo>({
    place_name: '',
    address_name: '',
    road_address_name: '',
    phone: '',
    x: '',
    y: '',
  });

  if (width == 100 && height == 100) {
    useEffect(() => {
      /*
      0. 서버에서 유저의 nickname을 가져온다
      1. 서버에서 장소의 좌표값을 가져온다
      2. 좌표에다 마커를 찍고. 마커에 윈도우 인포를 등록한다. 이때 등록된 윈도우 인포에는 장소, 주소 데이터가 담겨있으며 삭제기능도 되어있다.
      3. 장소를 불러오는데 실패하였을 경우에는  alert 경고메시지를 준다.
      */
      const getData = async (userId: string) => {
        try {
          const response = await GetAxiosInstance(`v1/user/${userId}/stores`);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      };
      getData('asd');
    }); // 이작업은 화면이 처음 랜더링 되었을때만 실행한다.
  }
  const mapRef = useRef<kakao.maps.Map>(null);

  var times = height / 2.8;

  const device = checkDevice();
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
                console.log('최대: ' + deltaY);
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
