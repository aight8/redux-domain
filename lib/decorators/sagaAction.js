define(["require", "exports", "./internal/createActionInterfaceCreator", "./internal/setActionSagaHandler"], function (require, exports, createActionInterfaceCreator_1, setActionSagaHandler_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_1(actionType, sagaGeneratorFunction) {
        return function (target, key, descriptor) {
            descriptor.value = createActionInterfaceCreator_1.default(target, actionType, descriptor.value);
            setActionSagaHandler_1.default(target, actionType, sagaGeneratorFunction);
            return descriptor;
        };
    }
    exports.default = default_1;
});
