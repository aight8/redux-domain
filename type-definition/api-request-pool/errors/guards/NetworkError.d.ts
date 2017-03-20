import { AxiosRequestConfig, AxiosResponse } from 'axios';
export interface NetworkError extends Error {
    config: AxiosRequestConfig;
    response: AxiosResponse;
}
export declare function isNetworkError(obj: any): obj is NetworkError;
