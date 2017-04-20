define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const noop = () => { };
    exports.default = (action) => {
        return {
            resolve: action.meta && action.meta.callbacks && action.meta.callbacks.resolve || noop,
            reject: action.meta && action.meta.callbacks && action.meta.callbacks.reject || noop,
        };
    };
});
