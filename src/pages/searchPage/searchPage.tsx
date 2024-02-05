import { useCallback, useState, useEffect } from 'react';

import SearchBarComponent from '@/components/searchPageComponent/searchBarComponent/searchBarComponent';
import SearchBarExtendComponent from '@/components/searchPageComponent/searchBarExtendComponent/searchBarExtendComponent';
import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';

import { DeleteAxiosInstance, GetAxiosInstance } from '@/api/axios.methods';
import { Hashtag, History, User } from '@/types/common.types';

import styles from './style';
import {
  GetSearchHistoriesResponse,
  SearchHashtagResponse,
  SearchUserByNicknameResponse,
} from '@/types/response.types';

// SearchType 컴포넌트에 대한 타입 정의
const SearchPage: React.FC = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [searchUsers, setSearchUsers] = useState<User[]>([]);
  const [searchHashtags, setSearchHashtags] = useState<Hashtag[]>([]);
  const [searchHistories, setSearchHistories] = useState<History[]>([]);

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

  const searchHashtag = useCallback(async () => {
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

  const getSearchHistories = useCallback(async () => {
    try {
      const response = await GetAxiosInstance<GetSearchHistoriesResponse>(
        '/v1/users/1/histories',
      );

      setSearchHistories(response.data.result);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const deleteHistory = useCallback(
    async (historyId: number) => {
      try {
        const newSearchHistories = searchHistories.filter(
          (searchHistory) => searchHistory.historyId !== historyId,
        );

        console.log(newSearchHistories);
        setSearchHistories(newSearchHistories);
        // await DeleteAxiosInstance(`/v1/history/${historyId}`);
      } catch (error) {
        console.error(error);
      }
    },
    [searchHistories],
  );

  useEffect(() => {
    searchUserByNickname();
    searchHashtag();
    getSearchHistories();
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
          searchHistories={searchHistories}
          deleteHistory={deleteHistory}
        />
      </styles.SearchBarContainer>
    </styles.Container>
  );
};

export default SearchPage;
