import { useState } from 'react';

import { changeInputValue } from '@hooks/chageInputValue';
import MenuBarComponent from '@/components/searchPage/menuBar/menuBarComponent';

import styles from '@pages/searchPage/style';
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
        {/*컴포넌트로 빼기*/}
        <styles.Search />
        {/*포커스가 된 경우 */}
        {isFocused && (
          <styles.SearchBarExtends>
            {(() => {
              if (searchInputValue === '') {
                // 검색창의 입력값이 비어있는 경우 화면에 보일 검색 기록
                return (
                  <>
                    {searchHistory.map((item, index) => (
                      <styles.HistoryContainer key={index}>
                        {item.type === 'hashtag' ? ( //해시태그인 경우
                          <styles.HashtagImage src="images/searchPage/HashtagImage.png" />
                        ) : (
                          //유저 이름인 경우
                          <styles.UserNameImage src="images/searchPage/UserNameImage.png" />
                        )}
                        <styles.Content>{item.value}</styles.Content>
                      </styles.HistoryContainer>
                    ))}
                    <styles.DeleteButton>
                      delete search history
                    </styles.DeleteButton>
                  </>
                );
              } else {
                // 검색창의 입력값이 비어있지 않고 진행중인 경우
                return (
                  <>
                    <styles.Top>
                      <styles.SearchType
                        isBorder={!searchInputValue.includes('#')}
                      >
                        리뷰잉
                      </styles.SearchType>
                      <styles.SearchType
                        isBorder={searchInputValue.includes('#')}
                      >
                        태그
                      </styles.SearchType>
                    </styles.Top>
                    <>
                      {filteredData.map((item, index) => (
                        <styles.HistoryContainer key={index}>
                          {item.type === 'username' &&
                          item.value.includes(searchInputValue) ? (
                            <>
                              <styles.UserNameImage src="images/searchPage/UserNameImage.png" />
                              <styles.Content>{item.value}</styles.Content>
                              <styles.PlusFriend to="" />
                            </>
                          ) : (
                            <>
                              <styles.HashtagImage src="images/searchPage/HashtagImage.png" />
                              <styles.Content>{item.value}</styles.Content>
                              <styles.SeeReview to="">
                                리뷰 보기
                              </styles.SeeReview>
                            </>
                          )}
                        </styles.HistoryContainer>
                      ))}
                    </>
                  </>
                );
              }
            })()}
          </styles.SearchBarExtends>
        )}
      </styles.SearchBarContainer>
      {/* 옆에 계속 표시되는 메뉴 */}
      <MenuBarComponent />
    </styles.Container>
  );
};

export default SearchPage;
