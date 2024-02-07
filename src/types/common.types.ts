interface User {
  userId: number;
  nickname: string;
  name: string;
  profileUrl: string;
  following?: boolean;
  followingNum?: number;
  followerNum?: number;
}

interface Post {
  postId: number;
  comment: string;
  point: number;
  likeNum: number;
  checkLike?: boolean;
  checkScrab?: boolean;
  checkMine?: boolean;
  createdAt: string;
  userInfo: User;
  hashtags: string[];
  postImages: PostImages[];
}

interface PostImages {
  id: number;
  url: string;
}

interface History {
  historyId: number;
  type: 'USER' | 'HASHTAG';
  user: User | null;
  hashtag: string | null;
}

interface Hashtag {
  id: number;
  name: string;
  postNum?: number;
}

export type { User, Post, PostImages, Hashtag, History };
