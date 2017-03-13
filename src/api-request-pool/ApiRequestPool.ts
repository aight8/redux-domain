import Qs from 'Qs'
import {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    Canceler,
    CancelToken,
    default as axios
} from 'axios'
import { Request as ExpressRequest } from 'express'

// Own error objects
import RequestError, { RequestErrorTypeEnum, RequestErrorType } from './errors/base/RequestError'
import ApiError from './errors/ApiError'

// Error guards
import { ExpressJsProxyError, isExpressJsProxyError } from './errors/guards/ExpressJsProxyError'
import { TimeoutError, isTimeoutError } from './errors/guards/TimeoutError'
import { ConnectionError, isNodeJsConnectionError } from './errors/guards/ConnectionError'
import { ServerStatusError, isServerStatusError } from './errors/guards/ServerStatusError'
import { NetworkError, isNetworkError } from './errors/guards/NetworkError'

// API response structure
import { ApiResponse, isValidResponseJsonStructure } from './models/ApiResponse'

export type METHOD = 'get' | 'post'

export interface Request {
  url?: string,
  method?: METHOD,
  data?: any,
  headers?: {[headerName: string]: any},
}

export interface Response {
  body?: any,
  status?: number,
  headers?: {[headerName: string]: any},
}

export type ErrorHandler = (err: RequestError) => true | Error | void;
export type LogHandler = (request: Request, response: Response, duration: number) => void;

export type ApiRequestPoolOptions = {
  /** (axios) The basic URL */
  baseURL?: string,

  /** (axios) Timeout before it throws an error of type TIMEOUT_ERROR */
  timeout?: number,

  /** (axios) The basic URL */
  validateStatus?: (status: number) => boolean,

  /** (axios) Maximal redirects */
  maxRedirects?: number,

  /** Error handler which will called with the throwed RequestError. Can return:
   * "true" for handler errors (don't throw the RequestError further)
   * Another Error which should be throwed instead.
   * Otherwise the original RequestError is throwed.
   */
  errorHandler?: ErrorHandler,

  /** Is called for every made request */
  logHandler?: LogHandler,

  /** The current express.js request */
  nodeRequest?: any, // not used yet

  /** Used if a request is called with the "cancelPrev" option to cancel a previous request */
  uniqueRequestHasher?: (req: {method: METHOD, url: string, rawData: any}) => string,
};

export type ApiRequestOptions = {
  cancelPrev?: boolean,
  // + maybe an observer to get download/upgrad progresses
  // + or observer: true => return a observer instead a promise?
};

export default class ApiRequestPool {
  static options: ApiRequestPoolOptions = {};
  private options: ApiRequestPoolOptions;
  private axios: AxiosInstance;
  private cancelTokens: {[uniqueRequestHash: string]: Canceler} = {};

  constructor(options: ApiRequestPoolOptions) {
    const defaultOptions = {
      validateStatus: status => status === 200,
      maxRedirects: 0,
      errorHandler() {},
      logHandler() {},
      uniqueRequestHasher: req => req.url,
    };

    this.options = Object.assign({}, defaultOptions, new.target.options, options);

    this.axios = axios.create({
      baseURL: this.options.baseURL,
      timeout: this.options.timeout,
      validateStatus: this.options.validateStatus,
      maxRedirects: this.options.maxRedirects,
    });
  }

  private throwRequestError(
    type: RequestErrorType,
    innerError?: Error,
    response?: AxiosResponse
  ) {
    throw new RequestError(type, innerError || undefined, response || undefined);
  }

  /**
   * Call the defined API endpoint.
   * If a problem occures the errorHandler passed in the ApiRequestPool options is called, so you
   * you can define one central point of error handling for all cases.
   */
  protected async request<T>(
    method: METHOD,
    url: string,
    rawData?: any,
    options?: ApiRequestOptions
  ) {
    return new Promise((async function(resolve, reject) {
      try {
        resolve(await this.innerRequest(method, url, rawData, options));
      } catch(err) {
        if (err instanceof RequestError) {
          const errorHandlerResult = this.options.errorHandler(err);
          if (errorHandlerResult === true) {
            resolve(); // resolve with no data
          } else if (errorHandlerResult instanceof Error) {
            reject(errorHandlerResult);
          } else {
            reject(err);
          }
        } else {
          console.error('A request throwed a not recognized error in ApiRequestPool.');
          reject(err);
        }
      }
    }).bind(this));
  }

