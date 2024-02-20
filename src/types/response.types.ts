import { User, Post, Hashtag, History } from './common.types';

// Error Type
interface ErrorResponseType {
  response: {
    data: {
      code: string;
      isSuccess: false;
      message: string;
    };
  };
}

// KAKAO CONTROLLER
// /v1/oauth/kakao
interface KakaoLoginType {
  accessToken: string;
  refreshToken: string;
}

interface LocalSignInResponse {
  accessToken: string;
  refreshToken: string;
  grantType: string;
}

// USER CONTROLLER
// /v1/users/{userId}/posts
interface GetUserPostsResponse extends Array<Post> {}

// /v1/users/{userId}
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

// [Get] /v1/users/{userId}/histories
interface GetSearchHistoriesResponse extends Array<History> {}

// [Get] /v1/users/{userId}/followings
interface GetFollowingsResponse extends Array<User> {}

// [Get] /v1/users/{userId}/followers
interface GetFollowersResponse extends Array<User> {}

// POST CONTROLLER
// [Post] /v1/posts
interface CreatePostResponse extends Post {}

// [Get] /v1/posts/random-one
interface GetRandomPostResponse extends Post {}

// [Get] /v1/posts/random-three
interface GetRandomPostsResponse extends Array<Post> {}

// [Get] /v1/posts/{postId}
interface GetPostResponse extends Post {}

// [Get] /v1/posts/like/{postId}/users
interface GetPostLikedUsersResponse extends Array<User> {}

// HASHTAG CONTROLLER
// [Get] /v1/hashtags/{hashtagId}
interface GetHashtagInfoResponse extends Hashtag {}

// [Get] /v1/hashtags/search
interface SearchHashtagResponse extends Array<Hashtag> {}

// IMAGE CONTROLLER
// [Post] /v1/images/users/{userId}
interface CreateImagesResponse {
  imageIds: number[];
}

export type {
  ErrorResponseType,
  KakaoLoginType,
  LocalSignInResponse,
  CreatePostResponse,
  CreateImagesResponse,
  GetRandomPostsResponse,
  GetUserPostsResponse,
  SearchUserByNicknameResponse,
  GetUserInfoResponse,
  GetFollowersResponse,
  GetFollowingsResponse,
  GetRandomPostResponse,
  GetPostResponse,
  GetPostLikedUsersResponse,
  GetHashtagInfoResponse,
  SearchHashtagResponse,
  GetSearchHistoriesResponse,
};
