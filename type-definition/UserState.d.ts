import { Middleware, Reducer, Store, StoreEnhancer } from 'redux';
import { SagaIterator, Task } from 'redux-saga';
import DomainManager from './DomainManager';
export interface UserStoreOptions {
    reducer?: Reducer<any>;
    preloadedState?: any;
    middlewares?: Middleware[];
    enhancers?: StoreEnhancer<any>[];
    reduxDevToolsCompose?: boolean;
    reactotron?: boolean;
    rootSaga?: () => SagaIterator;
}
export default class UserStore<DM extends DomainManager<any, any>> {
    private options;
    readonly domainManager: DM;
    readonly store: Store<any>;
    private _sagaMiddleware;
    private _rootSagaTask;
    constructor(domainManager: DM, options?: UserStoreOptions);
    private static generateOptionsByDomainManager(domainManager);
    readonly rootSagaTask: Task;
    readonly state: any;
    readonly domains: any;
    resetAllStates(): void;
    startRootSaga(): void;
    finalizeRootSaga(restart?: boolean): Promise<any>;
    getRootSagaStatus(): {
        running: boolean;
        cancelled: boolean;
        error: any;
        result: any;
        toString(): string;
    };
}
