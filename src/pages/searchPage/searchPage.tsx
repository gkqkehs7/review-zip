import { useCallback, useState } from 'react';

import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';

import SearchBarComponent from '@/components/searchPageComponent/searchBarComponent/searchBarComponent';
import SearchWordComponent from '@/components/searchPageComponent/searchWordComponent/searchWordComponent';
import UserNameComponent from '@/components/searchPageComponent/userNameComponent/userNameComponent';
import HashtagComponent from '@/components/searchPageComponent/hashtagComponent/hashtagComponent';

import styles from './style';
const searchHistory = [
  {
    id: 1,
    type: 'username',
    value: 'username',
    searchWordImage: 'images/searchPage/UserNameImage.png',
  },
  {
    id: 2,
    type: 'username',
    value: 'username',
    searchWordImage: 'images/searchPage/UserNameImage.png',
  },
  {
    id: 3,
    type: 'username',
    value: 'username',
    searchWordImage: 'images/searchPage/UserNameImage.png',
  },
  {
    id: 3,
    type: 'hashtag',
    value: '#exampleTag3',
    searchWordImage: 'images/searchPage/HashtagImage.png',
  },
  {
    id: 4,
    type: 'hashtag',
    value: '#exampleTag4',
    searchWordImage: 'images/searchPage/HashtagImage.png',
  },
  {
    id: 5,
    type: 'hashtag',
    value: '#exampleTag5',
    searchWordImage: 'images/searchPage/HashtagImage.png',
  },
];

const users = [
  {
    id: 1,
    type: 'username',
    value: 'username',
    searchWordImage: 'images/searchPage/UserNameImage.png',
  },
  {
    id: 2,
    type: 'username',
    value: 'username',
    searchWordImage: 'images/searchPage/UserNameImage.png',
  },
  {
    id: 3,
    type: 'username',
    value: 'username',
    searchWordImage: 'images/searchPage/UserNameImage.png',
  },
  {
    id: 4,
    type: 'username',
    value: 'username',
    searchWordImage: 'images/searchPage/UserNameImage.png',
  },
  {
    id: 5,
    type: 'username',
    value: 'username',
    searchWordImage: 'images/searchPage/UserNameImage.png',
  },
];

const hashtags = [
  {
    id: 1,
    type: 'hashtag',
    value: '#exampleTag1',
    searchWordImage: 'images/searchPage/HashtagImage.png',
  },
  {
    id: 2,
    type: 'hashtag',
    value: '#exampleTag2',
    searchWordImage: 'images/searchPage/HashtagImage.png',
  },
  {
    id: 3,
    type: 'hashtag',
    value: '#exampleTag3',
    searchWordImage: 'images/searchPage/HashtagImage.png',
  },
  {
    id: 4,
    type: 'hashtag',
    value: '#exampleTag4',
    searchWordImage: 'images/searchPage/HashtagImage.png',
  },
  {
    id: 5,
    type: 'hashtag',
    value: '#exampleTag5',
    searchWordImage: 'images/searchPage/HashtagImage.png',
  },
];
//유저 네임이나 해시태그 같은 데이터의 타입
type dataType = {
  id: number;
  type: string;
  value: string;
  searchWordImage: string;
};

// SearchType 컴포넌트에 대한 타입 정의
export interface SearchTypeProps {
  isBorder: boolean;
}

const SearchPage: React.FC = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [isClicked, setIsClicked] = useState<boolean>(false);

  //데이터 배열을 받아서 함수가 다시 필요할 때마다 함수를 새로 생성하는 것이 아닌 필요할 때마다 메모리에서 가져와서 재사용
  const filterUsers = useCallback(
    (users: dataType[]) => {
      const filterUserlist = users.filter((user) =>
        user.value.includes(searchInputValue),
      );

      return (
        <div>
          {filterUserlist.map((user) => (
            <UserNameComponent
              value={user.value}
              searchWordImage={user.searchWordImage}
            />
          ))}
        </div>
      );
    },
    [searchInputValue],
  );

  const filterHashs = useCallback(
    (hashtags: dataType[]) => {
      const filterTaglist = hashtags.filter((hashtag) =>
        hashtag.value.includes(searchInputValue),
      );

      return (
        <div>
          {filterTaglist.map((hashtag) => (
            <HashtagComponent
              value={hashtag.value}
              searchWordImage={hashtag.searchWordImage}
            />
          ))}
        </div>
      );
    },
    [searchInputValue],
  );

  const renderSearchHistory = useCallback(
    (searchHistory: dataType[]) => {
      return (
        <div>
          {searchHistory.map((item, index) => (
            <SearchWordComponent
              key={index}
              index={index}
              searchInputValue={searchInputValue}
              item={{
                type: item.type,
                value: item.value,
                searchWordImage: item.searchWordImage,
              }}
            />
          ))}
          <styles.ButtonContainer>
            <styles.DeleteButton>delete search history</styles.DeleteButton>
          </styles.ButtonContainer>
        </div>
      );
    },
    [searchInputValue],
  );

  const renderSearchTypes = useCallback(() => {
    return (
      <styles.Top>
        <styles.SearchType isBorder={!searchInputValue.includes('#')}>
          리뷰잉
        </styles.SearchType>
        <styles.SearchType isBorder={searchInputValue.includes('#')}>
          태그
        </styles.SearchType>
      </styles.Top>
    );
  }, [searchInputValue]);

  const device = checkDevice();

  return (
    <styles.Container>
      {/* 돋보기와 기본 검색창을 감싸는 컨테이너 */}
      <styles.SearchBarContainer onClick={() => setIsClicked(!isClicked)}>
        <SearchBarComponent
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
        {/*클릭이 된 경우 */}
        {isClicked && (
          <styles.SearchBarExtends
            style={responsiveWidthHeight(
              device,
              { width: 2000, height: 1800 },
              { width: 1700, height: 1500 },
              { width: 1400, height: 1200 },
              { width: 1080, height: 500 },
              { width: 500, height: 300 },
              { width: 200, height: 100 },
            )}
          >
            {!searchInputValue && ( // 검색창의 입력값이 비어있는 경우 화면에 보일 검색 기록
              <div>{renderSearchHistory(searchHistory)}</div>
            )}
            {searchInputValue && ( // 검색창의 입력값이 비어있지 않고 진행중인 경우
              <div>
                {/*입력이 있을 경우 리뷰잉인지 태그인지에 따라 하단에 border가 변함 */}
                {renderSearchTypes()}
                {searchInputValue.includes('#') ? (
                  <div>{filterHashs(hashtags)}</div>
                ) : (
                  <div>{filterUsers(users)}</div>
                )}
              </div>
            )}
          </styles.SearchBarExtends>
        )}
      </styles.SearchBarContainer>
    </styles.Container>
  );
};

export default SearchPage;
