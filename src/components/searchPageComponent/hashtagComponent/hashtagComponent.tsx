import styles from '@components/searchPageComponent/hashtagComponent/style';
interface HashtagProps {
  hashtagProps: string;
}
const HashtagComponent: React.FC<HashtagProps> = (props) => {
  return (
    //해시태그인 경우
    <>
      <styles.HashtagImage src="images/searchPage/HashtagImage.png" />
      <styles.Content>{props.hashtagProps}</styles.Content>
      <styles.SeeReview to="">리뷰 보기</styles.SeeReview>
    </>
  );
};

export default HashtagComponent;
