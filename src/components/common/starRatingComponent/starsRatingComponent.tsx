import { useState, useEffect } from 'react';

import BlackStarImage from '/images/star/BlackStar.png';
import YellowStarImage from '/images/star/YellowStar.png';

interface StarRatingComponentProps {
  count: number;
  width: number;
  all: boolean;
  click?: boolean;
  setStarCount?: React.Dispatch<React.SetStateAction<number>>;
}

const StarRatingComponent: React.FC<StarRatingComponentProps> = ({
  count,
  width,
  all,
  click,
  setStarCount,
}) => {
  const [changeStarCount, setChangeStarCount] = useState<number>(count);

  // count만큼의 노란색 별을 가진 배열 생성
  const yellowStars = Array.from({ length: changeStarCount }, (_, index) => (
    <img
      key={index}
      src={YellowStarImage}
      style={{ width: `${width}px`, cursor: 'pointer' }}
      onClick={(e) => {
        click && setChangeStarCount(index + 1);
        click && setStarCount!(yellowStars.length + 1);
      }}
    />
  ));

  // 나머지는 기본 색상의 별을 가진 배열 생성
  const remainingStars = Array.from(
    { length: 5 - changeStarCount },
    (_, index) => (
      <img
        key={index}
        src={BlackStarImage}
        style={{ width: `${width}px`, cursor: 'pointer' }}
        onClick={(e) => {
          click && setChangeStarCount(changeStarCount + index + 1);
          click && setStarCount!(yellowStars.length + 1);
        }}
      />
    ),
  );

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {yellowStars}
      {all && remainingStars}
    </div>
  );
};

export default StarRatingComponent;
