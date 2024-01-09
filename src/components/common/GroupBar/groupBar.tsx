import homeImage from '/images/groupBar/home.png';
import mapImage from '/images/groupBar/map.png';
import plusImage from '/images/groupBar/plus.png';
import searchImage from '/images/groupBar/search.png';
import spaceShipImage from '/images/groupBar/spaceShip.png';
import userImage from '/images/groupBar/user.png';
import styles from './style';

const GroupBarComponent: React.FC = () => {
  return (
    <styles.Container>
      <styles.IconContainer>
        <styles.Icon src={spaceShipImage} />
        <styles.Icon src={plusImage} />
        <styles.Icon src={homeImage} />
        <styles.Icon src={searchImage} />
        <styles.Icon src={mapImage} />
        <styles.Icon src={userImage} />
      </styles.IconContainer>

      <styles.MenuContainer>
        <styles.Menu>
          <styles.MenuText>게시글</styles.MenuText>
        </styles.Menu>
        <styles.Menu>
          <styles.MenuText>게시글</styles.MenuText>
        </styles.Menu>
        <styles.Menu>
          <styles.MenuText>게시글</styles.MenuText>
        </styles.Menu>
        <styles.Menu>
          <styles.MenuText>게시글</styles.MenuText>
        </styles.Menu>
        <styles.Menu>
          <styles.MenuText>게시글</styles.MenuText>
        </styles.Menu>
        <styles.Menu>
          <styles.MenuText>게시글</styles.MenuText>
        </styles.Menu>
      </styles.MenuContainer>
    </styles.Container>
  );
};

export default GroupBarComponent;
