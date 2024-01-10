import { useState } from 'react';
import styles from './style';
import { changeInputValue } from '../../hooks/chageInputValue';
import MenuBar from '../../components/searchPage/MenuBar';

const searchHistory = [
  { type: 'username', value: 'username' },
  { type: 'hashtag', value: '#hashtag' },
  { type: 'username', value: 'username' },
  { type: 'hashtag', value: '#hashtag' },
  { type: 'username', value: 'username' },
  { type: 'username', value: 'username' },
  { type: 'hashtag', value: '#hashtag' },
];

const data = [
  { type: 'username', value: 'username' },
  { type: 'hashtag', value: '#hashtag' },
  { type: 'username', value: 'username' },
  { type: 'hashtag', value: '#hashtag' },
  { type: 'username', value: 'username' },
  { type: 'username', value: 'username' },
  { type: 'hashtag', value: 'hashtag' },
  { type: 'username', value: 'username' },
];

// SearchType 컴포넌트에 대한 타입 정의
export interface SearchTypeProps {
  isBorder: boolean;
}

// SearchBar 컴포넌트에 대한 타입 정의
export interface SearchBarProps {
  isFocused: boolean;
}

const SearchPage: React.FC = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const filteredData = searchInputValue
    ? data.filter((item) => item.value.includes(searchInputValue))
    : data;
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <styles.Container>
      {/* 돋보기와 기본 검색창을 감싸는 컨테이너 */}
      <styles.SearchBarContainer>
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
        <styles.Search />
        {/*포커스가 된 경우 */}
        {isFocused && (
          <styles.SearchBarExtends>
            {' '}
            {/*검색창 확장 영역*/}
            {searchInputValue === '' ? (
              //>>>>  검색창의 입력값이 비어있는 경우
              <>
                {searchHistory.map((item, index) => (
                  <styles.HistoryContainer key={index}>
                    {' '}
                    {/*검색 기록 보여주기 */}
                    {item.type === 'hashtag' ? ( //검색 기록 데이터가 어떤 종류인지에 따라 구분
                      <styles.Hashtag src="images/searchPage/Hashtag.png" /> //해시태그
                    ) : (
                      <styles.UserName src="images/searchPage/UserName.png" /> //유저이름
                    )}
                    <styles.Content>{item.value}</styles.Content>
                  </styles.HistoryContainer>
                ))}
                <styles.DeleteButton>delete search history</styles.DeleteButton>{' '}
                {/*검색 기록 삭제 버튼 */}
              </>
            ) : (
              //>>>>  검색창의 입력값이 비어있지 않은 경우
              <>
                <styles.Top>
                  {' '}
                  {/*검색어의 종류를 구분해서 보여주는 컨테이너 */}
                  <styles.SearchType isBorder={!searchInputValue.includes('#')}>
                    {' '}
                    {/*props를 전달해서 border 변화*/}
                    리뷰잉
                  </styles.SearchType>
                  <styles.SearchType isBorder={searchInputValue.includes('#')}>
                    태그
                  </styles.SearchType>
                </styles.Top>
                <>
                  {/*밑에도 검색어 종류에 따라 표시되는 이미지 모양과 옆에 붙는 버튼 구분 */}
                  {filteredData.map((item, index) => (
                    <styles.HistoryContainer key={index}>
                      {item.type === 'username' &&
                      item.value.includes(searchInputValue) ? (
                        <>
                          <styles.UserName src="images/searchPage/UserName.png" />
                          <styles.Content>{item.value}</styles.Content>
                          <styles.PlusFriend to="" />{' '}
                          {/*username인 경우 친구 추가 */}
                        </>
                      ) : (
                        <>
                          <styles.Hashtag src="images/searchPage/Hashtag.png" />
                          <styles.Content>{item.value}</styles.Content>
                          <styles.SeeReview to="">리뷰 보기</styles.SeeReview>
                          {/*리뷰 보기 */}
                        </>
                      )}
                    </styles.HistoryContainer>
                  ))}
                </>
              </>
            )}
          </styles.SearchBarExtends>
        )}
      </styles.SearchBarContainer>
      {/* 옆에 계속 표시되는 메뉴 */}
      <MenuBar />
    </styles.Container>
  );
};

export default SearchPage;
