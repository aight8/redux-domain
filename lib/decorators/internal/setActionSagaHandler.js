define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = (target, actionType, sagaGeneratorFunction) => {
        if (typeof target.decoratorRegisteredSagas === 'undefined') {
            target.decoratorRegisteredSagas = {};
        }
        if (actionType in target.decoratorRegisteredSagas) {
            const domain = target.constructor.name;
            throw new Error(`Cannot register multiple action handlers for action ${actionType} in ${domain}.`);
        }
        target.decoratorRegisteredSagas[actionType] =
            function (action) {
                return sagaGeneratorFunction.call(this, action.payload, action);
            };
    };
});
