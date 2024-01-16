import styles from './style';
interface UserNameComponentProps {
  value: string;
  image: string;
}
const UserNameComponent: React.FC<UserNameComponentProps> = ({
  value,
  image,
}) => {
  return (
    <styles.HistoryContainer>
      <div>
        <styles.UserNameImage src={image} />
        <styles.Content>{value}</styles.Content>
      </div>
      <styles.PluseFriendLink to="">
        <styles.PlusFriend src="images/searchPage/PlusFriendImage.png" />
      </styles.PluseFriendLink>
    </styles.HistoryContainer>
  );
};

export default UserNameComponent;
