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

interface CreateImagesResponse {
  imageIds: number[];
}

export type { KakaoLoginType, CreatePostResponse, CreateImagesResponse };
