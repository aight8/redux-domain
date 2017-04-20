export interface ConnectionError extends Error {
    code: string;
    errno: number | string;
    syscall: string;
    hostname: string;
    host: string;
    port: number;
    config: any;
    response: any;
}
export declare function isNodeJsConnectionError(err: any): err is ConnectionError;
