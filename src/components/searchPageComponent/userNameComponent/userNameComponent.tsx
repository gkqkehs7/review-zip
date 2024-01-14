import styles from '@components/searchPageComponent/userNameComponent/style';
interface UserNameProps {
  usernameProps: string;
}
const UserNameComponent: React.FC<UserNameProps> = (props) => {
  return (
    <>
      <styles.UserNameImage src="images/searchPage/UserNameImage.png" />
      <styles.Content>{props.usernameProps}</styles.Content>
      <styles.PlusFriend to="" />
    </>
  );
};

export default UserNameComponent;
