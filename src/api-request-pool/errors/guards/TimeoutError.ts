export interface TimeoutError extends Error {
  config: any;
  code: any;
  response: any;
}

export function isTimeoutError(err: any): err is TimeoutError {
  return err.code &&
         err.code === 'ECONNABORTED';
}