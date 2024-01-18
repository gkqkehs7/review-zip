import { Link } from 'react-router-dom';
import styles from './style';
import PlusFriend from 'images/searchPage/PlusFriendImage.png';

interface UserNameComponentProps {
  value: string;
  searchWordImage: string;
}
const UserNameComponent: React.FC<UserNameComponentProps> = ({
  value,
  searchWordImage,
}) => {
  return (
    <styles.HistoryContainer>
      <styles.USerContainer>
        <styles.UserNameImage src={searchWordImage} />
        <styles.Content>{value}</styles.Content>
      </styles.USerContainer>
      <Link to="">
        <styles.PlusFriend src="images/searchPage/PlusFriendImage.png" />
      </Link>
    </styles.HistoryContainer>
  );
};

export default UserNameComponent;
