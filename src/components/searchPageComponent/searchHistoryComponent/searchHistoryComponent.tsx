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
  return (
    <div>
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
    </div>
  );
};

export default SearchHistoryComponent;
