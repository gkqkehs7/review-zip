interface User {
  id: number;
  nickname: string;
  profileUrl: string;
  isFollowing?: boolean;
}

interface Post {
  postId: number;
  comment: string;
  point: number;
  likeNum: number;
  checkLike: boolean;
  checkScrab: boolean;
  createdAt: string;
  userInfo: User;
  hashtags: string[];
  postImages: PostImages[];
}

interface PostImages {
  id: number;
  url: string;
}

export type { User, Post, PostImages };
