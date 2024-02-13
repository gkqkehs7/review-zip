import { useCallback, useState, useEffect } from 'react';

import SearchBarComponent from '@/components/searchPageComponent/searchBarComponent/searchBarComponent';
import SearchBarExtendComponent from '@/components/searchPageComponent/searchBarExtendComponent/searchBarExtendComponent';
import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';

import {
  DeleteAxiosInstance,
  GetAxiosInstance,
  PostAxiosInstance,
} from '@/api/axios.methods';
import { Hashtag, History, User } from '@/types/common.types';

import styles from './style';
import {
  GetSearchHistoriesResponse,
  SearchHashtagResponse,
  SearchUserByNicknameResponse,
} from '@/types/response.types';
import { useNavigate } from 'react-router-dom';

// SearchType 컴포넌트에 대한 타입 정의
const SearchPage: React.FC = () => {
  const navigate = useNavigate();

  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [searchUsers, setSearchUsers] = useState<User[]>([]);
  const [searchHashtags, setSearchHashtags] = useState<Hashtag[]>([]);
  const [searchHistories, setSearchHistories] = useState<History[]>([]);

  // user 닉네임으로 검색
  const searchUserByNickname = useCallback(async () => {
    try {
      if (searchInputValue.trim().length > 0) {
        const response = await GetAxiosInstance<SearchUserByNicknameResponse>(
          `/v1/users/search/nickname?nickname=${searchInputValue}`,
        );

        setSearchUsers(response.data.result);
      }
    } catch (error) {
      console.error(error);
    }
  }, [searchInputValue]);

  // hastag 검색
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

  // 검색 기록 가져오기
  const getSearchHistories = useCallback(async () => {
    try {
      const response = await GetAxiosInstance<GetSearchHistoriesResponse>(
        '/v1/users/me/histories',
      );

      setSearchHistories(response.data.result);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // 검색 기록 삭제
  const deleteHistory = useCallback(
    async (historyId: number) => {
      try {
        const newSearchHistories = searchHistories.filter(
          (searchHistory) => searchHistory.historyId !== historyId,
        );

        setSearchHistories(newSearchHistories);

        await DeleteAxiosInstance(`/v1/history/${historyId}`);
      } catch (error) {
        console.error(error);
      }
    },
    [searchHistories],
  );

  // 유저 검색 저장
  const saveSearchUserHistory = useCallback(
    async (user: User) => {
      try {
        await PostAxiosInstance(`/v1/history/users/${user.userId}`);

        return navigate(`/profilepage/${user.userId}`);
      } catch (error) {
        console.error(error);
      }
    },
    [searchUsers],
  );

  // 태그 검색 저장
  const saveSearchHashtagHistory = useCallback(
    async (hashtag: string) => {
      try {
        await PostAxiosInstance(`/v1/history/hashtags?hashtag=${hashtag}`);
      } catch (error) {
        console.error(error);
      }
    },
    [searchHashtags],
  );

  // 유저 팔로우
  const followUser = useCallback(
    async (user: User) => {
      try {
        const followUserIndex = searchUsers.findIndex(
          (searchUser) => searchUser.userId === user.userId,
        );

        const newSearchUsers = [...searchUsers];

        newSearchUsers[followUserIndex].following = true;

        setSearchUsers(newSearchUsers);

        await PostAxiosInstance(`/v1/follows/users/${user.userId}`);
        await saveSearchUserHistory(user);
      } catch (error) {
        console.error(error);
      }
    },
    [searchUsers],
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
          followUser={followUser}
          saveSearchUserHistory={saveSearchUserHistory}
          saveSearchHashtagHistory={saveSearchHashtagHistory}
        />
      </styles.SearchBarContainer>
    </styles.Container>
  );
};

export default SearchPage;
