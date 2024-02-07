import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';

import styles from './styles';
import { History, User } from '@/types/common.types';

interface SearchHistoryComponent {
  searchHistories: History[];
  deleteHistory: (historyId: number) => Promise<void>;
}

const SearchHistoryComponent: React.FC<SearchHistoryComponent> = ({
  searchHistories,
  deleteHistory,
}) => {
  const device = checkDevice();

  const hashTagInfo = (hashtag: string, historyId: number) => {
    return (
      <styles.HistoryContainer>
        {/* 해시 태그 */}
        <styles.HashTagLink to="/hashtagPage">
          <styles.Content>#{hashtag}</styles.Content>
        </styles.HashTagLink>

        <styles.DeleteButton onClick={() => deleteHistory(historyId)} />
      </styles.HistoryContainer>
    );
  };

  const userInfo = (user: User, historyId: number) => {
    return (
      <styles.HistoryContainer>
        <styles.UserData>
          <styles.UserImage
            src={user.profileUrl}
            style={responsiveWidthHeight(
              device,
              { width: 56, height: 56 },
              { width: 56, height: 56 },
              { width: 56, height: 56 },
              { width: 48, height: 48 },
              { width: 48, height: 48 },
              { width: 48, height: 48 },
            )}
          />

          <styles.UserNicknameName>
            <styles.UserNickname>{user.nickname}</styles.UserNickname>
            <styles.UserName>{user.name}</styles.UserName>
          </styles.UserNicknameName>
        </styles.UserData>

        <styles.DeleteButton onClick={() => deleteHistory(historyId)} />
      </styles.HistoryContainer>
    );
  };

  return (
    <styles.Container
      style={responsiveWidthHeight(
        device,
        { width: 2000, height: 400 },
        { width: 1700, height: 400 },
        { width: 1400, height: 400 },
        { width: 1080, height: 400 },
        { width: 500, height: 400 },
        { width: 500, height: 400 },
      )}
    >
      {searchHistories.map((searchHistory, index) => (
        <div key={searchHistory.historyId}>
          {searchHistory.type === 'USER'
            ? userInfo(searchHistory.user!, searchHistory.historyId)
            : hashTagInfo(searchHistory.hashtag!, searchHistory.historyId)}
        </div>
      ))}
    </styles.Container>
  );
};

export default SearchHistoryComponent;
