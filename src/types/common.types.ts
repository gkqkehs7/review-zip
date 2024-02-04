interface User {
  userId: number;
  nickname: string;
  profileUrl: string;
  following?: boolean;
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

interface CurtPost {
  postId: number;
  postImageUrl: string;
  likeNum: number;
  scrabNum: number;
}

export type { User, Post, PostImages, CurtPost };
