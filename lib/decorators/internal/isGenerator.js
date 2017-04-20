define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isGenerator(variable) {
        return variable.constructor.name === 'GeneratorFunction';
    }
    exports.default = isGenerator;
});
