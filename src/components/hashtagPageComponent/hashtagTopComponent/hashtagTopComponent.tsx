import styles from './style';

const HashtagTopComponent = () => {
  return (
    <styles.HashtagTopContainer>
      <div>
        <styles.TagName>#강남역</styles.TagName>
      </div>
      <div>
        <styles.TagCount>태그 56</styles.TagCount>
      </div>
    </styles.HashtagTopContainer>
  );
};

export default HashtagTopComponent;
