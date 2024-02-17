import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './styles';
import { searchPlace } from '@/hooks/locationSearch';
import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';
import { PlaceInfo } from '../mapComponent/mapComponent';
import { GetAxiosInstance } from '@/api/axios.methods';

interface LocationSearchprops {
  mapRef: React.RefObject<kakao.maps.Map>;
  width: number;
  height: number;
  setPlaceInnfo: React.Dispatch<React.SetStateAction<PlaceInfo>>;
}

const LocationSearchComponent: React.FC<LocationSearchprops> = ({
  mapRef,
  width,
  height,
  setPlaceInnfo,
}) => {
  const [keyword, setkeyword] = useState('');
  const ListRef = useRef<HTMLUListElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (width == 80 && height == 80) {
      searchPlace(keyword, ListRef, mapRef, setPlaceInnfo, false);
    } else if (width == 100 && height == 100) {
      searchPlace(keyword, ListRef, mapRef, setPlaceInnfo, true);
      /*
      검색기능과 장소찾기능은 동일. 그러나 해당장소의 저장기능은 없음. 이때 마커 2번누르면 해당위치의 마커 삭제
      htmlString의 내용만 변경해서 제공.
      1. 검색해서 얻은 장소는 두번 클릭시 마커가 지워지게 한다
      2. 서버에서 가져와서 얻은 데이터는 관심장소에서 제거하지 않는 이상 마커를 제거하지 않는다
      3.
    
      */
    }
  };

  const device = checkDevice();
  return (
    <>
      <styles.Container
        style={responsiveWidthHeight(
          device,
          { width: width * 4, height: '100%' },
          { width: width * 4, height: '100%' },
          { width: width * 4, height: '100%' },
          { width: width * 3.5, height: '100%' },
          { width: width * 3.2, height: '100%' },
          { width: width * 2.8, height: '100%' }, //100
        )}
      >
        <styles.TopImage
          style={responsiveWidthHeight(
            device,
            { width: width * 2.7, height: 61 },
            { width: width * 2.7, height: 61 },
            { width: width * 2.7, height: 61 },
            { width: width * 2.42, height: 55 },
            { width: width * 2.16, height: 49 },
            { width: width * 1.9, height: 43 },
          )}
        >
          REVIEW.ZIP
        </styles.TopImage>

        <styles.SearchingContainer
          style={responsiveWidthHeight(
            device,
            { width: width * 2.9, height: '100%' },
            { width: width * 2.9, height: '100%' },
            { width: width * 2.9, height: '100%' },
            { width: width * 2.6, height: '100%' },
            { width: width * 2.3, height: '100%' },
            { width: width * 2.1, height: '100%' },
          )}
        >
          <styles.SearchBarForm onSubmit={handleSubmit}>
            <styles.SearchIcon
              src="images/mapPage/Search.png"
              style={responsiveWidthHeight(
                device,
                { width: 29, height: 29 },
                { width: 29, height: 29 },
                { width: 29, height: 29 },
                { width: 26, height: 26 },
                { width: 23.1, height: 23.1 },
                { width: 20.2, height: 20.2 },
              )}
            />
            <styles.SearchBar
              type="text"
              placeholder="장소,버스.지하철,도로검색"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setkeyword(e.target.value);
              }}
            />
          </styles.SearchBarForm>

          <styles.PlaceList ref={ListRef} />
        </styles.SearchingContainer>
        <styles.StarsImage
          style={responsiveWidthHeight(
            device,
            { width: width * 2.66, height: height * 4.61 },
            { width: width * 2.66, height: height * 4.61 },
            { width: width * 2.66, height: height * 4.61 },
            { width: width * 2.25, height: height * 3.81 },
            { width: width * 1.85, height: height * 3.4 },
            { width: width * 1.46, height: height * 3 },
          )}
        />
      </styles.Container>
    </>
  );
};

export default LocationSearchComponent;
