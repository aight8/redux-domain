import RequestError from './errors/base/RequestError';
export declare type METHOD = 'get' | 'post';
export interface Request {
    url?: string;
    method?: METHOD;
    data?: any;
    headers?: {
        [headerName: string]: any;
    };
}
export interface Response {
    body?: any;
    status?: number;
    headers?: {
        [headerName: string]: any;
    };
}
export declare type ErrorHandler = (err: RequestError) => true | Error | void;
export declare type LogHandler = (request: Request, response: Response, duration: number) => void;
export declare type ApiRequestPoolOptions = {
    baseURL?: string;
    timeout?: number;
    validateStatus?: (status: number) => boolean;
    maxRedirects?: number;
    errorHandler?: ErrorHandler;
    logHandler?: LogHandler;
    nodeRequest?: any;
    uniqueRequestHasher?: (req: {
        method: METHOD;
        url: string;
        rawData: any;
    }) => string;
};
export declare type ApiRequestOptions = {
    cancelPrev?: boolean;
};
export default class ApiRequestPool {
    static options: ApiRequestPoolOptions;
    private options;
    private axios;
    private cancelTokens;
    constructor(options: ApiRequestPoolOptions);
    private throwRequestError(type, innerError?, response?);
    protected request<T>(method: METHOD, url: string, rawData?: any, options?: ApiRequestOptions): Promise<{}>;
    private innerRequest(method, url, rawData?, options?);
}
