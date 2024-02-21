import React, { useEffect, useRef, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import styles from './styles';
import LocationSearchComponent from '../locationSearchComponent/loactionSearchComponent';
import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';
import { PlaceInfo } from '@/types/common.types';

interface MapComponentProps {
  width: 80 | 100;
  height: 80 | 100;
  closeMapModal?: () => void;
  placeDatas?: PlaceInfo;
  setPlaceData?: React.Dispatch<React.SetStateAction<PlaceInfo | undefined>>;
}

const MapComponent: React.FC<MapComponentProps> = ({
  width,
  height,
  placeDatas,
  setPlaceData,
  closeMapModal,
}) => {
  const [previous, setPrevious] = useState<number>(1); //지도의 이전 level을 나타내는 값
  const [deltaY, setDeltaY] = useState<number>(0);
  const [location, setLoacation] = useState<{ x: number; y: number }>({
    x: 37.52052924893572,
    y: 126.888016282421,
  });

  useEffect(() => {
    if (placeDatas) {
      setLoacation({
        x: parseFloat(placeDatas.x),
        y: parseFloat(placeDatas.y),
      });
    }
  }, [placeDatas]);

  const mapRef = useRef<kakao.maps.Map>(null);
  var times = height / 2.8;

  useEffect(() => {
    if (placeDatas) {
      const lat = parseFloat(placeDatas.x);
      const lng = parseFloat(placeDatas.y);
      var placePostion = new kakao.maps.LatLng(lat, lng);
      mapRef.current?.setCenter(placePostion);
      mapRef.current?.setLevel(1);

      const imageSrc = 'images/mapPage/Marker.png';
      let imageSize = new kakao.maps.Size(30, 30);

      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      var markerPosition = new kakao.maps.LatLng(lat, lng);

      var marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });

      marker.setMap(mapRef.current);
    }
  }, [mapRef.current, location]);

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
          setPlaceData={setPlaceData}
        />
        <styles.MapContainer>
          <styles.CloseBtn onClick={closeMapModal} />

          <Map
            id="map"
            ref={mapRef}
            center={{
              lat: location.x,
              lng: location.y,
            }}
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
