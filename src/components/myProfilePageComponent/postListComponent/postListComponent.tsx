import ReviewPictureComponent from '../reviewPicturesComponent/reviewPictureComponent';
import { Post } from '@/types/common.types';

interface PostProps {
  setClickedPost: React.Dispatch<React.SetStateAction<Post | undefined>>;
  post: Post[];
  isFriend: boolean;
}
const PostListComponent: React.FC<PostProps> = ({
  setClickedPost,
  post,
  isFriend,
}) => {
  return (
    <ReviewPictureComponent
      setClickedPost={setClickedPost}
      posts={post}
      post={true}
      isFriend={isFriend}
    />
  );
};

export default PostListComponent;
