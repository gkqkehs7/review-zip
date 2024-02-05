import { Hashtag } from '@/types/common.types';

import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';

import styles from './style';

interface HashtaglistComponentProps {
  hashtags: Hashtag[];
}

const HashtagListComponent: React.FC<HashtaglistComponentProps> = ({
  hashtags,
}) => {
  const device = checkDevice();

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
        <styles.HashtagContainer key={hashtag.id}>
          {/* 해시 태그 */}
          <styles.HashTagLink to="/hashtagPage">
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
