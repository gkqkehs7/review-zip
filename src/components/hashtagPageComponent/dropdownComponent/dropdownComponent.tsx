import styles from './style';
import Down from '/images/hashtagPage/DownImage.png';

const DropdownComponent = () => {
  return (
    <styles.DropdownContainer>
      <styles.SortDropdown>최신순</styles.SortDropdown>
      <styles.DownImage src={Down} />
    </styles.DropdownContainer>
  );
};

export default DropdownComponent;
