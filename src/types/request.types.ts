interface CreatePostRequest {
  userId: 1;
  comment: string;
  point: number;
  imageIds: number[];
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
