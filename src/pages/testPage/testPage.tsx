// TestPage.js
import React, { useState, useCallback, useRef } from 'react';
import { MentionsInput, Mention, SuggestionDataItem } from 'react-mentions';

import styles from './styles';

const TestPage = () => {
  const data = [
    {
      id: 1,
      hashtag: '안녕',
    },
    {
      id: 2,
      name: '안녕하세요',
    },
    {
      id: 3,
      name: '안녕나야',
    },
  ];

  const renderUserSuggestion: (
    suggestion: SuggestionDataItem,
    search: string,
    highlightedDisplay: React.ReactNode,
    index: number,
    focused: boolean,
  ) => React.ReactNode = useCallback(
    (member, search, highlightedDisplay, index, focus) => {
      if (!data) {
        return null;
      }
      return (
        <styles.EachMention focus={focus}>
          <span>{highlightedDisplay}</span>
        </styles.EachMention>
      );
    },
    [data],
  );

  return <styles.Container></styles.Container>;
};

export default TestPage;
