import { User, Post, CurtPost, Hashtag } from './common.types';

// KAKAO CONTROLLER
// /v1/oauth/kakao
interface KakaoLoginType {
  accessToken: string;
}

// USER CONTROLLER
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

// [Get] /v1/users/search/nickname
interface SearchUserByNicknameResponse extends Array<User> {}

// POST CONTROLLER
// [Post] /v1/posts
interface CreatePostResponse {
  postId: number;
  userId: number;
  comment: string;
  point: number;
  imageIds: number[];
}

// [Get] /v1/posts/random
interface GetRandomPostsResponse extends Array<Post> {}

// [Get] /v1/posts/{postId}
interface GetRandomPostResponse extends Post {}

// [Get] /v1/posts/like/{postId}/users
interface GetPostLikedUsersResponse extends Array<User> {}

// HASHTAG CONTROLLER
interface SearchHashtagResponse extends Array<Hashtag> {}

// IMAGE CONTROLLER
// [Post] /v1/images/users/{userId}
interface CreateImagesResponse {
  imageIds: number[];
}

export type {
  KakaoLoginType,
  CreatePostResponse,
  CreateImagesResponse,
  GetRandomPostsResponse,
  GetUserPostsResponse,
  SearchUserByNicknameResponse,
  GetUserInfoResponse,
  GetRandomPostResponse,
  GetPostLikedUsersResponse,
  SearchHashtagResponse,
};
