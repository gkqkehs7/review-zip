type IUser = {
  id: number;
  name: string;
  nickname: string;
  profileImage: string;
  follow: boolean;
};

interface User {
  id: number;
  nickname: string;
  profileUrl: string | null;
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

interface CurtPost {
  postId: number;
  postImageUrl: string;
  likeNum: number;
  scrabNum: number;
}

export type { IUser, User, Post, PostImages, CurtPost };
