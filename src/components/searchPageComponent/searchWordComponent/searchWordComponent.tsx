import React from 'react';
import styles from '@components/searchPageComponent/searchWordComponent/style';
import HashtagComponent from '@components/searchPageComponent/hashtagComponent/hashtagComponent';
import UserNameComponent from '@components/searchPageComponent/userNameComponent/userNameComponent';
interface searchwordProps {
  index: number;
  searchInputValue: string;
  item: {
    type: string;
    value: string;
  };
}
const SearchWordComponent: React.FC<searchwordProps> = (props) => {
  return (
    <styles.HistoryContainer key={props.index}>
      {props.item.type === 'username' && //유저 이름인 경우
      props.item.value.includes(props.searchInputValue) ? (
        <UserNameComponent usernameProps={props.item.value} />
      ) : (
        <HashtagComponent hashtagProps={props.item.value} />
      )}
    </styles.HistoryContainer>
  );
};

export default SearchWordComponent;
