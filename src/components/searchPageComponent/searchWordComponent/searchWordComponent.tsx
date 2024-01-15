import React from 'react';

import HashtagComponent from '@components/searchPageComponent/hashtagComponent/hashtagComponent';
import UserNameComponent from '@components/searchPageComponent/userNameComponent/userNameComponent';

import styles from './style';

interface searchwordProps {
  index: number;
  searchInputValue: string;
  item: {
    type: string;
    value: string;
  };
  onScroll: React.UIEventHandler;
  onWheel: React.WheelEventHandler;
}
const SearchWordComponent: React.FC<searchwordProps> = (props) => {
  /*const filterUsers = useCallback((data)=>{
    const filterUserList = data.filter((user) => (user.value.includes(searchInputValue)));

    
  })*/
  return (
    <styles.HistoryContainer key={props.index}>
      {props.item.type === 'username' && //유저 이름인 경우
      props.item.value.includes(props.searchInputValue) ? (
        <UserNameComponent username={props.item.value} />
      ) : (
        <HashtagComponent hashtag={props.item.value} />
      )}
    </styles.HistoryContainer>
  );
};

export default SearchWordComponent;
