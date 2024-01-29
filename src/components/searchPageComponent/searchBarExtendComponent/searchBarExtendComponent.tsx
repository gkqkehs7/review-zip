import SearchHistoryComponent from '@/components/searchPageComponent/searchHistoryComponent/searchHistoryComponent';
import UserListComponent from '@/components/searchPageComponent/userListComponent/userListComponent';
import HashtagListComponent from '@/components/searchPageComponent/hashtagListComponent/hashtagListComponent';

import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';

import styles from './style';

interface SearchBarExtendComponentProps {
  searchInputValue: string;
}

const SearchBarExtendComponent: React.FC<SearchBarExtendComponentProps> = ({
  searchInputValue,
}) => {
  const device = checkDevice();
  return (
    <styles.Container
      style={responsiveWidthHeight(
        device,
        { width: 2000, height: 'auto' },
        { width: 1700, height: 'auto' },
        { width: 1400, height: 'auto' },
        { width: 1080, height: 'auto' },
        { width: 500, height: 'auto' },
        { width: 500, height: 'auto' },
      )}
    >
      <styles.Top>
        {searchInputValue ? (
          <>
            <styles.SearchType isBorder={!searchInputValue.includes('#')}>
              리뷰잉
            </styles.SearchType>
            <styles.SearchType isBorder={searchInputValue.includes('#')}>
              태그
            </styles.SearchType>
          </>
        ) : (
          <>
            <styles.SearchType isBorder={!searchInputValue.includes('#')}>
              검색기록
            </styles.SearchType>
          </>
        )}
      </styles.Top>

      {!searchInputValue && ( // 검색창의 입력값이 비어있는 경우 화면에 보일 검색 기록
        <SearchHistoryComponent />
      )}

      {searchInputValue && ( // 검색창의 입력값이 비어있지 않고 진행중인 경우
        <div>
          {searchInputValue.includes('#') ? (
            <HashtagListComponent />
          ) : (
            <UserListComponent />
          )}
        </div>
      )}
    </styles.Container>
  );
};

export default SearchBarExtendComponent;
