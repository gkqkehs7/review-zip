interface ApiResponse {
  data: {
    code: string;
    isSuccess: boolean;
    message: string;
  };
}

interface KakaoLoginType extends Omit<ApiResponse, 'data'> {
  data: ApiResponse['data'] & {
    result: {
      accessToken: string;
    };
  };
}

export type { KakaoLoginType };
