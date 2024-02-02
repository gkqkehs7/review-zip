import React, { ChangeEvent, useRef, useState } from 'react';
import styles from './styles';
import { searchPlace } from '@/hooks/locationSearch';
import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';

interface LocationSearchprops {
  mapRef: React.RefObject<kakao.maps.Map>;
}

const LocationSearchComponent: React.FC<LocationSearchprops> = ({ mapRef }) => {
  const [keyword, setkeyword] = useState('');
  const ListRef = useRef<HTMLUListElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchPlace(keyword, ListRef, mapRef);
  };

  const device = checkDevice();
  return (
    <>
      <styles.Container
        style={responsiveWidthHeight(
          device,
          { width: 484, height: '100%' },
          { width: 444, height: '100%' },
          { width: 404, height: '100%' },
          { width: 364, height: '100%' },
          { width: 324, height: '100%' },
          { width: 284, height: '100%' },
        )}
      >
        <styles.TopImage />

        <styles.SearchingContainer>
          <styles.SearchBarForm onSubmit={handleSubmit}>
            <styles.SearchIcon src="images/mapPage/Search.png" />
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
            { width: 265, height: 460 },
            { width: 245, height: 440 },
            { width: 225, height: 420 },
            { width: 205, height: 400 },
            { width: 185, height: 380 },
            { width: 165, height: 360 },
          )}
        />
      </styles.Container>
    </>
  );
};

export default LocationSearchComponent;
