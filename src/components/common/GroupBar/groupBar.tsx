import homeImage from '/images/groupBar/home.png';
import mapImage from '/images/groupBar/map.png';
import plusImage from '/images/groupBar/plus.png';
import searchImage from '/images/groupBar/search.png';
import spaceShipImage from '/images/groupBar/spaceShip.png';
import userImage from '/images/groupBar/user.png';
import styles from './style';

import { useState } from 'react';

const GroupBarComponent: React.FC = () => {
  const [isBVisible, setBVisible] = useState(false);

  return (
    <styles.Container>
      <styles.IconContainer
        onMouseEnter={() => setBVisible(true)}
        onMouseLeave={() => setBVisible(false)}
      >
        <styles.Icon src={spaceShipImage} />
        <styles.Icon src={plusImage} />
        <styles.Icon src={homeImage} />
        <styles.Icon src={searchImage} />
        <styles.Icon src={mapImage} />
        <styles.Icon src={userImage} />
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
