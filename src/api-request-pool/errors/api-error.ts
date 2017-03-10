import RequestError from './request-error'

export default class ApiError extends RequestError {
  constructor(
    public readonly apiError: any
  ) {
    super('API_ERROR');
  }
}