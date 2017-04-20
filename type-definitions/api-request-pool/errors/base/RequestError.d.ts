import { AxiosResponse } from 'axios';
export declare enum RequestErrorTypeEnum {
    TimeoutError,
    ConnectionError,
    NetworkError,
    CancelError,
    InvalidStatus,
    InvalidResponseType,
    ExpressProxyError,
    ApiError,
    ApiFatalError,
}
export declare type RequestErrorType = 'TIMEOUT_ERROR' | 'CONNECTION_ERROR' | 'NETWORK_ERROR' | 'CANCEL_ERROR' | 'INVALID_STATUS' | 'INVALID_RESPONSE_TYPE' | 'INVALID_JSON_STRUCTURE' | 'EXPRESS_PROXY_ERROR' | 'API_ERROR' | 'API_FATAL_ERROR';
export default class RequestError extends Error {
    readonly problem: RequestErrorType;
    readonly innerError: Error;
    readonly axiosResponse: AxiosResponse;
    constructor(problem: RequestErrorType, innerError?: Error, axiosResponse?: AxiosResponse);
}
