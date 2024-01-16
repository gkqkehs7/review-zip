import BlackStarImage from '/images/star/BlackStar.png';
import YellowStarImage from '/images/star/YellowStar.png';

interface StarRatingComponentProps {
  count: number;
  width: number;
  all: boolean;
}

const StarRatingComponent: React.FC<StarRatingComponentProps> = ({
  count,
  width,
  all,
}) => {
  // count만큼의 노란색 별을 가진 배열 생성
  const yellowStars = Array.from({ length: count }, (_, index) => (
    <img key={index} src={YellowStarImage} style={{ width: `${width}px` }} />
  ));

  // 나머지는 기본 색상의 별을 가진 배열 생성
  const remainingStars = Array.from({ length: 5 - count }, (_, index) => (
    <img key={index} src={BlackStarImage} style={{ width: `${width}px` }} />
  ));

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {yellowStars}
      {all && remainingStars}
    </div>
  );
};

export default StarRatingComponent;
