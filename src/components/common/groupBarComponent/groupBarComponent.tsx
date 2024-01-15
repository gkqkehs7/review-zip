import { useState, useRef, useEffect } from 'react';

import homeImage from '/images/groupBar/Home.png';
import mapImage from '/images/groupBar/Map.png';
import plusImage from '/images/groupBar/Plus.png';
import searchImage from '/images/groupBar/Search.png';
import spaceShipImage from '/images/groupBar/SpaceShip.png';
import userImage from '/images/groupBar/User.png';
import styles from './style';

const GroupBarComponent: React.FC = () => {
  const [isBVisible, setBVisible] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 50,
    y: 50,
  });
  const initialPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // 마우스로 드래깅해서 groupBar 움직이게 하기
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    initialPosition.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - initialPosition.current.x;
      const newY = e.clientY - initialPosition.current.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <styles.Container
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
    >
      <styles.IconContainer
        onMouseDown={handleMouseDown}
        onMouseEnter={() => setBVisible(true)}
        onMouseLeave={() => setBVisible(false)}
      >
        <styles.Icon
          src={spaceShipImage}
          onDragStart={(e) => e.preventDefault()}
        />
        <styles.Icon src={plusImage} onDragStart={(e) => e.preventDefault()} />
        <styles.Icon src={homeImage} onDragStart={(e) => e.preventDefault()} />
        <styles.Icon
          src={searchImage}
          onDragStart={(e) => e.preventDefault()}
        />
        <styles.Icon src={mapImage} onDragStart={(e) => e.preventDefault()} />
        <styles.Icon src={userImage} onDragStart={(e) => e.preventDefault()} />
      </styles.IconContainer>

      <styles.MenuContainer
        isVisible={isBVisible}
        onMouseEnter={() => setBVisible(true)}
        onMouseLeave={() => setBVisible(false)}
      >
        <styles.Menu>
          <styles.MenuText isVisible={isBVisible}>→</styles.MenuText>
        </styles.Menu>
        <styles.Menu>
          <styles.MenuText isVisible={isBVisible}>업로드</styles.MenuText>
        </styles.Menu>
        <styles.Menu>
          <styles.MenuText isVisible={isBVisible}>홈</styles.MenuText>
        </styles.Menu>
        <styles.Menu>
          <styles.MenuText isVisible={isBVisible}>검색</styles.MenuText>
        </styles.Menu>
        <styles.Menu>
          <styles.MenuText isVisible={isBVisible}>지도</styles.MenuText>
        </styles.Menu>
        <styles.Menu>
          <styles.MenuText isVisible={isBVisible}>프로필</styles.MenuText>
        </styles.Menu>
      </styles.MenuContainer>
    </styles.Container>
  );
};

export default GroupBarComponent;
