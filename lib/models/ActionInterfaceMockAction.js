define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = (payload, meta, error) => {
        return new ActionInterfaceMockAction(payload, meta, error);
    };
    function createBadUsageError(methodName) {
        const message = `Cannot call ${methodName} on the Action instance directly ` +
            `(because it's only a type mock for the ActionInterface). ` +
            `Possible causes: ` +
            `1. You returned an Action from a method but don\'t use a decorator like ` +
            `@action/@reducerAction/@sagaAction. ` +
            `2. You created this object manually and called this method.`;
        function BadUsageError() {
            this.name = 'BadUsageError';
            this.message = message;
        }
        BadUsageError.prototype = Error.prototype;
        return new BadUsageError();
    }
    class ActionInterfaceMockAction {
        constructor(payload, meta, error) {
            this.action = {
                type: null,
                payload,
                meta,
                error,
            };
        }
        dispatch() {
            throw createBadUsageError('dispatch');
        }
        dispatchSync() {
            throw createBadUsageError('dispatchSync');
        }
        ;
    }
    exports.ActionInterfaceMockAction = ActionInterfaceMockAction;
});
