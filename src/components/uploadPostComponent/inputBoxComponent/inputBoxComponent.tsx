import { useCallback, useRef, useEffect, useState } from 'react';
import { Mention, SuggestionDataItem } from 'react-mentions';
import autosize from 'autosize';

import styles from './style';
import { GetAxiosInstance } from '@/api/axios.methods';
import { SearchHashtagResponse } from '@/types/response.types';
import { Hashtag } from '@/types/common.types';

interface InputBoxComponentProps {
  hashTags: { id: number; tag: string }[];
  setHashTags: React.Dispatch<
    React.SetStateAction<{ id: number; tag: string }[]>
  >;
}

const InputBoxComponent: React.FC<InputBoxComponentProps> = ({
  hashTags,
  setHashTags,
}) => {
  const [hashtagInput, setHashtagInput] = useState<string>('');
  const [searchHashtags, setSearchHashtags] = useState<Hashtag[]>([]);

  const hashtagInputChange = (e: any) => {
    setHashtagInput(e.target.value);
  };

  const searchHashtag = async () => {
    try {
      const searchHashtag = hashtagInput.slice(1);

      if (searchHashtag.trim().length > 0) {
        const response = await GetAxiosInstance<SearchHashtagResponse>(
          `/v1/hashtags/search?hashtag=${searchHashtag}`,
        );

        setSearchHashtags(response.data.result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchHashtag();
  }, [hashtagInput]);

  const handleAddMention = (id: string | number, display: string) => {
    setHashtagInput('');
    setHashTags((prevHashTags) => [
      ...prevHashTags,
      { id: hashTags.length, tag: display },
    ]);
  };

  const renderUserSuggestion: (
    suggestion: SuggestionDataItem,
    search: string,
    highlightedDisplay: React.ReactNode,
    index: number,
    focused: boolean,
  ) => React.ReactNode = useCallback(
    (member, search, highlightedDisplay, index, focus) => {
      if (!searchHashtags) {
        return null;
      }

      return (
        <styles.EachMention focus={focus}>
          <span>#{highlightedDisplay}</span>
        </styles.EachMention>
      );
    },
    [searchHashtags],
  );

  return (
    <styles.MentionsTextarea
      id="editor-chat"
      value={hashtagInput}
      onChange={hashtagInputChange}
      forceSuggestionsAboveCursor={true}
    >
      <Mention
        appendSpaceOnAdd
        trigger="#"
        data={
          searchHashtags?.map((hashtag) => ({
            id: hashtag.hashtagId,
            display: `${hashtag.tagName} `,
          })) || []
        }
        renderSuggestion={renderUserSuggestion}
        onAdd={handleAddMention}
      />
    </styles.MentionsTextarea>
  );
};

export default InputBoxComponent;
