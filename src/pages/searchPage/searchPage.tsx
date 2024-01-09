import { useState } from 'react';
import styles from './style';
import { changeInputValue } from '../../hooks/chageInputValue';

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

const SearchPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const filteredData = search
    ? data.filter((item) => item.value.includes(search))
    : data;
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <styles.Container>
      <styles.SearchBarContainer>
        <styles.SearchBar
          type="text"
          size={90}
          value={search}
          placeholder="search"
          onChange={(e) => changeInputValue(e, setSearch)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          isFocused={isFocused}
        />
        <styles.Search />
        {isFocused && (
          <styles.SearchBarExtends>
            {search === '' ? (
              <>
                {searchHistory.map((item, index) => (
                  <styles.HistoryContainer key={index}>
                    {item.type === 'hashtag' ? (
                      <styles.Hashtag src="images/Hashtag.png" />
                    ) : (
                      <styles.UserName src="images/UserName.png" />
                    )}
                    <styles.Content>{item.value}</styles.Content>
                  </styles.HistoryContainer>
                ))}
                <styles.DeleteButton>delete search history</styles.DeleteButton>
              </>
            ) : (
              <>
                <styles.Top>
                  <styles.SearchType isBorder={!search.includes('#')}>
                    리뷰잉
                  </styles.SearchType>
                  <styles.SearchType isBorder={search.includes('#')}>
                    태그
                  </styles.SearchType>
                </styles.Top>
                <>
                  {filteredData.map((item, index) => (
                    <styles.HistoryContainer key={index}>
                      {item.type === 'username' &&
                      item.value.includes(search) ? (
                        <>
                          <styles.UserName src="images/UserName.png" />
                          <styles.Content>{item.value}</styles.Content>
                          <styles.PlusFriend to="" />
                        </>
                      ) : (
                        <>
                          <styles.Hashtag src="images/Hashtag.png" />
                          <styles.Content>{item.value}</styles.Content>
                          <styles.SeeReview to="">리뷰 보기</styles.SeeReview>
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
      <styles.ComponentBox>
        <styles.Union to="" />
        <styles.Plus to="" />
        <styles.Home to="" />
        <styles.Find to="" />
        <styles.Map to="" />
        <styles.User to="" />
      </styles.ComponentBox>
    </styles.Container>
  );
};

export default SearchPage;
