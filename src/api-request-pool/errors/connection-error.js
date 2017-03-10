"use strict";
exports.__esModule = true;
var NODEJS_CONNECTION_ERROR_CODES = ['ENOTFOUND', 'ECONNREFUSED', 'ECONNRESET'];
function isNodeJsConnectionError(err) {
    return err.code && NODEJS_CONNECTION_ERROR_CODES.includes(err.code);
}
exports.isNodeJsConnectionError = isNodeJsConnectionError;
