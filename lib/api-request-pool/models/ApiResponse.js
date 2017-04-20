define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isValidResponseJsonStructure(obj) {
        return 'success' in obj &&
            'data' in obj &&
            'errors' in obj;
    }
    exports.isValidResponseJsonStructure = isValidResponseJsonStructure;
});
