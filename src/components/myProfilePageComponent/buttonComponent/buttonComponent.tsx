import styles from './style';
import Storage from '/images/myProfilePage/StorageImage.png';
import PostItem from '/images/myProfilePage/PostItemImage.png';

interface ButtonClickedProps {
  postItemIsClicked: boolean;
  setPostClicked: React.Dispatch<React.SetStateAction<boolean>>;
  storageIsClicked: boolean;
  setStorageClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonComponent: React.FC<ButtonClickedProps> = ({
  postItemIsClicked,
  setPostClicked,
  storageIsClicked,
  setStorageClicked,
}) => {
  return (
    <styles.TopButtonContainer>
      {postItemIsClicked && <styles.LeftPurpleRectangle />}
      {storageIsClicked && <styles.RightPurpleRectangle />}
      <styles.LinkContainer
        to=""
        onClick={() => {
          setPostClicked(true);
          setStorageClicked(false);
        }}
      >
        {/*onClick 이벤트 발생시에 그 보라색 버튼 뜨게끔 하기  */}
        <styles.Buttonimg src={PostItem} />
        <styles.ButtonName>게시물</styles.ButtonName>
      </styles.LinkContainer>
      <styles.LinkContainer
        to=""
        onClick={() => {
          setPostClicked(false);
          setStorageClicked(true);
        }}
      >
        <styles.Buttonimg src={Storage} />
        <styles.ButtonName>저장소</styles.ButtonName>
      </styles.LinkContainer>
    </styles.TopButtonContainer>
  );
};

export default ButtonComponent;
