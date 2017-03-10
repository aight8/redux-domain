/*if (!('window' in global)) {
    global['window'] = { navigator: { userAgent: 'nodejs' } };
}*/

import {
    applyMiddleware,
    compose,
    createStore,
    Dispatch,
    Middleware,
    MiddlewareAPI,
    Reducer,
    Store,
    StoreEnhancer
} from 'redux'
import {
    default as createSagaMiddleware,
    END,
    SagaIterator,
    SagaMiddleware,
    Task
} from 'redux-saga'
import DomainManager from './DomainManager'
import Saga from './types/Saga'
import createReducer from './helpers/createReducer'
import createReducerImmutable from './helpers/createReducerImmutable'
import createRootSaga from './helpers/createRootSaga'
import KeyDomainMap from './types/KeyDomainMap'

interface WindowWithReduxDevTools {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

function isWindowWithReduxDevTools(window: any): window is WindowWithReduxDevTools {
    return typeof window === 'object' &&
           typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function';
}

export interface UserStoreOptions {
    // redux related
    reducer?: Reducer<any>;
    preloadedState?: any;
    middlewares?: Middleware[];
    enhancers?: StoreEnhancer<any>[];

    // dev tools
    reduxDevToolsCompose?: boolean;
    reactotron?: boolean;

    // redux-saga related
    rootSaga?: () => SagaIterator;
};

export default class UserStore<DM extends DomainManager<any, any>> {
    public readonly store: Store<any>;

    private sagaMiddleware: SagaMiddleware;
    private sagaRootTask: Task;

    constructor(
        private options?: UserStoreOptions,
        public readonly domainManager?: DM
    ) {
        const defaultOptions: UserStoreOptions = {
            reducer: () => ({}),
            preloadedState: {},
            middlewares: [],
            enhancers: [],
            rootSaga: function*() { },
            reduxDevToolsCompose: true,
            reactotron: false,
        };

        let optionsByDomainManager = {};
        if (this.domainManager) {
            optionsByDomainManager = new.target.generateOptionsByDomainManager(this.domainManager);
        }
        
        this.options = Object.assign({}, defaultOptions, options, optionsByDomainManager);

        let createStoreFn = createStore;
        let composeFn: any = compose;
        let sagaMiddlewareOptions: any = {};

        if (
            this.options.reduxDevToolsCompose === true &&
            isWindowWithReduxDevTools(window)
        ) {
            composeFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
        }

        if (this.options.reactotron === true) {
            if (typeof Reactotron.createStore !== 'function') {
                throw new Error(`Reactotron must 'use' reactotron-redux plugin.`);
            }
            if (typeof Reactotron.createSagaMonitor !== 'function') {
                throw new Error(`Reactotron must 'use' reactotron-redux-saga plugin.`);
            }

            createStoreFn = Reactotron.createStore;
            sagaMiddlewareOptions = {
                sagaMonitor: Reactotron.createSagaMonitor(),
                // onError: unhandled exceptions for a saga
            };
        }

        //sagaMiddlewareOptions.onError = function() {}
        sagaMiddlewareOptions.emitter = emit => {
            return action => {
                emit(action);
                console.log('saga emit', action.type);
            }
        }

        this.sagaMiddleware = createSagaMiddleware(sagaMiddlewareOptions);

        let middlewares = [
            ...this.options.middlewares,
            this.sagaMiddleware,
        ];

        let composedEnhancer = composeFn(...[
            ...middlewares.map(middleware => applyMiddleware(middleware)),
            ...this.options.enhancers,
        ]);

        this.store = createStoreFn(
            this.options.reducer,
            this.options.preloadedState,
            composedEnhancer,
        );

        this.startRootSaga();

        domainManager.store = this.store;
    }

    private static generateOptionsByDomainManager(
        domainManager: DomainManager<any, any>
    ) {
        const domainReducer = domainManager.getReducers();
        const domainDefaultStates = domainManager.getDefaultStates();
        const domainSaga = domainManager.getSagas();

        const reducer = createReducer(domainReducer, domainDefaultStates/*, options.reducer*/);
        const rootSaga = createRootSaga(domainSaga/*, options.rootSaga*/);

        return {
            reducer,
            rootSaga,
        };
    }

    /**
     * Run the configured root saga from the options.
     */
    public startRootSaga() {
        if (this.sagaRootTask && this.sagaRootTask.isRunning()) {
            throw new Error('Cannot start root saga because it is already running.');
        }
        this.sagaRootTask = this.sagaMiddleware.run(this.options.rootSaga);
    }

    /**
     * Dispatches the END (redux-saga) action and waits until all tasks in the root task are finished.
     * Then start a fresh root saga automatically if restart param is true (default).
     */
    async finalizeSaga(restart: boolean = true) {
        this.store.dispatch(END);

        const rootTaskResult = await this.sagaRootTask.done;
        if (restart === true) {
            this.startRootSaga();
        }

        return rootTaskResult;
    }
}

/**
 * this.store.replaceReducer(this.options.reducer);
 */

// createReducerImmutable

/*function(middlewareAPI) {
    return next => {
        return action => {
            //console.log(action);
            //console.log(1, middlewareAPI.getState());
            let returnValue = next(action);
            //console.log('returnValue', returnValue);
            console.dir(middlewareAPI.getState(), { colors: true, depth: 10, });
            return returnValue;
        }
    }
},*/