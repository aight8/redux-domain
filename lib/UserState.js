var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports", "redux", "redux-saga", "./helpers/createReducer", "./helpers/createRootSaga"], function (require, exports, redux_1, redux_saga_1, createReducer_1, createRootSaga_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isWindowWithReduxDevTools(window) {
        return (typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function');
    }
    ;
    class UserStore {
        constructor(domainManager, options) {
            this.options = options;
            this.domainManager = domainManager;
            const defaultOptions = {
                reducer: () => ({}),
                preloadedState: {},
                middlewares: [],
                enhancers: [],
                rootSaga: function* () { },
                reduxDevToolsCompose: true,
                reactotron: false,
            };
            let optionsByDomainManager = {};
            if (this.domainManager) {
                optionsByDomainManager = new.target.generateOptionsByDomainManager(this.domainManager);
            }
            this.options = Object.assign({}, defaultOptions, options, optionsByDomainManager);
            let createStoreFn = redux_1.createStore;
            let composeFn = redux_1.compose;
            let sagaMiddlewareOptions = {};
            if (typeof (window) !== 'undefined' &&
                this.options.reduxDevToolsCompose === true &&
                isWindowWithReduxDevTools(window)) {
                composeFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
            }
            if (this.options.reactotron === true) {
                if (typeof Reactotron === 'undefined') {
                    throw new Error(`Reactotron object is not defined in the global scope.`);
                }
                if (typeof Reactotron.createStore !== 'function') {
                    throw new Error(`Reactotron must 'use' reactotron-redux plugin.`);
                }
                if (typeof Reactotron.createSagaMonitor !== 'function') {
                    throw new Error(`Reactotron must 'use' reactotron-redux-saga plugin.`);
                }
                createStoreFn = Reactotron.createStore;
                sagaMiddlewareOptions = {
                    sagaMonitor: Reactotron.createSagaMonitor(),
                };
            }
            sagaMiddlewareOptions.emitter = emit => {
                return action => {
                    emit(action);
                    console.log('saga emit', action.type);
                };
            };
            this._sagaMiddleware = redux_saga_1.default(sagaMiddlewareOptions);
            let middlewares = [
                ...this.options.middlewares,
                this._sagaMiddleware,
            ];
            let composedEnhancer = composeFn(...[
                ...this.options.enhancers,
                ...middlewares.map(middleware => redux_1.applyMiddleware(middleware)),
            ]);
            this.store = createStoreFn(this.options.reducer, this.options.preloadedState, composedEnhancer);
            this.startRootSaga();
            domainManager.store = this.store;
            if (process.env.NODE_ENV !== 'production' && typeof (window) !== 'undefined') {
                console.info('The current user state is exposed under the `userState` property on the window object.');
                window.userState = this;
            }
            this.store.dispatch({ type: '@@STARTUP' });
        }
        static generateOptionsByDomainManager(domainManager) {
            const domainReducer = domainManager.getReducers();
            const domainDefaultStates = domainManager.getDefaultStates();
            const domainSaga = domainManager.getSagas();
            const reducer = createReducer_1.default(domainReducer, domainDefaultStates);
            const rootSaga = createRootSaga_1.default(domainSaga);
            return {
                reducer,
                rootSaga,
            };
        }
        get rootSagaTask() {
            return this._rootSagaTask;
        }
        get state() {
            return this.store.getState();
        }
        get domains() {
            return this.domainManager.domains;
        }
        resetAllStates() {
            this.domainManager.resetAllStates();
        }
        startRootSaga() {
            if (this.rootSagaTask && this.rootSagaTask.isRunning()) {
                throw new Error('Cannot start root saga because it is already running.');
            }
            this._rootSagaTask = this._sagaMiddleware.run(this.options.rootSaga);
        }
        finalizeRootSaga(restart = true) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.rootSagaTask.isRunning()) {
                    return Promise.resolve();
                }
                this.store.dispatch(redux_saga_1.END);
                const rootTaskResult = yield this.rootSagaTask.done;
                if (restart === true) {
                    this.startRootSaga();
                }
                return rootTaskResult;
            });
        }
        getRootSagaStatus() {
            const running = this.rootSagaTask.isRunning();
            const cancelled = this.rootSagaTask.isCancelled();
            const error = this.rootSagaTask.error();
            const result = this.rootSagaTask.result();
            return {
                running,
                cancelled,
                error,
                result,
                toString() {
                    if (running) {
                        return 'Root saga is running.';
                    }
                    else if (cancelled) {
                        return 'Root saga has been cancelled.';
                    }
                    else if (result) {
                        return 'Root saga is not running, it returned ' + result;
                    }
                    else if (error) {
                        return 'Root saga is not running, it returned an error ' + error;
                    }
                    else {
                        return 'Root saga is not running';
                    }
                }
            };
        }
    }
    exports.default = UserStore;
});
