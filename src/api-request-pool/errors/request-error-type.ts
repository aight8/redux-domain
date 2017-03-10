type RequestErrorType =
  'TIMEOUT_ERROR' |          // the request was cancelled due reaching the timeout
  'CONNECTION_ERROR' |       // the request cannot be sent due some error
  'NETWORK_ERROR' |
  'CANCEL_ERROR' |           // the request was aborted (load abort/new same request)
  'INVALID_STATUS' |         // endpoint returned not a valid status code (something gone wrong)
  'INVALID_RESPONSE_TYPE' |  // endpoint returned not a json object but something else
  'INVALID_JSON_STRUCTURE' | // endpoint returned a json object but it has an invalid structure
  'EXPRESS_PROXY_ERROR' |    // endpoint returned a json object which was emitted by express proxy (dev mode)
  'API_ERROR' |              // endpoint returned a valid api error
  'API_FATAL_ERROR';         // endpoint returned a json object which represents a application fatal error

export default RequestErrorType;