  private async innerRequest(
    method: METHOD,
    url: string,
    rawData?: any,
    options?: ApiRequestOptions
  ) {
    const defaultOptions: ApiRequestOptions = {
      cancelPrev: false,
    }

    let mergedOptions = Object.assign({}, defaultOptions, options)

    let postData = null;
    let params = null;

    if (method === 'get') {
      params = rawData;
    } else if (method === 'post') {
      postData = rawData;
    }

    let cancelToken: CancelToken|null = null;

    if (mergedOptions.cancelPrev === true) {
      const uniqueRequestHash = this.options.uniqueRequestHasher({method, url, rawData});

      // Cancel prev. request with same request hash
      if (typeof this.cancelTokens[uniqueRequestHash] !== 'undefined') {
        const prevRequestCanceller = this.cancelTokens[uniqueRequestHash];
        prevRequestCanceller('Cancel due of new request.');
        delete this.cancelTokens[uniqueRequestHash];
      }

      // Create new cancel token setter for this request
      cancelToken = new axios.CancelToken(cancel => {
        this.cancelTokens[uniqueRequestHash] = cancel;
      });
    }

    let requestConfig: AxiosRequestConfig = {
      url,
      params,
      // from axios docs:
      // `data` is the data to be sent as the request body
      // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
      // When no `transformRequest` is set, must be of one of the following types:
      // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
      // - Browser only: FormData, File, Blob
      // - Node only: Stream
      data: postData,
      // from axios docs:
      // `transformRequest` allows changes to the request data before it is sent to the server
      // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
      // The last function in the array must return a string, an ArrayBuffer, or a Stream
      transformRequest: _data => {
        if (!_data) {
          return null;
        }
        if (IS_BROWSER) {
          if (_data instanceof FormData) {
            return _data;
          }
        }
        return Qs.stringify(_data, { arrayFormat: 'indices' });
      },
      // from axios docs:
      // `paramsSerializer` is an optional function in charge of serializing `params`
      // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
      paramsSerializer: _params => Qs.stringify(_params, { arrayFormat: 'indices' }),
      onDownloadProgress: (progressEvent: any) => {

      },
      onUploadProgress: (progressEvent: any) => {
        
      },
      cancelToken: cancelToken || undefined,
    };

    let result: AxiosResponse;

    const start = (new Date).getTime();
    try {
      result = await this.axios.request(requestConfig);
    } catch(ex) {
      if (axios.isCancel(ex)) {
        this.throwRequestError('CANCEL_ERROR', ex);
      }
      if (isTimeoutError(ex)) {
        this.throwRequestError('TIMEOUT_ERROR', ex);
      }
      if (isNodeJsConnectionError(ex)) {
        this.throwRequestError('CONNECTION_ERROR', ex);
      }
      if (isServerStatusError(ex)) {
        this.throwRequestError('INVALID_STATUS', ex);
      }
      if (isNetworkError(ex)) {
        this.throwRequestError('NETWORK_ERROR', ex);
      }
      throw ex;
    }

    const end = (new Date).getTime();
    const duration = end - start;

    if (this.options.logHandler) {
      this.options.logHandler({
        url: result.config.url,
        method: result.config.method as any,
        data: result.config.data,
        headers: result.config.headers,
      }, {
        body: result.data,
        status: result.status,
        headers: result.headers,
      }, duration);
    }

    const data = result.data;

    if (!(data instanceof Object)) {
      this.throwRequestError('INVALID_RESPONSE_TYPE', undefined, result);
    }

    if (isExpressJsProxyError(data)) {
      this.throwRequestError('EXPRESS_PROXY_ERROR', undefined, result);
    }

    if (!isValidResponseJsonStructure(data)) {
      this.throwRequestError('INVALID_JSON_STRUCTURE', undefined, result);
    }

    let apiResponse: ApiResponse = data;

    if (!apiResponse.success) { // falsy value
      throw new ApiError(data.errors);
    }

    // Everything went fine. Return now the data prop.
    return data.data;
  }
}