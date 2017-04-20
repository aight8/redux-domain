define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RequestErrorTypeEnum;
    (function (RequestErrorTypeEnum) {
        RequestErrorTypeEnum[RequestErrorTypeEnum["TimeoutError"] = 'TIMEOUT_ERROR'] = "TimeoutError";
        RequestErrorTypeEnum[RequestErrorTypeEnum["ConnectionError"] = 'CONNECTION_ERROR'] = "ConnectionError";
        RequestErrorTypeEnum[RequestErrorTypeEnum["NetworkError"] = 'NETWORK_ERROR'] = "NetworkError";
        RequestErrorTypeEnum[RequestErrorTypeEnum["CancelError"] = 'CANCEL_ERROR'] = "CancelError";
        RequestErrorTypeEnum[RequestErrorTypeEnum["InvalidStatus"] = 'INVALID_STATUS'] = "InvalidStatus";
        RequestErrorTypeEnum[RequestErrorTypeEnum["InvalidResponseType"] = 'INVALID_RESPONSE_TYPE'] = "InvalidResponseType";
        RequestErrorTypeEnum[RequestErrorTypeEnum["ExpressProxyError"] = 'EXPRESS_PROXY_ERROR'] = "ExpressProxyError";
        RequestErrorTypeEnum[RequestErrorTypeEnum["ApiError"] = 'API_ERROR'] = "ApiError";
        RequestErrorTypeEnum[RequestErrorTypeEnum["ApiFatalError"] = 'API_FATAL_ERROR'] = "ApiFatalError";
    })(RequestErrorTypeEnum = exports.RequestErrorTypeEnum || (exports.RequestErrorTypeEnum = {}));
    class RequestError extends Error {
        constructor(problem, innerError, axiosResponse) {
            super(problem);
            this.problem = problem;
            this.innerError = innerError;
            this.axiosResponse = axiosResponse;
        }
    }
    exports.default = RequestError;
    ;
});
