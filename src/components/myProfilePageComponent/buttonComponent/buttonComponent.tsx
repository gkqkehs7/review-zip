import styles from './style';
import Storage from '/images/myProfilePage/StorageImage.png';
import PostItem from '/images/myProfilePage/PostItemImage.png';

const ButtonComponent = () => {
  return (
    <styles.TopButtonContainer>
      <styles.ButtonContainer>
        <styles.Buttonimg src={PostItem} />
        <styles.ButtonName>게시물</styles.ButtonName>
      </styles.ButtonContainer>
      <styles.ButtonContainer>
        <styles.Buttonimg src={Storage} />
        <styles.ButtonName>저장소</styles.ButtonName>
      </styles.ButtonContainer>
    </styles.TopButtonContainer>
  );
};

export default ButtonComponent;
