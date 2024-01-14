import { useState } from 'react';

import MenuBarComponent from '@/components/searchPageComponent/menuBar/menuBarComponent';
import SearchBarComponent from '@/components/searchPageComponent/searchBarComponent/searchBarComponent';
import HashtagComponent from '@/components/searchPageComponent/hashtagComponent/hashtagComponent';
import UserNameComponent from '@/components/searchPageComponent/userNameComponent/userNameComponent';

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

interface HashtagProps {
  hashtagProps: string;
}

const SearchPage: React.FC = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const filteredData = searchInputValue
    ? data.filter((item) => item.value.includes(searchInputValue))
    : data;
  const searchBarProps = {
    searchInputValue,
    setSearchInputValue,
  };

  return (
    <styles.Container>
      {/* 돋보기와 기본 검색창을 감싸는 컨테이너 */}
      <styles.SearchBarContainer onClick={() => setIsFocused(!isFocused)}>
        <SearchBarComponent searchBarProps={searchBarProps} />
        {/*클릭이 된 경우 */}
        {isFocused && (
          <styles.SearchBarExtends>
            {(() => {
              if (searchInputValue === '') {
                // 검색창의 입력값이 비어있는 경우 화면에 보일 검색 기록
                return (
                  <>
                    {searchHistory.map((item, index) => (
                      <styles.HistoryContainer key={index}>
                        {item.type === 'hashtag' ? (
                          <HashtagComponent hashtagProps={item.value} />
                        ) : (
                          <UserNameComponent usernameProps={item.value} />
                        )}
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
                    {' '}
                    {/*입력이 있을 경우 리뷰잉인지 태그인지 보여주는 부분 */}
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
                          {item.type === 'username' && //유저 이름인 경우
                          item.value.includes(searchInputValue) ? (
                            <UserNameComponent usernameProps={item.value} />
                          ) : (
                            <HashtagComponent hashtagProps={item.value} />
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
