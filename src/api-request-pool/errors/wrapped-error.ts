export default class WrappedError {
  constructor(public originalError: Error, public handled: boolean) {}
}