import styles from './style';
interface HashtagComponentProps {
  value: string;
  searchWordImage: string;
}
const HashtagComponent: React.FC<HashtagComponentProps> = ({
  value,
  searchWordImage,
}) => {
  return (
    //해시태그인 경우
    <styles.HistoryContainer>
      <styles.HashtagContainer>
        <styles.HashtagImage src={searchWordImage} />
        <styles.Content>{value}</styles.Content>
      </styles.HashtagContainer>
      <styles.SeeReviewContainer>
        <styles.SeeReview to="">리뷰 보기</styles.SeeReview>
      </styles.SeeReviewContainer>
    </styles.HistoryContainer>
  );
};

export default HashtagComponent;
