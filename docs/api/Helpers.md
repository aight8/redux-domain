```JS
import { createStore, combineReducers, combine, applyMiddleware } from 'redux'
import { handleActions } from 'redux-actions'
import { createSagaMiddleware, takeLatest, call } from 'redux-saga'

/** Reducer generation */
const FINAL_REDUCER = combineReducers({
    'DOMAIN_A_KEY': handleActions({
        'DOMAIN_A/REDUCER_1': (state, action) => {
            (function(payload, action) { // reducerWrapper
                // SCOPE is bound to the domain instance
                //
                // The reducer defined in the @reducerAction (or @reducer) decorator
                // or Domain.prototype.handlers property
                //
            })(action.payload, action);
        },
        'DOMAIN_A/REDUCER_2': (state, action) =>  {
            (function(payload, action) {
                // ...
            })(action.payload, action);
        },
        '@@DOMAIN_A/RESET': (state, action) => { // Built-in reset reducer
            (function(state, action) {
                // SCOPE is bound to the domain instance
                //
                return this.defaultState;
            })(state, action);
        },
    }, DOMAIN_A_DEFAULT_STATE),
    'DOMAIN_B_KEY': handleActions({
        'DOMAIN_B/REDUCER_1': (state, action) => {
            (function(payload, action) {
                // ...
            })(action.payload, action);
        },
        '@@DOMAIN_B/RESET': (state, action) => { // Built-in reset reducer
            (function(state, action) {
                return this.defaultState;
            })(state, action);
        },
    }, DOMAIN_B_DEFAULT_STATE),
});

/** Root Saga generation */
const ROOT_SAGA = function*() {
    yield [
        takeLatest('DOMAIN_A/SAGA_1', function*(action) {
            const callbacks = { // outsourced in: getCallbackOptionsFromAction(action)
                resolve: action.meta.callbacks && action.meta.callbacks.resolve || (() => {}),
                reject: action.meta.callbacks && action.meta.callbacks.reject || (() => {}),
            };
            try {
                const returnValue = yield call(function*() {
                    // SCOPE is bound to the domain instance
                    // 
                    // The saga defined in the @sagaAction (or @saga) decorator
                    // or Domain.prototype.handlers property
                    //
                }, action);
                callbacks.resolve(returnValue);
            } catch (ex) {
                callbacks.reject(ex);
                throw ex;
            }
        }),
    ];
}

/** Store Enhancers preparation */
const MONITOR = { /*...*/ };
const SAGA_MIDDLEWARE_OPTIONS = {
    sagaMonitor: MONITOR,
};
const SAGA_MIDDLEWARE = createSagaMiddleware(SAGA_MIDDLEWARE_OPTIONS);
const ENHANCERS = combine(...[
    applyMiddleware(SAGA_MIDDLEWARE)
]);

/** Create redux store */
const store = createStore(FINAL_REDUCER, PRELOADED_STATE, ENHANCERS);

/** Run sagaMiddleware */
SAGA_MIDDLEWARE.run(ROOT_SAGA);
```