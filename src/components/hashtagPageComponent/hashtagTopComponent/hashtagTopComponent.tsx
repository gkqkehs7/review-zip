import styles from './style';

interface HashtagTopProps {
  hashtag: string;
  tagNum: number;
}
const HashtagTopComponent: React.FC<HashtagTopProps> = ({
  hashtag,
  tagNum,
}) => {
  return (
    <styles.HashtagTopContainer>
      <div>
        <styles.TagName>{hashtag}</styles.TagName>
      </div>
      <div>
        <styles.TagCount>태그 {tagNum}</styles.TagCount>
      </div>
    </styles.HashtagTopContainer>
  );
};

export default HashtagTopComponent;
