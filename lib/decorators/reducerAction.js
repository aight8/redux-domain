define(["require", "exports", "./internal/createActionInterfaceCreator", "./internal/setActionReducerHandler"], function (require, exports, createActionInterfaceCreator_1, setActionReducerHandler_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_1(actionType, reducerFunction) {
        return function (target, key, descriptor) {
            descriptor.value = createActionInterfaceCreator_1.default(target, actionType, descriptor.value);
            setActionReducerHandler_1.default(target, actionType, reducerFunction);
            return descriptor;
        };
    }
    exports.default = default_1;
});
