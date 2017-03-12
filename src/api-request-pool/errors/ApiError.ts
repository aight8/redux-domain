import RequestError from './base/RequestError'

export default class ApiError extends RequestError {
  public readonly errors; // the errors property in the API response

  constructor(errors: any) {
    super('API_ERROR');
    this.errors = errors;
  }
}