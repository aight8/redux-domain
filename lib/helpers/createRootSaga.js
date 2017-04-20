define(["require", "exports", "./createSagaFork"], function (require, exports, createSagaFork_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = (sagas, additionalForks) => {
        let sagaForks = [];
        for (let sagaDefinition of sagas) {
            const fork = createSagaFork_1.default(sagaDefinition.actionType, sagaDefinition.saga);
            sagaForks.push(fork);
        }
        if (additionalForks) {
            return function* () {
                yield* sagaForks;
                yield* additionalForks;
            };
        }
        else {
            return function* () {
                yield* sagaForks;
            };
        }
    };
});
