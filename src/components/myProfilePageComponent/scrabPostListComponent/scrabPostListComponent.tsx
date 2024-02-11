import ReviewPictureComponent from '../reviewPicturesComponent/reviewPictureComponent';
import { Post } from '@/types/common.types';

interface scrabPostProps {
  setClickedPost: React.Dispatch<React.SetStateAction<Post | undefined>>;
  scrabPost: Post[]; //나중에 Post[]가 들어감
}
const ScrabPostListComponent: React.FC<scrabPostProps> = ({
  setClickedPost,
  scrabPost,
}) => {
  return (
    <ReviewPictureComponent setClickedPost={setClickedPost} posts={scrabPost} />
  );
};

export default ScrabPostListComponent;
