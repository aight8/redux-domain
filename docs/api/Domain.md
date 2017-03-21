---
description: This is a short description of my page
---

# Domain

The ```Domain``` is an **abstract class** which must extended by every domain subclass.
It provides the basic functionality for domains.

## Methods

| Prefix | Method | Description |
| --- | --- | --- |
| public | ```constructor()``` | No parameters. |
| public | ```getAllReducers(): ActionReducerMap``` | This method can be used to get all reducers of the domain. It is called by the DomainManager on all domain instances.<br>*Notes: Beside of the own reducers one additional reducer is added: ```'@@' + this.key + '/RESET'``` - this reducer is used by ```resetState``` and resets the store to the specified ```defaultState```* |
| public | ```getAllSagas(): ActionSagaMap``` | This method can be used to get all sagas of the domain. It is called by the DomainManager on all domain instances. |
| public | ```resetState(): void``` | **store property must be set from outside.**<br>This method dispatches an action of type ```'@@' + this.key + '/RESET'``` which reset the current domain state to ```defaultState```. The particular reducer is contained in ```getAllReducers```. |

## Properties

| Prefix | Property name | Description |
| --- | --- | --- |
| static public | ```key``` | The key is the property under which the **domain state** is stored in the **redux store state**. You don't have to set this if you use the **DomainManager**, otherwise it overrides the **domain key** which is defined in the **DomainManager** (don't know any use case for that).<br>*Notes: It represents the key in ```combineReducers({ <key>: <reducer>})```* |
| public | ```defaultState``` | The **defaultState** is the initial domain state in the redux store. This should be passed to ```handleActions({ <actionType>: <reducer>}, <initialState>)```. |
| public | ```store``` | The store which is used to **dispatch actions** and **access the store state**.<br>*Notes: The **DomainManager** sets this property automatically if the **store property** is set there. To be more specific: It sets a getter property which points to it's own store property. The store normally never changes during lifetime but it is implemented this way just because it feels cleaner.* |
| protected getter | ```rootState``` | **store property must be set from outside.**<br>The whole store state. This property should be used by any methods which access the root store state.<br>*Notes: Use this patiently because it gives you access to everything outside of the scope of the current domain.* |
| protected getter | ```state``` | **store property must be set from outside.**<br>The store state of the current domain. This property should be used by any methods which access the store state. |
| protected | ```handlers``` | This property contains **additional action handlers** which are added to the ```getAllSagas``` or ```getAllReducers``` return value. It must have following format:  ```{actionType: reducer/saga}```, depending of the value it is recognized as **reducer or a saga**. This allows it to register **reducers** or **sagas** which listen to an external **action type**. For reducers this should be avoided because **reducers should be domain based** and **only one reducer can be exists per action type** (maybe there are other use cases). However it is much more common that a **saga listen to an external action type** - as a kind of a event system. |

## Method decorators

Below is a table which document all available decorators which can be used.
Every of them affects that the original method returns an **ActionInterface**

| Decorator | Description |
| --- | --- |
| ```action<T>(actionType)``` | Wraps the **action method**, arguments stays the same but the method becomes an **ActionInterface**. The decorated method returns one of: 1. Any value which becomes the payload<br>2. ```return Action(payload, meta, error)``` which allows it to set more than the payload. The ```type``` is set automatically.<br>If you use **Typescript or Flow** you should **always** return with ```Action``` because it mocks the ```ActionInterface``` as workaround - until flow/ts does not support method signature overriding. Otherwise you must cast the return value - this is ugly or you can forget it. |
| ```sagaAction<T>(actionType, SmartSaga)``` | ```sagaAction``` decorated an **action method**.<br>It defines **an action type** and a **saga** which handles it.<br>This is a shortcut of using the ```@action``` and ```@saga``` decorator together and is the recommended usage. |
| ```reducerAction<T>(actionType, SmartReducer)``` | ```reducerAction``` decorates an **action method**.<br>It defines **an UNIQUE action type** and a **reducer** which handles it.<br>This is a shortcut of using the ```@action``` and ```@reducer``` decorator together and is the recommended usage. |

## Additional relevant classes/functions

| Name | Description |
| --- | --- |
| ```Action(payload?, meta?, error?)``` | A function which creates a ```ActionInterfaceMockAction``` object and can be returned by an action method. See the ```@action``` decorator to understand why to use it. |

## Types

```TS
// Return value of domain methods which are decorated with @action or any derivates
class ActionInterface<Payload, Meta> {
  action: FluxStandardAction<Payload, Meta>;
  dispatch: Function;
  dispatchSync: () => Promise<any>;
}

// The second argument of @sagaAction (or the first of @saga)
type SmartSaga<Payload> = (payload?: Payload, action?: FluxStandardAction<Payload, any>) => SagaIterator;

// The second argument of @reducerAction (or the first of @reducer)
type SmartReducer<State, Payload> = (payload?: Payload, action?: FSA<Payload, any>) => State;

// Domain.prototype.getAllReducers return value
interface ActionReducerMap {
  [actionType: string]: Reducer<any>
};

// Domain.prototype.getAllSagas return value
interface ActionSagaMap {
  [actionType: string]: Saga
};

// Domain.prototype.handlers
interface ActionReducerOrSagaMap {
  [actionType: string]: Saga|Reducer<any>
};
```

