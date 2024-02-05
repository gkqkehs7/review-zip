import { useNavigate } from 'react-router-dom';

import { Hashtag } from '@/types/common.types';

import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';

import styles from './style';

interface HashtaglistComponentProps {
  hashtags: Hashtag[];
  saveSearchHashtagHistory: (hashtag: string) => Promise<void>;
}

const HashtagListComponent: React.FC<HashtaglistComponentProps> = ({
  hashtags,
  saveSearchHashtagHistory,
}) => {
  const navigate = useNavigate();
  const device = checkDevice();

  // 검색 기록 저장하면서 hashtag 페이지로 이동
  const toHashtag = async (hashtag: Hashtag) => {
    try {
      navigate(`/hashtagPage/${hashtag.id}`);
      await saveSearchHashtagHistory(hashtag.name);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={responsiveWidthHeight(
        device,
        { width: 2000, height: 400 },
        { width: 1700, height: 400 },
        { width: 1400, height: 400 },
        { width: 1080, height: 400 },
        { width: 500, height: 400 },
        { width: 500, height: 400 },
      )}
    >
      {hashtags.map((hashtag) => (
        <styles.HashtagContainer
          key={hashtag.id}
          onClick={() => toHashtag(hashtag)}
        >
          {/* 해시 태그 */}
          <styles.HashTagLink>
            <styles.Content>#{hashtag.name}</styles.Content>
          </styles.HashTagLink>

          {/* 리뷰 보기 버튼 */}
          {/* <styles.SeeReviewButton to="">리뷰 보기</styles.SeeReviewButton> */}
        </styles.HashtagContainer>
      ))}
    </div>
  );
};

export default HashtagListComponent;
