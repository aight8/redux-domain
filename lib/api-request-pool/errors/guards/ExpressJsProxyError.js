define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isExpressJsProxyError(obj) {
        return 'errno' in obj;
    }
    exports.isExpressJsProxyError = isExpressJsProxyError;
});
