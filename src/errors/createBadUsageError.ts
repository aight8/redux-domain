export default function createBadUsageError(message: string) {
  function BadUsageError(message: string) {
    this.name = 'BadUsageError';
    this.message = message;
  }
  BadUsageError.prototype = Error.prototype;
  return new BadUsageError(message);
};