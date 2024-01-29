import { useCallback, useRef, useEffect } from 'react';
import { Mention, SuggestionDataItem } from 'react-mentions';
import autosize from 'autosize';

import styles from './style';

interface InputBoxComponentProps {
  textInput: string;
  textInputChange: (e: any) => void;
  setHashTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const hashTagsData = [
  {
    id: 1,
    hashTag: '여름',
    postnum: '10k+',
  },
  {
    id: 2,
    hashTag: '여름이였다',
    postnum: '100k+',
  },
  {
    id: 2,
    hashTag: '여름인건가',
    postnum: '1000k+',
  },
];

const InputBoxComponent: React.FC<InputBoxComponentProps> = ({
  textInput,
  textInputChange,
  setHashTags,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      autosize(textareaRef.current);
    }
  }, []);

  const handleAddMention = (id: string | number, display: string) => {
    setHashTags((prevHashTags) => [...prevHashTags, display]);
  };

  const renderUserSuggestion: (
    suggestion: SuggestionDataItem,
    search: string,
    highlightedDisplay: React.ReactNode,
    index: number,
    focused: boolean,
  ) => React.ReactNode = useCallback(
    (member, search, highlightedDisplay, index, focus) => {
      if (!hashTagsData) {
        return null;
      }

      return (
        <styles.EachMention focus={focus}>
          <span>#{highlightedDisplay}</span>
        </styles.EachMention>
      );
    },
    [hashTagsData],
  );

  return (
    <styles.MentionsTextarea
      id="editor-chat"
      value={textInput}
      onChange={textInputChange}
      inputRef={textareaRef}
      forceSuggestionsAboveCursor={true}
    >
      <Mention
        appendSpaceOnAdd
        trigger="#"
        data={
          hashTagsData?.map((v) => ({ id: v.id, display: v.hashTag })) || []
        }
        renderSuggestion={renderUserSuggestion}
        onAdd={handleAddMention}
      />
    </styles.MentionsTextarea>
  );
};

export default InputBoxComponent;
