import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';
import { Link } from 'react-router-dom';
import styles from './style';

interface HashtagComponentProps {
  value: string;
  searchWordImage: string;
}

const HashtagComponent: React.FC<HashtagComponentProps> = ({
  value,
  searchWordImage,
}) => {
  const device = checkDevice();

  return (
    //해시태그인 경우
    <styles.HistoryContainer>
      <styles.HashtagContainer>
        <Link to="/hashtagPage">
          <styles.HashtagImage
            src={searchWordImage}
            style={responsiveWidthHeight(
              device,
              { width: 56, height: 53 },
              { width: 56, height: 53 },
              { width: 56, height: 53 },
              { width: 36, height: 33 },
              { width: 16, height: 10 },
              { width: 16, height: 10 },
            )}
          />
          <styles.Content>{value}</styles.Content>
        </Link>
      </styles.HashtagContainer>
      <styles.SeeReviewContainer>
        <styles.SeeReview to="">리뷰 보기</styles.SeeReview>
      </styles.SeeReviewContainer>
    </styles.HistoryContainer>
  );
};

export default HashtagComponent;
