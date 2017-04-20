define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isNetworkError(obj) {
        return obj.message === 'Network Error';
    }
    exports.isNetworkError = isNetworkError;
});
