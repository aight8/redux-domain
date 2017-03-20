import ActionSagaMap from './types/ActionSagaMap';
import ActionReducerMap from './types/ActionReducerMap';
import ActionReducerOrSagaMap from './types/ActionReducerOrSagaMap';
import { Store } from 'redux';
declare abstract class Domain<StateType> {
    static key: string;
    private _key;
    key: string;
    store: Store<any> | null;
    readonly defaultState: StateType;
    protected handlers: ActionReducerOrSagaMap;
    constructor();
    readonly state: StateType;
    readonly rootState: any;
    resetStore(): void;
    getAllReducers(): ActionReducerMap;
    getAllSagas(): ActionSagaMap;
}
export default Domain;
