import React from 'react';

import HashtagComponent from '@components/searchPageComponent/hashtagComponent/hashtagComponent';
import UserNameComponent from '@components/searchPageComponent/userNameComponent/userNameComponent';

interface searchwordProps {
  index: number;
  searchInputValue: string;
  item: {
    type: string;
    value: string;
    image: string;
  };
}
const SearchWordComponent: React.FC<searchwordProps> = ({
  index,
  searchInputValue,
  item,
}) => {
  return (
    <div key={index}>
      {item.type === 'username' && //유저 이름인 경우
      item.value.includes(searchInputValue) ? (
        <UserNameComponent value={item.value} image={item.image} />
      ) : (
        <HashtagComponent value={item.value} image={item.image} />
      )}
    </div>
  );
};

export default SearchWordComponent;
