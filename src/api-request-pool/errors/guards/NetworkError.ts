import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface NetworkError extends Error {
    config: AxiosRequestConfig,
    response: AxiosResponse,
}

export function isNetworkError(obj: any): obj is NetworkError {
    return obj.message === 'Network Error';
}