define(["require", "exports", "./internal/createActionInterfaceCreator"], function (require, exports, createActionInterfaceCreator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_1(actionType) {
        return (target, key, descriptor) => {
            descriptor.value = createActionInterfaceCreator_1.default(target, actionType, descriptor.value);
        };
    }
    exports.default = default_1;
});
