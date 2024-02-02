import { User, Post, PostImages } from './common.types';

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

// [Get] /v1/posts/{postId}
interface GetRandomPostResponse extends Post {}

// [Get] /v1/posts/like/{postId}/users
interface GetPostLikedUsersResponse extends Array<User> {}

export type {
  KakaoLoginType,
  CreatePostResponse,
  CreateImagesResponse,
  GetRandomPostsResponse,
  GetRandomPostResponse,
  GetPostLikedUsersResponse,
};
