import RequestError from './base/RequestError';
export default class ApiError extends RequestError {
    readonly errors: any;
    constructor(errors: any);
}
