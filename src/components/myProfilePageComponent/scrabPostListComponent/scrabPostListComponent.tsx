import ReviewPictureComponent from '../reviewPicturesComponent/reviewPictureComponent';
import { Post } from '@/types/common.types';

interface scrabPostProps {
  setClickedPost: React.Dispatch<React.SetStateAction<Post | undefined>>;
  scrabPost: Post[]; //나중에 Post[]가 들어감
  isFriend: boolean;
}
const ScrabPostListComponent: React.FC<scrabPostProps> = ({
  setClickedPost,
  scrabPost,
  isFriend,
}) => {
  return (
    <ReviewPictureComponent
      setClickedPost={setClickedPost}
      posts={scrabPost}
      scrab={true}
      isFriend={isFriend}
    />
  );
};

export default ScrabPostListComponent;
