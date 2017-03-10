export interface ExpressJsProxyError extends Error {
  address: string,
  family: string|null,
  host: string,
  code: string,
  errno: string,
  port: string,
  syscall: string,
}

export function isExpressJsProxyError(obj: Object): obj is ExpressJsProxyError {
  return 'errno' in obj;
}