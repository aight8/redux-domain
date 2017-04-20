var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports", "qs", "axios", "./errors/base/RequestError", "./errors/ApiError", "./errors/guards/ExpressJsProxyError", "./errors/guards/TimeoutError", "./errors/guards/ConnectionError", "./errors/guards/ServerStatusError", "./errors/guards/NetworkError", "./models/ApiResponse"], function (require, exports, qs_1, axios_1, RequestError_1, ApiError_1, ExpressJsProxyError_1, TimeoutError_1, ConnectionError_1, ServerStatusError_1, NetworkError_1, ApiResponse_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ApiRequestPool {
        constructor(options) {
            this.cancelTokens = {};
            const defaultOptions = {
                validateStatus: status => status === 200,
                maxRedirects: 0,
                errorHandler() { },
                logHandler() { },
                uniqueRequestHasher: req => req.url,
            };
            this.options = Object.assign({}, defaultOptions, new.target.options, options);
            this.axios = axios_1.default.create({
                baseURL: this.options.baseURL,
                timeout: this.options.timeout,
                validateStatus: this.options.validateStatus,
                maxRedirects: this.options.maxRedirects,
            });
        }
        throwRequestError(type, innerError, response) {
            throw new RequestError_1.default(type, innerError || undefined, response || undefined);
        }
        request(method, url, rawData, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((function (resolve, reject) {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            resolve(yield this.innerRequest(method, url, rawData, options));
                        }
                        catch (err) {
                            if (err instanceof RequestError_1.default) {
                                const errorHandlerResult = this.options.errorHandler(err);
                                if (errorHandlerResult === true) {
                                    resolve();
                                }
                                else if (errorHandlerResult instanceof Error) {
                                    reject(errorHandlerResult);
                                }
                                else {
                                    reject(err);
                                }
                            }
                            else {
                                console.error('A request throwed a not recognized error in ApiRequestPool.');
                                reject(err);
                            }
                        }
                    });
                }).bind(this));
            });
        }
        innerRequest(method, url, rawData, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const defaultOptions = {
                    cancelPrev: false,
                };
                let mergedOptions = Object.assign({}, defaultOptions, options);
                let postData = null;
                let params = null;
                if (method === 'get') {
                    params = rawData;
                }
                else if (method === 'post') {
                    postData = rawData;
                }
                let cancelToken = null;
                if (mergedOptions.cancelPrev === true) {
                    const uniqueRequestHash = this.options.uniqueRequestHasher({ method, url, rawData });
                    if (typeof this.cancelTokens[uniqueRequestHash] !== 'undefined') {
                        const prevRequestCanceller = this.cancelTokens[uniqueRequestHash];
                        prevRequestCanceller('Cancel due of new request.');
                        delete this.cancelTokens[uniqueRequestHash];
                    }
                    cancelToken = new axios_1.default.CancelToken(cancel => {
                        this.cancelTokens[uniqueRequestHash] = cancel;
                    });
                }
                let requestConfig = {
                    url,
                    params,
                    data: postData,
                    transformRequest: _data => {
                        if (!_data) {
                            return null;
                        }
                        if (IS_BROWSER) {
                            if (_data instanceof FormData) {
                                return _data;
                            }
                        }
                        return qs_1.default.stringify(_data, { arrayFormat: 'indices' });
                    },
                    paramsSerializer: _params => qs_1.default.stringify(_params, { arrayFormat: 'indices' }),
                    onDownloadProgress: (progressEvent) => {
                    },
                    onUploadProgress: (progressEvent) => {
                    },
                    cancelToken: cancelToken || undefined,
                };
                let result;
                const start = (new Date).getTime();
                try {
                    result = yield this.axios.request(requestConfig);
                }
                catch (ex) {
                    if (axios_1.default.isCancel(ex)) {
                        this.throwRequestError('CANCEL_ERROR', ex);
                    }
                    if (TimeoutError_1.isTimeoutError(ex)) {
                        this.throwRequestError('TIMEOUT_ERROR', ex);
                    }
                    if (ConnectionError_1.isNodeJsConnectionError(ex)) {
                        this.throwRequestError('CONNECTION_ERROR', ex);
                    }
                    if (ServerStatusError_1.isServerStatusError(ex)) {
                        this.throwRequestError('INVALID_STATUS', ex);
                    }
                    if (NetworkError_1.isNetworkError(ex)) {
                        this.throwRequestError('NETWORK_ERROR', ex);
                    }
                    throw ex;
                }
                const end = (new Date).getTime();
                const duration = end - start;
                if (this.options.logHandler) {
                    this.options.logHandler({
                        url: result.config.url,
                        method: result.config.method,
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
                if (ExpressJsProxyError_1.isExpressJsProxyError(data)) {
                    this.throwRequestError('EXPRESS_PROXY_ERROR', undefined, result);
                }
                if (!ApiResponse_1.isValidResponseJsonStructure(data)) {
                    this.throwRequestError('INVALID_JSON_STRUCTURE', undefined, result);
                }
                let apiResponse = data;
                if (!apiResponse.success) {
                    throw new ApiError_1.default(data.errors);
                }
                return data.data;
            });
        }
    }
    ApiRequestPool.options = {};
    exports.default = ApiRequestPool;
});
