import SearchHistoryComponent from '@/components/searchPageComponent/searchHistoryComponent/searchHistoryComponent';
import UserListComponent from '@/components/searchPageComponent/userListComponent/userListComponent';
import HashtagListComponent from '@/components/searchPageComponent/hashtagListComponent/hashtagListComponent';

import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';

import { Hashtag, History, User } from '@/types/common.types';

import styles from './style';
import { useCallback } from 'react';

interface SearchBarExtendComponentProps {
  searchInputValue: string;
  searchUsers: User[];
  searchHashtags: Hashtag[];
  searchHistories: History[];
  deleteHistory: (historyId: number) => Promise<void>;
  followUser: (user: User) => Promise<void>;
  saveSearchUserHistory: (user: User) => Promise<void>;
  saveSearchHashtagHistory: (hashtag: string) => Promise<void>;
}

const SearchBarExtendComponent: React.FC<SearchBarExtendComponentProps> = ({
  searchInputValue,
  searchUsers,
  searchHashtags,
  searchHistories,
  deleteHistory,
  followUser,
  saveSearchUserHistory,
  saveSearchHashtagHistory,
}) => {
  const device = checkDevice();

  const sectionText = useCallback<
    () => '검색기록' | '해시태그' | '리뷰잉'
  >(() => {
    if (searchInputValue.trim().length === 0) {
      return '검색기록';
    }

    if (searchInputValue[0] === '#') {
      return '해시태그';
    }

    return '리뷰잉';
  }, [searchInputValue]);

  return (
    <styles.Container>
      <styles.Top
        style={responsiveWidthHeight(
          device,
          { width: 2000, height: 40 },
          { width: 1700, height: 50 },
          { width: 1400, height: 50 },
          { width: 1080, height: 50 },
          { width: 500, height: 50 },
          { width: 500, height: 50 },
        )}
      >
        <styles.TopText>{sectionText()}</styles.TopText>
      </styles.Top>

      {!searchInputValue && ( // 검색창의 입력값이 비어있는 경우 화면에 보일 검색 기록
        <SearchHistoryComponent
          searchHistories={searchHistories}
          deleteHistory={deleteHistory}
        />
      )}

      {searchInputValue && ( // 검색창의 입력값이 비어있지 않고 진행중인 경우
        <div>
          {searchInputValue[0] === '#' ? (
            <HashtagListComponent
              hashtags={searchHashtags}
              saveSearchHashtagHistory={saveSearchHashtagHistory}
            />
          ) : (
            <UserListComponent
              users={searchUsers}
              followUser={followUser}
              saveSearchUserHistory={saveSearchUserHistory}
            />
          )}
        </div>
      )}
    </styles.Container>
  );
};

export default SearchBarExtendComponent;
