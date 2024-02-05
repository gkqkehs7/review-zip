import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? 'https://api.egusajo.shop' : '/api',
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = localStorage.getItem('accessToken');
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default axiosInstance;
