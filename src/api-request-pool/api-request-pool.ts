import * as Qs from 'Qs'
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

import RequestErrorType from './errors/request-error-type'
//import { RequestErrorType, RequestErrorTypeString } from './errors/request-error-type'
import RequestError from './errors/request-error'
import WrappedError from './errors/wrapped-error'
import ApiError from './errors/api-error'

import { ExpressJsProxyError, isExpressJsProxyError } from './errors/express-js-proxy-error'
import { TimeoutError, isTimeoutError } from './errors/timeout-error'
import { ConnectionError, isNodeJsConnectionError } from './errors/connection-error'
import { ServerStatusError, isServerStatusError } from './errors/server-status-error'
import { NetworkError, isNetworkError } from './errors/network-error'
import { ApiResponse, isValidResponseJsonStructure } from './models/api-response'

import * as createDebug from 'debug'

const debug = createDebug('api-request-pool');

export type METHOD = 'get' | 'post';

interface Request {
  url?: string,
  method?: METHOD,
  data?: any,
  headers?: {[headerName: string]: any},
}

interface Response {
  body?: any,
  status?: number,
  headers?: {[headerName: string]: any},
}

type ErrorHandler = (err: RequestError) => boolean;
type LogHandler = (request: Request, response: Response, duration: number) => void;

export type ApiRequestPoolOptions = {
  baseURL?: string,
  errorHandler?: ErrorHandler,
  logHandler?: LogHandler,
  timeout?: number,
  nodeRequest?: any, // not used yet
};

export type ApiRequestOptions = {
  cancelPrev?: boolean,
  uniqueRequestHasher?: (req: {method: METHOD, url: string, rawData: any}) => string,
};

export default class ApiRequestPool {
  private axios: AxiosInstance;
  private cancelTokens: {[uniqueRequestHash: string]: Canceler} = {};

  constructor(protected options: ApiRequestPoolOptions = {}) {
    const defaultOptions = {
      errorHandler() {},
      logHandler() {},
    };

    this.options = Object.assign({}, defaultOptions, options);

    this.axios = axios.create({
      baseURL: this.options.baseURL,
      timeout: this.options.timeout,
      validateStatus: status => status === 200,
      maxRedirects: 0, // why should the api redirect?
    });
  }

  private throwError(requestError: RequestError) {
    const handled = this.options.errorHandler(requestError);
    throw new WrappedError(requestError, handled);
  }

  private throwNewError(
    type: RequestErrorType,
    innerError?: Error,
    response?: AxiosResponse
  ) {
    const requestError = new RequestError(type, innerError || null, response || null);
    this.throwError(requestError);
  }

  async request(
    method: METHOD,
    url: string,
    rawData?: any,
    options?: ApiRequestOptions
  ) {
    debug('request', method, url, rawData);
    try {
      return await this.innerRequest(method, url, rawData, options);
    } catch(err) {
      if (err instanceof WrappedError) {
        /*if (!err.handled) {
          // Known rrrors which was not handled by the client
          throw err.originalError;
        }*/
        throw err.originalError;
      } else {
        // Unhandled exception was throwed
        console.log(
          'Unhandled ApiRequestPool exception was throwed.',
          typeof err, Object.keys(err), err.constructor.name, err.code
        );
        throw err;
      }
    }
  }

  private async innerRequest(
    method: METHOD,
    url: string,
    rawData?: any,
    options?: ApiRequestOptions
  ) {
    const defaultOptions: ApiRequestOptions = {
      cancelPrev: true,
      uniqueRequestHasher: req => {
        return req.url;
      }
    }

    let mergedOptions = Object.assign({}, defaultOptions, options)

    let postData = null;
    let params = null;

    if (method === 'get') {
      params = rawData;
    } else if (method === 'post') {
      postData = rawData;
    }

    let cancelToken = null;

    if (mergedOptions.cancelPrev === true) {
      const uniqueRequestHash = mergedOptions.uniqueRequestHasher({method, url, rawData});

      // Cancel prev. request with same request hash
      //if (uniqueRequestHash in this.cancelTokens) {
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
      data: postData,
      params,
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
      paramsSerializer: _params => Qs.stringify(_params, { arrayFormat: 'indices' }),
      onDownloadProgress: (progressEvent: any) => {

      },
      onUploadProgress: (progressEvent: any) => {

      },
      cancelToken,
    };

    let result: AxiosResponse;

    const start = (new Date).getTime();
    try {
      result = await this.axios.request(requestConfig);
    } catch(ex) {
      if (axios.isCancel(ex)) {
        this.throwNewError('CANCEL_ERROR', ex);
      }
      if (isTimeoutError(ex)) {
        this.throwNewError('TIMEOUT_ERROR', ex);
      }
      if (isNodeJsConnectionError(ex)) {
        this.throwNewError('CONNECTION_ERROR', ex);
      }
      if (isServerStatusError(ex)) {
        this.throwNewError('INVALID_STATUS', ex);
      }
      if (isNetworkError(ex)) {
        this.throwNewError('NETWORK_ERROR', ex);
      }
      throw ex;
    }

    const end = (new Date).getTime();
    const duration = end - start;

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

    const data = result.data;

    if (!(data instanceof Object)) {
      this.throwNewError('INVALID_RESPONSE_TYPE', null, result);
    }

    if (isExpressJsProxyError(data)) {
      this.throwNewError('EXPRESS_PROXY_ERROR', null, result);
    }

    if (!isValidResponseJsonStructure(data)) {
      this.throwNewError('INVALID_JSON_STRUCTURE', null, result);
    }

    let apiResponse: ApiResponse = data;

    if (!apiResponse.success) { // falsy value
      this.throwError(new ApiError(data.errors));
    }

    // Everything went fine. Return now the data prop.
    return data.data;
  }
}