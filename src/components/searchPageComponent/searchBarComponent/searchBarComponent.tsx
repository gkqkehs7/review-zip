import { changeInputValue } from '@hooks/chageInputValue';
import styles from './style';

//한줄 치고 ctrl+s
//media-query쓸거니까 max-width랑 max-height 다 지우기
export interface SearchBarComponentProps {
  searchInputValue: string;
  setSearchInputValue: React.Dispatch<React.SetStateAction<string>>;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}
const SearchBarComponent: React.FC<SearchBarComponentProps> = (props) => {
  const { searchInputValue, setSearchInputValue, isClicked, setIsClicked } =
    props;
  //돋보기랑 인풋 형제 요소로 주기 border나 이런 스타일은 div에
  return (
    // 돋보기와 input을 감싼 div 컴포넌트
    <styles.SearchBarContainer
      isClicked={isClicked}
      onClick={() => {
        setIsClicked(!isClicked);
      }}
    >
      <styles.Search /> {/*돋보기 div */}
      <styles.SearchBar
        type="text"
        size={90}
        value={searchInputValue}
        placeholder="search"
        onChange={(e) => changeInputValue(e, setSearchInputValue)}
      />
      {/*input */}
    </styles.SearchBarContainer>
  );
};

export default SearchBarComponent;
