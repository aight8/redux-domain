define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const NODEJS_CONNECTION_ERROR_CODES = ['ENOTFOUND', 'ECONNREFUSED', 'ECONNRESET'];
    function isNodeJsConnectionError(err) {
        return err.code && NODEJS_CONNECTION_ERROR_CODES.includes(err.code);
    }
    exports.isNodeJsConnectionError = isNodeJsConnectionError;
});
