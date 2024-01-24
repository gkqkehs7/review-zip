import { useState, useRef, useEffect, useCallback } from 'react';
import autosize from 'autosize';
import { faker } from '@faker-js/faker';
import { Mention, SuggestionDataItem } from 'react-mentions';

import { IPost } from '@/types/posts.types';

import styles from './style';
import SpaceShipImage from '/images/post/SpaceShip.png';
import StarRatingComponent from '@/components/common/starRatingComponent/starsRatingComponent';

interface PostRightComponentProps {
  split: boolean;
  openLoadingModal: () => void;
}

const post: IPost = {
  id: 1,
  title: '개쩌는 제목',
  content:
    '나 김민우, 새로운 세상을 떠나 세상을 모험하는 멋진 모험가가 될것이니라',
  iLike: true,
  date: 1,
  star: 3,
  like: true,
  likeNum: 150,
  scrab: false,
  user: {
    id: 1,
    email: 'test@naver.com',
    nickname: '미누',
    name: '김민우',
    profileImage: faker.image.avatar(),
  },
  hashTags: ['제천 덕수산성', '5월 초봄'],
  postImages: [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    },
  ],
};

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

const UploadPostRightComponent: React.FC<PostRightComponentProps> = ({
  split,
  openLoadingModal,
}) => {
  const [hashTags, setHashTags] = useState<string[]>([]);
  const [starCount, setStarCount] = useState<number>(0);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      autosize(textareaRef.current);
    }
  }, []);

  const [inputValue, setInputValue] = useState<string>('');

  const inputChange = (e: any) => {
    setInputValue(e.target.value);
  };

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
    <styles.Container splitPost={split}>
      {/* 유저 정보 */}
      <styles.TopContainer>
        <styles.UserContainer>
          <styles.UserImage src={post.user.profileImage} />
          <styles.UserName>{post.user.nickname}</styles.UserName>
        </styles.UserContainer>

        <styles.SendButton onClick={openLoadingModal}>보내기</styles.SendButton>
      </styles.TopContainer>

      {/* 윗부분 선 */}
      <styles.Line />

      {/* 게시글 내용 */}
      <styles.MentionsTextarea
        id="editor-chat"
        value={inputValue}
        onChange={inputChange}
        inputRef={textareaRef}
        forceSuggestionsAboveCursor
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

      {/* 해시태그들 */}
      <styles.HashTagContainer>
        {hashTags.map((hashTag, index) => (
          <styles.HashTag key={index}>
            <styles.HashTagText># {hashTag}</styles.HashTagText>
          </styles.HashTag>
        ))}
      </styles.HashTagContainer>

      {/* 아래 선 */}
      <styles.Line />

      <styles.StarRatingContainer>
        <StarRatingComponent count={0} width={20} all={true} click={true} />
      </styles.StarRatingContainer>

      {/* 우주선 아이콘 */}
      <styles.SpaceShipImageContainer>
        <styles.SpaceShipImage src={SpaceShipImage} />
      </styles.SpaceShipImageContainer>
    </styles.Container>
  );
};

export default UploadPostRightComponent;
