import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';

import styles from './styles';

const searchHistories = [
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
    value: 'exampleTag3',
    searchWordImage: 'images/searchPage/HashtagImage.png',
  },
  {
    id: 4,
    type: 'hashtag',
    value: 'exampleTag4',
    searchWordImage: 'images/searchPage/HashtagImage.png',
  },
  {
    id: 5,
    type: 'hashtag',
    value: 'exampleTag5',
    searchWordImage: 'images/searchPage/HashtagImage.png',
  },
];

interface SearchHistoryComponent {}

const SearchHistoryComponent: React.FC<SearchHistoryComponent> = () => {
  const device = checkDevice();

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
        <div key={index}>
          <styles.HistoryContainer>
            {/* 해시 태그 */}
            <styles.History> {searchHistory.value}</styles.History>

            {/* 리뷰 보기 버튼 */}
            <styles.DeleteButton />
          </styles.HistoryContainer>
        </div>
      ))}
    </styles.Container>
  );
};

export default SearchHistoryComponent;
