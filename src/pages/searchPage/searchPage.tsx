import { useCallback, useState, useEffect } from 'react';

import SearchBarComponent from '@/components/searchPageComponent/searchBarComponent/searchBarComponent';
import SearchBarExtendComponent from '@/components/searchPageComponent/searchBarExtendComponent/searchBarExtendComponent';
import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';

import { GetAxiosInstance } from '@/api/axios.methods';
import { Hashtag, User } from '@/types/common.types';

import styles from './style';
import {
  SearchHashtagResponse,
  SearchUserByNicknameResponse,
} from '@/types/response.types';

// SearchType 컴포넌트에 대한 타입 정의
const SearchPage: React.FC = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [searchUsers, setSearchUsers] = useState<User[]>([]);
  const [searchHashtags, setSearchHashtags] = useState<Hashtag[]>([]);

  const searchUserByNickname = useCallback(async () => {
    try {
      if (searchInputValue.trim().length > 0) {
        const response = await GetAxiosInstance<SearchUserByNicknameResponse>(
          `/v1/users/search/nickname?nickname=${searchInputValue}`,
        );

        console.log(response.data.result);
        setSearchUsers(response.data.result);
      }
    } catch (error) {
      console.error(error);
    }
  }, [searchInputValue]);

  const searchHashtage = useCallback(async () => {
    try {
      const searchHashtag = searchInputValue.slice(1);

      if (searchHashtag.trim().length > 0) {
        const response = await GetAxiosInstance<SearchHashtagResponse>(
          `/v1/hashtags/search?hashtag=${searchHashtag}`,
        );

        setSearchHashtags(response.data.result);
      }
    } catch (error) {
      console.error(error);
    }
  }, [searchInputValue]);

  useEffect(() => {
    searchUserByNickname();
    searchHashtage();
  }, [searchInputValue]);

  return (
    <styles.Container>
      <GroupBarComponent direction="col" color="white" />
      {/* 돋보기와 기본 검색창을 감싸는 컨테이너 */}
      <styles.SearchBarContainer>
        {/* 검색 component */}
        <SearchBarComponent
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
        />

        <SearchBarExtendComponent
          searchInputValue={searchInputValue}
          searchUsers={searchUsers}
          searchHashtags={searchHashtags}
        />
      </styles.SearchBarContainer>
    </styles.Container>
  );
};

export default SearchPage;
