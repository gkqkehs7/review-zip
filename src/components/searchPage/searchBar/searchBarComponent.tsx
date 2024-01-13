import { useState } from 'react';
import { changeInputValue } from '@hooks/chageInputValue';
import styles from '@/components/searchPage/searchBar/style';

const SearchBarComponent = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  return (
    <>
      <styles.SearchBar
        type="text"
        size={90}
        value={searchInputValue}
        placeholder="search"
        onChange={(e) => changeInputValue(e, setSearchInputValue)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocused={isFocused}
      />
      {/*컴포넌트로 빼기*/}
      <styles.Search />
    </>
  );
};

export default SearchBarComponent;
