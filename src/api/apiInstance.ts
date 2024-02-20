import { getAccessToken, getRefreshToken } from '@/utils/token.utils';
import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? 'https://api.egusajo.shop' : '/api',
  withCredentials: true,
});

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
        window.location.href = '/review-zip/signinPage';
        return Promise.reject(error);
      }
    }
    console.error('🌼 axiosInstance.response에서 에러 발생:', error);
    return Promise.reject(error);
  },
);

export default axiosInstance;
