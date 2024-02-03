import styles from './style';
import Storage from '/images/myProfilePage/StorageImage.png';
import PostItem from '/images/myProfilePage/PostItemImage.png';

interface ButtonClickedProps {
  postItemIsClicked: boolean;
  setPostClicked: React.Dispatch<React.SetStateAction<boolean>>;
  storageIsClicked: boolean;
  setStorageClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setIsScrab: React.Dispatch<React.SetStateAction<string>>;
}

const ButtonComponent: React.FC<ButtonClickedProps> = ({
  postItemIsClicked,
  setPostClicked,
  storageIsClicked,
  setStorageClicked,
  setIsScrab,
}) => {
  return (
    <styles.TopButtonContainer>
      {/* 게시물 버튼 클릭시에 위에 표시될 보라색 도형 */}
      {postItemIsClicked && <styles.LeftPurpleRectangle />}
      {/* 저장소 버튼 클릭시에 위에 표시될 보라색 도형 */}
      {storageIsClicked && <styles.RightPurpleRectangle />}
      <styles.LinkContainer
        to=""
        onClick={() => {
          setPostClicked(true);
          setStorageClicked(false);
          setIsScrab('');
        }}
      >
        <styles.Buttonimg src={PostItem} />
        <styles.ButtonName>게시물</styles.ButtonName>
      </styles.LinkContainer>
      <styles.LinkContainer
        to=""
        onClick={() => {
          setPostClicked(false);
          setStorageClicked(true);
          setIsScrab('/scrabs');
        }}
      >
        <styles.Buttonimg src={Storage} />
        <styles.ButtonName>저장소</styles.ButtonName>
      </styles.LinkContainer>
    </styles.TopButtonContainer>
  );
};

export default ButtonComponent;
