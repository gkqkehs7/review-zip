import styles from './style';
interface UserNameComponentProps {
  username: string;
}
const UserNameComponent: React.FC<UserNameComponentProps> = (props) => {
  return (
    <>
      <styles.UserNameImage src="images/searchPage/UserNameImage.png" />
      <styles.Content>{props.username}</styles.Content>
      <styles.PlusFriend to="" />
    </>
  );
};

export default UserNameComponent;
