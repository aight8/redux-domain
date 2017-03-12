export interface ConnectionError extends Error {
  code: string;
  errno: number|string;
  syscall: string;
  hostname: string;
  host: string;
  port: number;
  config: any;
  response: any;
}

const NODEJS_CONNECTION_ERROR_CODES = ['ENOTFOUND', 'ECONNREFUSED', 'ECONNRESET']
export function isNodeJsConnectionError(err: any): err is ConnectionError {
  return err.code && (NODEJS_CONNECTION_ERROR_CODES as any).includes(err.code);
}