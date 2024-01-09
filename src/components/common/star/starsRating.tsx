import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
  count: number;
  size: number;
}

const StarRating: React.FC<StarRatingProps> = ({ count, size }) => {
  // count만큼의 노란색 별을 가진 배열 생성
  const yellowStars = Array.from({ length: count }, (_, index) => (
    <FaStar key={index} size={size} color="#FEBD1A" />
  ));

  // 나머지는 기본 색상의 별을 가진 배열 생성
  const remainingStars = Array.from({ length: 5 - count }, (_, index) => (
    <FaStar key={count + index} size={size} />
  ));

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {yellowStars}
      {remainingStars}
    </div>
  );
};

export default StarRating;
