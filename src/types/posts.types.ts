type IPost = {
  id: 1;
  title: string;
  content: string;
  iLike: boolean;
  date: number;
  star: number;
  like: number;
  user: {
    id: number;
    email: string;
    nickname: string;
    name: string;
    profileImage: string;
  };
  postImages: { id: number; url: string }[];
};

export type { IPost };
