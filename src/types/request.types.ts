interface CreatePostRequest {
  userId: 1;
  comment: string;
  point: number;
  imageIds: number[];
}

interface CreateImageRequest {}

export type { CreatePostRequest };
