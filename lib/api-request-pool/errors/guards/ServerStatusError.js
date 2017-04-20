define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isServerStatusError(err) {
        return err.response &&
            err.response.status != 200;
    }
    exports.isServerStatusError = isServerStatusError;
});
