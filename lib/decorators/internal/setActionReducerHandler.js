define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = (target, actionType, reducerFunction) => {
        if (typeof target.decoratorRegisteredReducers === 'undefined') {
            target.decoratorRegisteredReducers = {};
        }
        if (actionType in target.decoratorRegisteredReducers) {
            const domain = target.constructor.name;
            throw new Error(`Cannot register multiple action handlers for action ${actionType} in ${domain}.`);
        }
        target.decoratorRegisteredReducers[actionType] =
            function (state, action) {
                return reducerFunction.call(this, action.payload, action);
            };
    };
});
