import RequestErrorType from './request-error-type'
import { AxiosResponse } from 'axios'

export default class RequestError extends Error {
  constructor(
    public readonly problem: RequestErrorType,
    public readonly innerError?: Error,
    public readonly axiosResponse?: AxiosResponse
  ) {
    super(problem);
  }
};