define(["require", "exports", "redux-saga/effects", "./getCallbackOptionsFromAction"], function (require, exports, effects_1, getCallbackOptionsFromAction_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = (actionType, innerGenerator) => {
        return effects_1.takeLatest(actionType, function* (action) {
            const callbacks = getCallbackOptionsFromAction_1.default(action);
            try {
                const returnValue = yield effects_1.call(innerGenerator, action);
                callbacks.resolve(returnValue);
            }
            catch (ex) {
                callbacks.reject(ex);
                throw ex;
            }
        });
    };
});
