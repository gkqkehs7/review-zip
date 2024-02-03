import { User, Post, PostImages, CurtPost } from './common.types';

interface KakaoLoginType {
  accessToken: string;
}

// [Post] /v1/posts
interface CreatePostResponse {
  postId: number;
  userId: number;
  comment: string;
  point: number;
  imageIds: number[];
}

// [Post] /v1/images/users/{userId}
interface CreateImagesResponse {
  imageIds: number[];
}

// [Get] /v1/posts/random
interface GetRandomPostsResponse extends Array<Post> {}

// /v1/users/{userId}/posts
interface GetUserPostsResponse {
  postList: CurtPost[];
  listSize: number;
  totalPage: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
}

///v1/users/{userId}
interface GetUserInfoResponse {
  userId: number;
  name: string;
  nickname: string;
  profileUrl: string;
  followingNum: number;
  followerNum: number;
  following: boolean;
}

// [Get] /v1/posts/{postId}
interface GetRandomPostResponse extends Post {}

// [Get] /v1/posts/like/{postId}/users
interface GetPostLikedUsersResponse extends Array<User> {}
export type {
  KakaoLoginType,
  CreatePostResponse,
  CreateImagesResponse,
  GetRandomPostsResponse,
  GetUserPostsResponse,
  GetUserInfoResponse,
  GetRandomPostResponse,
  GetPostLikedUsersResponse,
};
