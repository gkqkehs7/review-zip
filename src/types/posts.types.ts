type IPost = {
  id: 1;
  title: string;
  content: string;
  iLike: boolean;
  date: number;
  star: number;
  like: boolean;
  likeNum: number;
  scrab: boolean;
  user: {
    id: number;
    email: string;
    nickname: string;
    name: string;
    profileImage: string;
  };
  hashTags: string[];
  postImages: { id: number; url: string }[];
};

export type { IPost };