## Examples

**Important!!!**
Normally you just implement a domain and pass it with all other domains to the **DomainManager** constructor.

To **dispatch actions** or **access the store** we have to set the store manually in this example.
Additionally the ```key``` static property should be set (it is however only used by ```state``` getter property, ```getAllReducers``` and ```resetState``` methods).

We skip examples with ```@reducer``` and ```@saga``` decorators because it has the same signature than the combined ```@reducerAction``` or ```@sagaAction``` but without the **action type** argument.

### Possibilities (pseudo JS code)
```JS
import { Domain, reducerAction, sagaAction, action, Action } from 'redux-domain'
const store = {}; // The redux store

class TestDomain extends Domain {
  static key = 'test'; // Because this example don't use the DomainManager.
  defaultState = {};

  // sagas, reducers, selectors can access the state as following:
  // this.state = The current domain state
  // this.rootState = The whole redux state

  // 1. Action method + saga handler
  @sagaAction('ACTION_TYPE', function(payload, action) {
    // yield effects...
    // a special use case is put, use it like:
    yield put(this.anotherAction(123).action);
  })
  // 2. Action method + reducer handler
  @reducerAction('ACTION_TYPE', function(payload, action) {
    return this.state;
  })
  // 3. Action method only (to dispatch action but don't handle it)
  @action('ACTION_TYPE')
  theActionMethod(arg1, arg2, arg3) {
    // 1. Return an Action (for Typescript/Flow support or if you want define ther other action properties)
    return Action(ACTION_PAYLOAD?, ACTION_META?, ACTION_ERROR?);
    // 2. Any other value becomes the payload (even undefined)
    return { /* .. */ };
    return 42;
  }

  // Simple selectors - the way how you access a specific part of the domain store state
  getById(id) {
    return this.state[id];
  }

  constructor() {
    // For special use cases yo:
    this.handlers = {
      'EXTERNAL/1_SAGA': function*(action) { // The signature is the native saga one!
        // Because this is a generator this becomes a saga
        // Listen to any external action and dispatch this saga (like an event system)
      },
      'EXTERNAL/2_REDUCER': function(state, action) { // The signature is the native redux one!
        // Because this is a normal function this becomes a reducer
        // Don't ask me why you should do that, but it's possible if someone reeeally need it.
      },
    };
  }
}

const testDomain = new TestDomain();
testDomain.store = store; // Because this example don't use the DomainManager

testDomain.theActionMethod('myparam1', 123, 'param3'); // This returns the ActionInterface
testDomain.theActionMethod('myparam1', 123, 'param3').dispatch();
testDomain.theActionMethod('myparam1', 123, 'param3').dispatchSync().then(...).catch(...);
testDomain.theActionMethod('myparam1', 123, 'param3').action; // The created action how it will dispatched

testDomain.resetState(); // Built-in action and reducer to reset the state to defined defaultState
testDomain.getAllReducers(); // Collects all reducers (used by DomainManager)
testDomain.getAllSagas(); // Collects all sagas (used by DomainManager)
testDomain.defaultState; // The set default state

// These properties are NOT accessable from public (create getter methods instead)
testDomain.rootState;
testDomain.state;

// Better:
testDomain.getById(12);
```

**Note:** ```@reducerAction``` (also @reducer) has another Reducer signature (see SmartReducer) than than the native redux one!
Because in most use case only the ```payload``` is used, we pass the ```payload``` as the **first argument**.
The **second argument** is the whole action if you need it.
The **state** is not required because you can access the state with ```this.state```.
Keep in mind to not use the arrow function syntax because of the function scope!

```JS
// native redux reducer
function(state, action) {
    // state = the sub-state if combineReducers used, otherwise the whole state
    // action = The whole action object
    return newState;
}

// @reducerAction/@reducer Reducer
function() {
    // this.state
    return newState;
}
function(payload) {
    // this.state
    return newState;
}
function(payload, action) {
    // this.state = The domain state
    // this.rootState = The whole redux store state
    // action = The whole action object
    return newState;
}
```

The same applies for ```@sagaAction``` (and @saga). Instead of the action it has the ```payload``` as first argument and the whole ```action``` as second.

```JS
// native saga handler
function(action) {
    // yield ...
}

// @sagaAction/@saga Saga
function() {
    // yield ...
}
function(payload) {
    // yield ...
}
function(payload, action) {
    // yield ...
}
```

### Typescript (just leave the typescript specific annotations away in pure JS)
```JS
import { Domain, reducerAction, sagaAction, Action } from 'redux-domain'

type State = any;

class DomainA extends Domain<State> {
  static defaultState = {};

  @reducerAction<DomainA>('DOMAIN_A/SET', function(state, payload) {
    // ...
    return newState;
  })
  set(id, data) {
    return data;
  }

  @sagaAction<DomainA>('DOMAIN_A/FETCH', function*(payload) {
    // ...
    const user = yield call(fetchUser);
    yield this.set();
  })
  fetch(id) {
    
  }
}

// store is the redux store object

const domainA = new DomainA();
domainA.store = store;
domainA.set();

```
