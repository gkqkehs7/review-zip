# reviewzip

[Vite + React + TS](https://review-zip.vercel.app/)

<br />

### prettier/eslint를 통한 코드 스타일 획일

코드 스타일을 일관성 있게 유지하고 흔히 발생하는 실수나 잠재적인 오류를 사전에 감지하기 위해 `prettier/eslint`를 사용하였습니다.

<br />

### alias를 통한 파일 호출 간편화

![Untitled](https://github.com/gkqkehs7/review-zip/assets/77993709/1b23e66f-4f74-4b4d-8825-e38cba30f6ac)


alias를 통한 각 파일끼리의 호출을 간편화 하고 코드를 깔끔하게 하였습니다.

<br />

### vite config를 통한 cors 해결

```tsx
server: {
  proxy: {
    '/api': {
      target: 'your.server.api',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
      secure: false,
      ws: true,
    },
  },
},
```

vite.config를 통해 proxy를 설정하여 cors 문제를 해결하였습니다.

<br />

## custom axios

```tsx
const axiosInstance: AxiosInstance = axios.create({
  baseURL: '/api',
  withCredentials: true,
});
```

axios를 custom axios로 재정의 하여 공통적인 옵션으로 활용하게 하였습니다.

<br />

## axios Interceptor

```tsx

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);
```

custom axios에서 interceptor를 활용하여 요청마다 header에 토큰이 실리게 하였습니다.

<br />

## axios interceptor를 활용한 accessToken 재발급

```tsx
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.data.code === 1101) {
      try {
        const refreshToken = getRefreshToken();

        const response = await axiosInstance.post('/v1/auth/refresh', {
          refreshToken: refreshToken,
        });

        const accessToken = response.data.accessToken;

        error.config.headers.Authorization = `Bearer ${accessToken}`;

        return axiosInstance(error.config);
      } catch (error) {
        window.location.href = '/signinPage';
        return Promise.reject(error);
      }
    }
    console.error(error);
    return Promise.reject(error);
  },
);
```

response 401 status를 받았을 경우 axios interceptor를 활용해 refresh 요청을 받았습니다.

<br />

## axios method

```tsx
const PostAxiosInstance = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await axiosInstance.post(url, data, config);
  return response;
};
```

custom한 axios를 다시 `post` `get` `patch` `delete` 에 대해서 타입을 제너레이팅 할 수 있도록 다시 커스텀화 하여 사용하였습니다.

<br />

## private, public Route

```tsx
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const accessToken = localStorage.getItem('accessToken');

  return accessToken ? <Outlet /> : <Navigate to="/signinPage" />;
};

export default PrivateRoute;
```

private Route, public Route를 활용한 로그인, 로그아웃 시에 들어갈 수 있는 페이지를 제한하였습니다.

<br />

## react-responsive

![Untitled](https://github.com/gkqkehs7/review-zip/assets/77993709/f59b0263-8daa-4275-b95b-3d0eb38f08d0)


![Untitled](https://github.com/gkqkehs7/review-zip/assets/77993709/5a7cef81-25ed-4bfd-b388-f54c363ed89d)


<br />

## vercel을 통한 배포

vercel + vite를 통한 배포를 하였습니다.

<br />

## component 분리를 통한 재사용

자주 사용되는 요소들에 대해서 component화 하여 재사용 하였습니다.
