import { useState, useRef, useEffect } from 'react';

import homeImage from '/images/groupBar/Home.png';
import mapImage from '/images/groupBar/Map.png';
import plusImage from '/images/groupBar/Plus.png';
import searchImage from '/images/groupBar/Search.png';
import spaceShipImage from '/images/groupBar/SpaceShip.png';
import userImage from '/images/groupBar/User.png';
import { rowStyles, colStyles } from './style';

interface GroupBarComponentProps {
  direction: 'row' | 'col';
  color: 'purple' | 'white';
}

const GroupBarComponent: React.FC<GroupBarComponentProps> = ({
  direction,
  color,
}) => {
  const [barDirection, setBarDirection] = useState<'row' | 'col'>(direction);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 50,
    y: 50,
  });
  const initialPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // 그룹바 방향 바꾸는 함수
  const changeDirection = () => {
    if (barDirection === 'row') {
      setBarDirection('col');
    } else {
      setBarDirection('row');
    }
  };

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
    <>
      {barDirection === 'row' ? (
        <rowStyles.Container
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          onMouseDown={handleMouseDown}
        >
          <rowStyles.IconContainer
            style={{
              backgroundColor:
                color === 'purple' ? '#7843b6' : 'rgba(255, 255, 255, 0.4)',
            }}
            onMouseDown={handleMouseDown}
            onMouseEnter={() => setMenuVisible(true)}
            onMouseLeave={() => setMenuVisible(false)}
          >
            <rowStyles.Icon
              src={spaceShipImage}
              onDragStart={(e) => e.preventDefault()}
            />
            <rowStyles.Icon
              src={plusImage}
              onDragStart={(e) => e.preventDefault()}
            />
            <rowStyles.Icon
              src={homeImage}
              onDragStart={(e) => e.preventDefault()}
            />
            <rowStyles.Icon
              src={searchImage}
              onDragStart={(e) => e.preventDefault()}
            />
            <rowStyles.Icon
              src={mapImage}
              onDragStart={(e) => e.preventDefault()}
            />
            <rowStyles.Icon
              src={userImage}
              onDragStart={(e) => e.preventDefault()}
            />
          </rowStyles.IconContainer>

          <rowStyles.MenuContainer
            isVisible={menuVisible}
            onMouseEnter={() => setMenuVisible(true)}
            onMouseLeave={() => setMenuVisible(false)}
          >
            <rowStyles.Menu to="" onClick={changeDirection}>
              <rowStyles.MenuText isVisible={menuVisible}>→</rowStyles.MenuText>
            </rowStyles.Menu>
            <rowStyles.Menu to="/uploadPage">
              <rowStyles.MenuText isVisible={menuVisible}>
                업로드
              </rowStyles.MenuText>
            </rowStyles.Menu>
            <rowStyles.Menu to="/mainPage">
              <rowStyles.MenuText isVisible={menuVisible}>
                홈
              </rowStyles.MenuText>
            </rowStyles.Menu>
            <rowStyles.Menu to="/searchPage">
              <rowStyles.MenuText isVisible={menuVisible}>
                검색
              </rowStyles.MenuText>
            </rowStyles.Menu>
            <rowStyles.Menu to="/mapPage">
              <rowStyles.MenuText isVisible={menuVisible}>
                지도
              </rowStyles.MenuText>
            </rowStyles.Menu>
            <rowStyles.Menu to="/profilePage/me">
              <rowStyles.MenuText isVisible={menuVisible}>
                프로필
              </rowStyles.MenuText>
            </rowStyles.Menu>
          </rowStyles.MenuContainer>
        </rowStyles.Container>
      ) : (
        <colStyles.Container
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          onMouseDown={handleMouseDown}
        >
          <colStyles.IconContainer
            style={{
              backgroundColor:
                color === 'purple' ? '#7843b6' : 'rgba(255, 255, 255, 0.4)',
            }}
            onMouseDown={handleMouseDown}
            onMouseEnter={() => setMenuVisible(true)}
            onMouseLeave={() => setMenuVisible(false)}
          >
            <colStyles.Icon
              src={spaceShipImage}
              onDragStart={(e) => e.preventDefault()}
            />
            <colStyles.Icon
              src={plusImage}
              onDragStart={(e) => e.preventDefault()}
            />
            <colStyles.Icon
              src={homeImage}
              onDragStart={(e) => e.preventDefault()}
            />
            <colStyles.Icon
              src={searchImage}
              onDragStart={(e) => e.preventDefault()}
            />
            <colStyles.Icon
              src={mapImage}
              onDragStart={(e) => e.preventDefault()}
            />
            <colStyles.Icon
              src={userImage}
              onDragStart={(e) => e.preventDefault()}
            />
          </colStyles.IconContainer>

          <colStyles.MenuContainer
            isVisible={menuVisible}
            onMouseEnter={() => setMenuVisible(true)}
            onMouseLeave={() => setMenuVisible(false)}
          >
            <colStyles.Menu to="" onClick={changeDirection}>
              <colStyles.MenuText isVisible={menuVisible}>→</colStyles.MenuText>
            </colStyles.Menu>
            <colStyles.Menu to="/uploadPage">
              <colStyles.MenuText isVisible={menuVisible}>
                업로드
              </colStyles.MenuText>
            </colStyles.Menu>
            <colStyles.Menu to="/mainPage">
              <colStyles.MenuText isVisible={menuVisible}>
                홈
              </colStyles.MenuText>
            </colStyles.Menu>
            <colStyles.Menu to="/searchPage">
              <colStyles.MenuText isVisible={menuVisible}>
                검색
              </colStyles.MenuText>
            </colStyles.Menu>
            <colStyles.Menu to="/mapPage">
              <colStyles.MenuText isVisible={menuVisible}>
                지도
              </colStyles.MenuText>
            </colStyles.Menu>
            <colStyles.Menu to="/profilePage/me">
              <colStyles.MenuText isVisible={menuVisible}>
                프로필
              </colStyles.MenuText>
            </colStyles.Menu>
          </colStyles.MenuContainer>
        </colStyles.Container>
      )}
    </>
  );
};

export default GroupBarComponent;
