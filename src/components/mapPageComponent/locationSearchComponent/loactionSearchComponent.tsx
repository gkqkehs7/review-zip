import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './styles';
import { searchPlace } from '@/hooks/locationSearch';
import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';
import { PlaceInfo } from '@/types/common.types';

interface LocationSearchprops {
  mapRef: React.RefObject<kakao.maps.Map>;
  width: number;
  height: number;
  setPlaceData: React.Dispatch<React.SetStateAction<PlaceInfo | undefined>>;
}

const LocationSearchComponent: React.FC<LocationSearchprops> = ({
  mapRef,
  width,
  height,
  setPlaceData,
}) => {
  const [keyword, setkeyword] = useState('');
  const ListRef = useRef<HTMLUListElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (width == 80 && height == 80) {
      searchPlace(keyword, ListRef, mapRef, setPlaceData, false);
    } else if (width == 100 && height == 100) {
      searchPlace(keyword, ListRef, mapRef, setPlaceData, true);
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
