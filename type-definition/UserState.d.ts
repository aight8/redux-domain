import { Middleware, Reducer, Store, StoreEnhancer } from 'redux';
import { SagaIterator } from 'redux-saga';
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
    readonly domainManager: DM;
    private options;
    readonly store: Store<any>;
    private sagaMiddleware;
    private sagaRootTask;
    constructor(domainManager: DM, options?: UserStoreOptions);
    private static generateOptionsByDomainManager(domainManager);
    teeeest(): void;
    readonly rootState: any;
    startRootSaga(): void;
    finalizeSaga(restart?: boolean): Promise<any>;
}
