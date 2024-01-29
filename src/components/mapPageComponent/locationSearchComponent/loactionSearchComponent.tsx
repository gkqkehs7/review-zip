import React, { ChangeEvent, useRef, useState } from 'react';
import styles from './styles';
import { searchPlace } from '@/hooks/locationSearch';

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

  return (
    <>
      <styles.Container>
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
          {/* <styles.Pagnitation /> */}
        </styles.SearchingContainer>
        <styles.StarsImage />
      </styles.Container>
    </>
  );
};

export default LocationSearchComponent;
