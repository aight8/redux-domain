export interface ServerStatusError extends Error {
  config: any;
  response: any;
}

export function isServerStatusError(err: any): err is ServerStatusError {
  return err.response &&
         err.response.status != 200;
}