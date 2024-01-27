import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';

import styles from './style';
import PlusFriend from '/images/searchPage/PlusFriendImage.png';
const users = [
  {
    id: 1,
    type: 'username',
    value: 'username',
    searchWordImage: 'images/searchPage/UserNameImage.png',
  },
  {
    id: 2,
    type: 'username',
    value: 'username',
    searchWordImage: 'images/searchPage/UserNameImage.png',
  },
  {
    id: 3,
    type: 'username',
    value: 'username',
    searchWordImage: 'images/searchPage/UserNameImage.png',
  },
  {
    id: 4,
    type: 'username',
    value: 'username',
    searchWordImage: 'images/searchPage/UserNameImage.png',
  },
  {
    id: 5,
    type: 'username',
    value: 'username',
    searchWordImage: 'images/searchPage/UserNameImage.png',
  },
];

const UserListComponent: React.FC = () => {
  const device = checkDevice();

  return (
    <div>
      {users.map((user) => (
        <styles.UserContainer>
          <styles.UserData>
            <styles.UserImage
              src={user.searchWordImage}
              style={responsiveWidthHeight(
                device,
                { width: 56, height: 56 },
                { width: 56, height: 56 },
                { width: 56, height: 56 },
                { width: 48, height: 48 },
                { width: 48, height: 48 },
                { width: 48, height: 48 },
              )}
            />

            <styles.UserName>{user.value}</styles.UserName>
          </styles.UserData>

          <styles.PlusFriendLink to="">
            <styles.PlusFriend src={PlusFriend} />
          </styles.PlusFriendLink>
        </styles.UserContainer>
      ))}
    </div>
  );
};

export default UserListComponent;
