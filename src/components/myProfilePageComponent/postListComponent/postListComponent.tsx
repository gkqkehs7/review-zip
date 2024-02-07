import ReviewPictureComponent from '../reviewPicturesComponent/reviewPictureComponent';
import { Post } from '@/types/common.types';

interface PostProps {
  setPostIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  post: Post[];
}
const PostListComponent: React.FC<PostProps> = ({ setPostIsClicked, post }) => {
  return (
    <ReviewPictureComponent setPostIsClicked={setPostIsClicked} posts={post} />
  );
};

export default PostListComponent;
