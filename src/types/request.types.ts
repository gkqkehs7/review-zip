interface CreatePostRequest {
  userId: 1;
  comment: string;
  point: number;
  imageIds: number[];
  hashtags: string[];
  storeInfo: {
    name: string;
    addressName: string;
    roadAddressName: string;
    longitude: string;
    latitude: string;
  };
}

interface CreateImageRequest {}

export type { CreatePostRequest };
