import styles from './style';

const hashtags = [
  {
    id: 1,
    hashtag: 'hashtag1',
  },
  {
    id: 2,
    hashtag: 'hashtag2',
  },
  {
    id: 3,
    hashtag: 'hashtag3',
  },
  {
    id: 4,
    hashtag: 'hashtag4',
  },
  {
    id: 5,
    hashtag: 'hashtag5',
  },
];

const HashtagListComponent: React.FC = () => {
  return (
    <div>
      {hashtags.map((hashtag) => (
        <styles.HashtagContainer>
          {/* 해시 태그 */}
          <styles.HashTagLink to="/hashtagPage">
            <styles.Content>#{hashtag.hashtag}</styles.Content>
          </styles.HashTagLink>

          {/* 리뷰 보기 버튼 */}
          <styles.SeeReviewButton to="">리뷰 보기</styles.SeeReviewButton>
        </styles.HashtagContainer>
      ))}
    </div>
  );
};

export default HashtagListComponent;
