import ReviewPictureComponent from '../reviewPicturesComponent/reviewPictureComponent';
import { Post } from '@/types/common.types';

interface PostProps {
  setClickedPost: React.Dispatch<React.SetStateAction<Post | undefined>>;
  post: Post[];
}
const PostListComponent: React.FC<PostProps> = ({ setClickedPost, post }) => {
  return (
    <ReviewPictureComponent setClickedPost={setClickedPost} posts={post} />
  );
};

export default PostListComponent;
