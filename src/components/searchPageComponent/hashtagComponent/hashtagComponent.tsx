import styles from './style';
interface HashtagComponentProps {
  value: string;
  image: string;
}
const HashtagComponent: React.FC<HashtagComponentProps> = ({
  value,
  image,
}) => {
  return (
    //해시태그인 경우
    <styles.HistoryContainer>
      <div>
        <styles.HashtagImage src={image} />
        <styles.Content>{value}</styles.Content>
      </div>
      <styles.SeeReviewContainer>
        <styles.SeeReview to="">리뷰 보기</styles.SeeReview>
      </styles.SeeReviewContainer>
    </styles.HistoryContainer>
  );
};

export default HashtagComponent;
