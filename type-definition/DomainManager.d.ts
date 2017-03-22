import DomainKeyActionReducerMap from './types/DomainKeyActionReducerMap';
import DomainKeyDefaultStateMap from './types/DomainKeyDefaultStateMap';
import { Store } from 'redux';
import ActionSagaDefinitions from './types/ActionSagaDefinitions';
import KeyDomainMap from './types/KeyDomainMap';
export declare type RootState<T extends KeyDomainMap> = {
    [K in keyof T]: T[K]['state'];
};
export default class DomainManager<T extends KeyDomainMap, RS extends RootState<T>> {
    readonly domains: T;
    store: Store<any>;
    constructor(domains: T);
    readonly rootState: RS;
    resetAllStates(): void;
    getReducers(): DomainKeyActionReducerMap;
    getDefaultStates(): DomainKeyDefaultStateMap;
    getSagas(): ActionSagaDefinitions;
}
