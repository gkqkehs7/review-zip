import { Link } from 'react-router-dom';

import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';

import styles from './style';
import PlusFriend from '/images/searchPage/PlusFriendImage.png';

interface UserNameComponentProps {
  value: string;
  searchWordImage: string;
}

const UserNameComponent: React.FC<UserNameComponentProps> = ({
  value,
  searchWordImage,
}) => {
  const device = checkDevice();

  return (
    <styles.HistoryContainer>
      <styles.USerContainer>
        <styles.UserNameImage
          src={searchWordImage}
          style={responsiveWidthHeight(
            device,
            { width: 56, height: 53 },
            { width: 56, height: 53 },
            { width: 56, height: 53 },
            { width: 36, height: 33 },
            { width: 16, height: 10 },
            { width: 16, height: 10 },
          )}
        />
        <styles.Content>{value}</styles.Content>
      </styles.USerContainer>
      <Link to="">
        <styles.PlusFriend src={PlusFriend} />
      </Link>
    </styles.HistoryContainer>
  );
};

export default UserNameComponent;
