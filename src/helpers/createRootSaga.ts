import createSagaFork from './createSagaFork'
import ActionSagaDefinition from '../types/ActionSagaDefinition'
import ActionSagaDefinitions from '../types/ActionSagaDefinitions'
import { Effect, SagaIterator, effects } from 'redux-saga'
import Saga from '../types/Saga'

export default (sagas: ActionSagaDefinitions, additionalForks?: SagaIterator[]) => {
    let sagaForks: SagaIterator[] = [];

    for (let sagaDefinition of sagas) {
        const fork = createSagaFork(sagaDefinition.actionType, sagaDefinition.saga);
        sagaForks.push(fork);
    }

    if (additionalForks) {
        return function*() {
            yield* sagaForks;
            yield* additionalForks;
        };
    } else {
        return function*() {
            yield* sagaForks;
        };
    }
}