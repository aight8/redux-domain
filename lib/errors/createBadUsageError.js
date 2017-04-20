define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createBadUsageError(message) {
        function BadUsageError(message) {
            this.name = 'BadUsageError';
            this.message = message;
        }
        BadUsageError.prototype = Error.prototype;
        return new BadUsageError(message);
    }
    exports.default = createBadUsageError;
    ;
});
