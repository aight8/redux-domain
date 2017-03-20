export interface ServerStatusError extends Error {
    config: any;
    response: any;
}
export declare function isServerStatusError(err: any): err is ServerStatusError;
