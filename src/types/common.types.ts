interface User {
  id: number;
  nickname: string;
  profileUrl: string;
}

interface Post {
  postId: number;
  comment: string;
  point: number;
  likeNum: number;
  checkLike: boolean;
  checkScrab: boolean;
  createdAt: Date;
  userInfo: User;
  hashtags: string[];
  postImages: PostImages[];
}

interface PostImages {
  id: number;
  url: string;
}

export type { User, Post, PostImages };
