import { User } from '@/types/common.types';

import styles from './style';
import SpaceShipImage from '/images/post/SpaceShip.png';
import StarRatingComponent from '@/components/common/starRatingComponent/starsRatingComponent';
import InputBoxComponent from '../inputBoxComponent/inputBoxComponent';

interface PostRightComponentProps {
  userInfo: User;
  split: boolean;
  sendPost: () => void;
  textInput: string;
  setTextInput: React.Dispatch<React.SetStateAction<string>>;
  hashTags: { id: number; tag: string }[];
  setHashTags: React.Dispatch<
    React.SetStateAction<{ id: number; tag: string }[]>
  >;
  starCount: number;
  setStarCount: React.Dispatch<React.SetStateAction<number>>;
}

const UploadPostRightComponent: React.FC<PostRightComponentProps> = ({
  userInfo,
  split,
  sendPost,
  textInput,
  setTextInput,
  hashTags,
  setHashTags,
  setStarCount,
}) => {
  const deleteHashtag = (hashtag: { id: number; tag: string }) => {
    const filteredHashtag = hashTags.filter(
      (hashTag) => hashTag.id !== hashtag.id,
    );
    setHashTags(filteredHashtag);
  };

  return (
    <styles.Container splitpost={split}>
      {/* 유저 정보 */}
      <styles.TopContainer>
        <styles.UserContainer>
          <styles.UserImage src={userInfo.profileUrl} />
          <styles.UserName>{userInfo.nickname}</styles.UserName>
        </styles.UserContainer>

        <styles.SendButton onClick={sendPost}>보내기</styles.SendButton>
      </styles.TopContainer>

      {/* 윗부분 선 */}
      <styles.Line />

      <styles.InputText
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        placeholder="게시글 내용을 입력해주세요."
      />

      {/* mention input textarea */}
      <InputBoxComponent hashTags={hashTags} setHashTags={setHashTags} />

      {/* 해시태그들 */}
      <styles.HashTagContainer>
        {hashTags.map((hashTag, index) => (
          <styles.HashTag key={hashTag.id}>
            <styles.HashTagText># {hashTag.tag}</styles.HashTagText>
            <styles.HashTagDeleteButton
              onClick={() => deleteHashtag(hashTag)}
            />
          </styles.HashTag>
        ))}
      </styles.HashTagContainer>

      {/* 아래 선 */}
      <styles.Line />

      <styles.StarRatingContainer>
        <StarRatingComponent
          count={0}
          all={true}
          click={true}
          setStarCount={setStarCount}
        />
      </styles.StarRatingContainer>

      {/* 우주선 아이콘 */}
      <styles.SpaceShipImageContainer>
        <styles.SpaceShipImage src={SpaceShipImage} />
      </styles.SpaceShipImageContainer>
    </styles.Container>
  );
};

export default UploadPostRightComponent;
