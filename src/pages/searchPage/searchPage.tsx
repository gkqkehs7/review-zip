import { useState } from 'react';

import SearchBarComponent from '@/components/searchPageComponent/searchBarComponent/searchBarComponent';
import SearchBarExtendComponent from '@/components/searchPageComponent/searchBarExtendComponent/searchBarExtendComponent';

import styles from './style';
import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';

// SearchType 컴포넌트에 대한 타입 정의
const SearchPage: React.FC = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <styles.Container>
      <GroupBarComponent direction="row" color="white" />
      {/* 돋보기와 기본 검색창을 감싸는 컨테이너 */}
      <styles.SearchBarContainer onClick={() => setIsClicked(!isClicked)}>
        {/* 검색 component */}
        <SearchBarComponent
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />

        {/* 클릭이 된 경우 늘린 Component */}
        {isClicked && (
          <SearchBarExtendComponent searchInputValue={searchInputValue} />
        )}
      </styles.SearchBarContainer>
    </styles.Container>
  );
};

export default SearchPage;
