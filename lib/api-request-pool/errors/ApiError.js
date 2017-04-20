define(["require", "exports", "./base/RequestError"], function (require, exports, RequestError_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ApiError extends RequestError_1.default {
        constructor(errors) {
            super('API_ERROR');
            this.errors = errors;
        }
    }
    exports.default = ApiError;
});
