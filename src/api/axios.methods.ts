import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from './apiInstance';

interface CommonResponse<T> {
  isSuccess: boolean;
  code: any;
  message: string;
  result: T;
}

const PostAxiosInstance = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await axiosInstance.post(url, data, config);
  return response;
};

const GetAxiosInstance = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await axiosInstance.get(url, config);
  return response;
};

export { PostAxiosInstance, GetAxiosInstance };
