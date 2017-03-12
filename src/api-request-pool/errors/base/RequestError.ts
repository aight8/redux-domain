import { AxiosResponse } from 'axios'

export enum RequestErrorTypeEnum {
  TimeoutError        = 'TIMEOUT_ERROR' as any,
  ConnectionError     = 'CONNECTION_ERROR' as any,
  NetworkError        = 'NETWORK_ERROR' as any,
  CancelError         = 'CANCEL_ERROR' as any,
  InvalidStatus       = 'INVALID_STATUS' as any,
  InvalidResponseType = 'INVALID_RESPONSE_TYPE' as any,
  ExpressProxyError   = 'EXPRESS_PROXY_ERROR' as any,
  ApiError            = 'API_ERROR' as any,
  ApiFatalError       = 'API_FATAL_ERROR' as any,
}

export type RequestErrorType =
  'TIMEOUT_ERROR' |          // the request was cancelled due reaching the timeout
  'CONNECTION_ERROR' |       // the request cannot be sent due some error
  'NETWORK_ERROR' |
  'CANCEL_ERROR' |           // the request was aborted (load abort/new same request)
  'INVALID_STATUS' |         // endpoint returned not a valid status code (something gone wrong)
  'INVALID_RESPONSE_TYPE' |  // endpoint returned not a json object but something else
  'INVALID_JSON_STRUCTURE' | // endpoint returned a json object but it has an invalid structure
  'EXPRESS_PROXY_ERROR' |    // endpoint returned a json object which was emitted by express proxy (dev mode)
  'API_ERROR' |              // endpoint returned a valid api error
  'API_FATAL_ERROR';         // endpoint returned a json object which represents a application fatal error

export default class RequestError extends Error {
  constructor(
    public readonly problem: RequestErrorType,
    public readonly innerError?: Error,
    public readonly axiosResponse?: AxiosResponse
  ) {
    super(problem);
  }
};