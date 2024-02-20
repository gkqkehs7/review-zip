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
  scrabNum: number;
  likeNum: number;
  checkLike?: boolean;
  checkScrab?: boolean;
  checkMine?: boolean;
  createdAt: string;
  user: User;
  hashtags: Hashtag[];
  postImages: PostImages[];
  store: Store;
}

interface PostImages {
  imageId: number;
  imageUrl: string;
}

interface History {
  historyId: number;
  type: 'USER' | 'HASHTAG';
  user: User | null;
  hashtag: Hashtag | null;
}

interface Hashtag {
  hashtagId: number;
  tagName: string;
  postNum?: number;
}

interface Store {
  latitude: string;
  longitude: string;
  name: string;
  roadAddressName: string;
  addressName: string;
}

interface PlaceInfo {
  place_name: string;
  address_name: string;
  road_address_name: string;
  phone: string;
  x: string;
  y: string;
}

export type { User, Post, PostImages, Hashtag, History, PlaceInfo };
