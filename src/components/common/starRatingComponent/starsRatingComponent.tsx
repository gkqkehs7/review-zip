import { useState, useEffect } from 'react';

import { checkDevice } from '@/utils/checkDeviceSize';
import { responsiveWidthHeight } from '@/utils/reponsiveSize';

import BlackStarImage from '/images/star/BlackStar.png';
import YellowStarImage from '/images/star/YellowStar.png';

interface StarRatingComponentProps {
  count: number;
  all: boolean;
  click?: boolean;
  setStarCount?: React.Dispatch<React.SetStateAction<number>>;
}

const StarRatingComponent: React.FC<StarRatingComponentProps> = ({
  count,
  all,
  click,
  setStarCount,
}) => {
  const deviceSize = checkDevice();

  const [changeStarCount, setChangeStarCount] = useState<number>(count);

  // count만큼의 노란색 별을 가진 배열 생성
  const yellowStars = Array.from({ length: changeStarCount }, (_, index) => (
    <img
      key={index}
      src={YellowStarImage}
      style={responsiveWidthHeight(
        deviceSize,
        { width: 28, height: 28 },
        { width: 28, height: 28 },
        { width: 28, height: 28 },
        { width: 28, height: 28 },
        { width: 20, height: 20 },
        { width: 20, height: 20 },
      )}
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
        style={responsiveWidthHeight(
          deviceSize,
          { width: 28, height: 28 },
          { width: 28, height: 28 },
          { width: 28, height: 28 },
          { width: 28, height: 28 },
          { width: 20, height: 20 },
          { width: 20, height: 20 },
        )}
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
