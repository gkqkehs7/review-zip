import { faker } from '@faker-js/faker';

import styles from './style';
import SpaceShipImage from '/images/post/SpaceShip.png';
import StarRatingComponent from '@/components/common/starRatingComponent/starsRatingComponent';
import InputBoxComponent from '../inputBoxComponent/inputBoxComponent';
import { useCallback } from 'react';

interface PostRightComponentProps {
  split: boolean;
  sendPost: () => void;
  textInput: string;
  setTextInput: React.Dispatch<React.SetStateAction<string>>;
  hashTags: string[];
  setHashTags: React.Dispatch<React.SetStateAction<string[]>>;
  starCount: number;
  setStarCount: React.Dispatch<React.SetStateAction<number>>;
}

const UploadPostRightComponent: React.FC<PostRightComponentProps> = ({
  split,
  sendPost,
  textInput,
  setTextInput,
  hashTags,
  setHashTags,
  setStarCount,
}) => {
  // textInput 수정 함수
  const textInputChange = useCallback(
    (e: any) => {
      setTextInput(e.target.value);
    },
    [textInput],
  );

  return (
    <styles.Container splitpost={split}>
      {/* 유저 정보 */}
      <styles.TopContainer>
        <styles.UserContainer>
          <styles.UserImage src={faker.image.avatar()} />
          <styles.UserName>{'미누'}</styles.UserName>
        </styles.UserContainer>

        <styles.SendButton onClick={sendPost}>보내기</styles.SendButton>
      </styles.TopContainer>

      {/* 윗부분 선 */}
      <styles.Line />

      {/* mention input textarea */}
      <InputBoxComponent
        textInput={textInput}
        textInputChange={textInputChange}
        setHashTags={setHashTags}
      />

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
