import ActionSagaMap from './types/ActionSagaMap';
import ActionReducerMap from './types/ActionReducerMap';
import ActionReducerOrSagaMap from './types/ActionReducerOrSagaMap';
import { Store } from 'redux';
import SagaIterator from 'types/SagaIterator';
interface Domain<StateType> {
    startupSaga(input: string): SagaIterator;
}
declare abstract class Domain<StateType> {
    static key: string;
    private _key;
    key: string;
    store: Store<any> | null;
    readonly defaultState: StateType;
    protected handlers: ActionReducerOrSagaMap;
    readonly actionNamespace: string;
    constructor();
    readonly state: StateType;
    readonly rootState: any;
    resetState(): void;
    getAllReducers(): ActionReducerMap;
    getAllSagas(): ActionSagaMap;
}
export default Domain;
