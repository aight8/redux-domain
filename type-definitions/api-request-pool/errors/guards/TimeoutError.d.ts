export interface TimeoutError extends Error {
    config: any;
    code: any;
    response: any;
}
export declare function isTimeoutError(err: any): err is TimeoutError;
