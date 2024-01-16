import React from 'react';

import HashtagComponent from '@components/searchPageComponent/hashtagComponent/hashtagComponent';
import UserNameComponent from '@components/searchPageComponent/userNameComponent/userNameComponent';

interface SearchWordProps {
  index: number;
  searchInputValue: string;
  item: {
    type: string;
    value: string;
    searchWordImage: string;
  };
}
const SearchWordComponent: React.FC<SearchWordProps> = ({
  index,
  searchInputValue,
  item,
}) => {
  return (
    <div key={index}>
      {item.type === 'username' && //유저 이름인 경우
      item.value.includes(searchInputValue) ? (
        <UserNameComponent
          value={item.value}
          searchWordImage={item.searchWordImage}
        />
      ) : (
        <HashtagComponent
          value={item.value}
          searchWordImage={item.searchWordImage}
        />
      )}
    </div>
  );
};

export default SearchWordComponent;
