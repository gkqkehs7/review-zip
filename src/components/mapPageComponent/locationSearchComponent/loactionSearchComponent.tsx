import { ChangeEvent, KeyboardEvent, RefObject, useRef, useState } from 'react';
import styles from './styles';
import { searchPlace } from '@/hooks/locationSearch';

const LocationSearchComponent: React.FC = () => {
  const [keyword, setkeyword] = useState('');
  const ListRef = useRef<HTMLUListElement>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      searchPlace(keyword, ListRef);
    }
  };

  return (
    <>
      <styles.Container>
        <styles.TopImage />

        <styles.SearchingContainer>
          <styles.SearchBarForm>
            <styles.SearchIcon src="images/mapPage/Search.png" />
            <styles.SearchBar
              type="text"
              placeholder="장소,버스.지하철,도로검색"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setkeyword(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
          </styles.SearchBarForm>

          <styles.PlaceList ref={ListRef} />
          <styles.Pagnitation></styles.Pagnitation>
        </styles.SearchingContainer>
        <styles.StarsImage />
      </styles.Container>
    </>
  );
};

export default LocationSearchComponent;
