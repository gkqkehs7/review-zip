import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';

import styles from './style';
import PlusFriend from '/images/searchPage/PlusFriendImage.png';
import { User } from '@/types/common.types';

interface UserListComponentProps {
  users: User[];
}

const UserListComponent: React.FC<UserListComponentProps> = ({ users }) => {
  const device = checkDevice();

  return (
    <styles.Container
      style={responsiveWidthHeight(
        device,
        { width: 2000, height: 400 },
        { width: 1700, height: 400 },
        { width: 1400, height: 400 },
        { width: 1080, height: 400 },
        { width: 500, height: 400 },
        { width: 500, height: 400 },
      )}
    >
      {users.map((user) => (
        <styles.UserContainer>
          <styles.UserData>
            <styles.UserImage
              src={user.profileUrl}
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

            <styles.UserName>{user.nickname}</styles.UserName>
          </styles.UserData>

          <styles.PlusFriendLink to="">
            <styles.PlusFriend src={PlusFriend} />
          </styles.PlusFriendLink>
        </styles.UserContainer>
      ))}
    </styles.Container>
  );
};

export default UserListComponent;
