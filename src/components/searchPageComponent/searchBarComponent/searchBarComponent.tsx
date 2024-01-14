import { changeInputValue } from '@hooks/chageInputValue';
import styles from '@/components/searchPageComponent/searchBarComponent/style';
import { SearchBarProps } from '@/pages/searchPage/searchPage';
//한줄 치고 ctrl+s
//media-query쓸거니까 max-width랑 max-height 다 지우기
const SearchBarComponent: React.FC<SearchBarProps> = ({ searchBarProps }) => {
  const { searchInputValue, setSearchInputValue } = searchBarProps;
  //돋보기랑 인풋 형제 요소로 주기 border나 이런 스타일은 div에
  return (
    // 돋보기와 input을 감싼 div 컴포넌트
    <styles.SearchBarContainer>
      <styles.Search /> {/*돋보기 div */}
      <styles.SearchBar
        type="text"
        size={90}
        value={searchInputValue}
        placeholder="search"
        onChange={(e) => changeInputValue(e, setSearchInputValue)}
      />{' '}
      {/*input */}
    </styles.SearchBarContainer>
  );
};

export default SearchBarComponent;
