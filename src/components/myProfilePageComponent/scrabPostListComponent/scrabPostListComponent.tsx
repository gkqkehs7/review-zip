import ReviewPictureComponent from '../reviewPicturesComponent/reviewPictureComponent';
import { Post } from '@/types/common.types';

interface scrabPostProps {
  setPostIsClicked: React.Dispatch<React.SetStateAction<number | undefined>>;
  scrabPost: Post[]; //나중에 Post[]가 들어감
}
const ScrabPostListComponent: React.FC<scrabPostProps> = ({
  setPostIsClicked,
  scrabPost,
}) => {
  return (
    <ReviewPictureComponent
      setPostIsClicked={setPostIsClicked}
      posts={scrabPost}
    />
  );
};

export default ScrabPostListComponent;
