import React from 'react';
import styles from './style';

interface ReviewingStopModalProps {
  reviewingUser: string;
  reviewingUserName: string;
  setReviewingStop: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReviewingStopModalComponent: React.FC<ReviewingStopModalProps> = ({
  reviewingUser,
  reviewingUserName,
  setReviewingStop,
}) => {
  return (
    <styles.Container>
      <styles.ReviewingStopModal>
        <styles.ReviewingProfileContainer>
          <styles.ReviewingUserProfile src={reviewingUser} />
          <p>@{reviewingUserName}님의 리뷰잉을 취소하시겠습니까?</p>
        </styles.ReviewingProfileContainer>
        <styles.BorderTopContainer>
          <p style={{ color: 'red' }}>리뷰잉 취소</p>
        </styles.BorderTopContainer>
        <styles.BorderTopContainer
          onClick={() => {
            setReviewingStop(false);
          }}
        >
          <p>취소</p>
        </styles.BorderTopContainer>
      </styles.ReviewingStopModal>
    </styles.Container>
  );
};

export default ReviewingStopModalComponent;
