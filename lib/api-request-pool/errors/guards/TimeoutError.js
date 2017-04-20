define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isTimeoutError(err) {
        return err.code &&
            err.code === 'ECONNABORTED';
    }
    exports.isTimeoutError = isTimeoutError;
});
