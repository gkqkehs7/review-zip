import { User, Post, PostImages } from './common.types';

interface KakaoLoginType {
  accessToken: string;
}

interface CreatePostResponse {
  postId: number;
  userId: number;
  comment: string;
  point: number;
  imageIds: number[];
}

// /v1/images/users/{userId}
interface CreateImagesResponse {
  imageIds: number[];
}

// /v1/posts/random
interface GetRandomPostsResponse extends Array<Post> {}

export type {
  KakaoLoginType,
  CreatePostResponse,
  CreateImagesResponse,
  GetRandomPostsResponse,
};
