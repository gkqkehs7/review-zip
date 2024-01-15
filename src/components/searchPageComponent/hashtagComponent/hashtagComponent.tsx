import styles from './style';
interface HashtagComponentProps {
  hashtag: string;
}
const HashtagComponent: React.FC<HashtagComponentProps> = (props) => {
  return (
    //해시태그인 경우
    <>
      <styles.HashtagImage src="images/searchPage/HashtagImage.png" />
      <styles.Content>{props.hashtag}</styles.Content>
      <styles.SeeReview to="">리뷰 보기</styles.SeeReview>
    </>
  );
};

export default HashtagComponent;
