define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function pickBy(obj, fn) {
        let newObj = {};
        for (let i in obj) {
            let val = obj[i];
            if (fn(obj[i])) {
                newObj[i] = obj[i];
            }
        }
        return newObj;
    }
    exports.default = pickBy;
});
