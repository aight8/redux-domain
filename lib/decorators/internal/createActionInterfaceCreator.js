define(["require", "exports", "../../models/ActionInterface", "../../models/ActionInterfaceMockAction"], function (require, exports, ActionInterface_1, ActionInterfaceMockAction_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function errorDispatcher() {
        throw new Error('Action cannot be dispatched because no store is registered.');
    }
    function buildAction(actionType, methodReturnValue) {
        let payload = null;
        let meta = null;
        let error = false;
        if (methodReturnValue instanceof ActionInterfaceMockAction_1.ActionInterfaceMockAction) {
            payload = methodReturnValue.action.payload || null;
            meta = methodReturnValue.action.meta || null;
            error = methodReturnValue.action.error || false;
        }
        else {
            payload = methodReturnValue;
        }
        return {
            type: actionType,
            payload,
            meta,
            error,
        };
    }
    function actionWithCallbacks(action, resolve, reject) {
        const actionWithCallbacks = Object.assign({}, action);
        const callbacks = {
            resolve,
            reject,
        };
        if (!actionWithCallbacks.meta) {
            actionWithCallbacks.meta = {
                callbacks,
            };
        }
        else {
            actionWithCallbacks.meta.callbacks = callbacks;
        }
        return actionWithCallbacks;
    }
    function default_1(target, actionType, actionCreator) {
        let actionInterfaceCreator = function (...args) {
            const instanceStore = this.store;
            let actionInterface = new ActionInterface_1.default();
            let action = buildAction(actionType, actionCreator(...args));
            actionInterface.action = action;
            actionInterface.dispatch = function () {
                if (!instanceStore) {
                    errorDispatcher();
                }
                instanceStore.dispatch(action);
            };
            actionInterface.dispatchSync = function () {
                if (!instanceStore) {
                    errorDispatcher();
                }
                return new Promise((resolve, reject) => {
                    instanceStore.dispatch(actionWithCallbacks(action, resolve, reject));
                });
            };
            return actionInterface;
        };
        Object.defineProperty(actionInterfaceCreator, 'actionType', {
            value: actionType,
            writable: false,
        });
        Object.defineProperty(actionInterfaceCreator, 'toString', {
            value: function () {
                return this.actionType;
            },
            writable: false,
        });
        return actionInterfaceCreator;
    }
    exports.default = default_1;
});
