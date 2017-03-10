# UserState
Features:


## Methods

| Prefix            | Method                                   | Description                              |
| ----------------- | ---------------------------------------- | ---------------------------------------- |
| public            | ```constructor(options?: UserStoreOptions)``` | 1. Merges the passed ```options``` with the default options.<br>2.  |
| public **static** | ```createWithDomainManager(domainManager: DomainManager<any>, options?: UserStoreOptions)``` | Static factory method which creates a new ```UserState``` by loading **reducers**/**sagas**/**defaultStates** from the ```DomainManager``` (using the collector methods) and merges the generated ```reducer``` and ```rootSaga``` option to the other ```options``` (second argument).<br>Notes: The results of the ```DomainManager``` collector functions are transformed with the ```createReducer``` and ```createRootSaga``` helpers functions to the final ```reducer``` and ```rootSaga``` option. |
| public            | ```startRootSaga()```                    | Start the ```rootSaga``` which is passed in the options on the sagaMiddleware. If the saga is already running it throws an exception. |
| public **async**  | ```finalizeSaga(restart: boolean = true)``` | Dispatch the built-in ```END``` action *(redux-saga)* and await until all tasks in the root task has completed - by waiting for ```sagaRootTask.done```. Then start a fresh ```rootSaga``` automatically if restart param is true **(it is by default)**. |


## UserStoreOptions

| Property                               | Description                              | Default               |
| -------------------------------------- | ---------------------------------------- | --------------------- |
| ```reducer?: Reducer<any>``` | The ```final reducer``` which will passed to the ```createStore``` *(redux)* | ```() => ({})``` |
| ```middlewares?: Middleware[]``` | Array of middlewares which are mapped with ```applyMiddleware``` *(redux)* and the result is passed to the **enhancer compose function** | ```[]``` |
| ```enhancers?: StoreEnhancer<any>[]``` | Array of ```enhancers``` which will passed to the **enhancer compose function** and the result to ```createStore``` *(redux)* | ```[]``` |
| ```rootSaga?: () => SagaIterator``` | The **root saga** which will passed to ```sagaMiddleware.run(saga: Saga)``` | ```function*() { }``` |
| ```preloadedState?: any``` | The ```preloadedState``` which will passed to the ```createStore``` *(redux)* function | ```{}``` |
| ```reduxDevToolsCompose?: boolean```| If ```true```:<br>Uses ```window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__``` *(redux-devtools-extension browser extension)* as **enhancer compose function** if exists, otherwise the basic ```compose``` *(redux)* | ```true``` |
| ```reactotron?: boolean```| If ```true```:<br>1. Use ```Reactotron.createStore``` instead of ```createStore``` *(redux)* to create the redux store.<br>2. Set ```Reactotron.createSagaMonitor``` to the ```sagaMiddleware``` options (```sagaMonitor``` option property). | ```false``` |
