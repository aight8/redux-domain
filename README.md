# redux-domain

**Manage your redux store, reducers, sagas in domains.**

[![Dependency Status](https://www.versioneye.com/user/projects/58c1f4746d852a00129065cc/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/58c1f4746d852a00129065cc)

```redux-domain``` provide functionality to work with redux in a DRY manner.
The top level "User State" contains everything which is needed for a particular user session.
Because it is an new object it can be used on client side and server side.

## Object functionalities

### UserState
- **store** (redux)
  - **reducer**
  - **enhancers / middlewares**
  - **root initialState** (ex: provided by prerendered page)
- **sagaMiddleware**
- **rootSaga**

See [UserState examples](a) / [UserState API](a)

### DomainManager
- **get reducers** from all domains
- **get sagas** from all domains
- **reset store** to defaultState

See [DomainManager examples](a) / [DomainManager API](a)

### Domain (abstract class)
- **defaultState** (for the domain sub state)
- *action methods* (use @reduxAction, @sagaAction or @action)
- *selector methods* (no decorators, just access ```this.state```/```this.rootState```)
- **dispatch actions**
- **dispatch actions sync** (ex: for redux-form)

See [Domain examples](a) / [Domain API](a)

---

# Undearneath
This library uses some packages. To understand how it works underneath here the summary:

**redux** - Uses exports: applyMiddleware, combineReducers, compose, createStore, ~~bindActionCreators~~

**reduc-actions** - Uses exports: ~~combineActions~~, ~~createAction~~, ~~createActions~~, ~~handleAction~~, handleActions


# Other benefits

- Register action with a particular reducer or saga which handle it
- Well integrated flow/typescript autocompletion/validation for domains and actions
- No bindActionCreators in smart controllers anymore
- Register all reducers and sagas with an ease
  - Custom saga forker function for individual fork handling
- Dispatch sagas synchronously (for example for redux-form)
- Each domain have it own sub store (redux-actions)
- Built-in store reset action and reducer (all domains or just a specific store)

# The Domain

A domain contain following:
- It extends the Domain base class
- Methods can be:
  - Action creator - to simplify the method, the return value will become the **payload** (use @action decorator)
  - Implement a particular reducer or saga for an action with the @reducer or @saga decorator
  - A simple selector (just access ```this.state``` and return the desired value)
  - A memoized selector based on reselect package (use the @reselect decorator)
- The static defaultState property is the initial sub-state for the domain
  - The defaultState should be Typed
  - Built in action/reducer to reset the domain state to the initial state anytime

### Domain members

|                |                                          |                    |
| -------------- | ---------------------------------------- | ------------------ |
| state          | Return the current domain state (**store** required) | getter |
| rootState      | Return the current root state (**store** required) | getter   |
| store          | The redux store object                   | getter/setter      |
| defaultState   | The default state of the domains store   | **static** object  |
| key            | The key of the domain store              | **static** string  |
| handlers       | Additional handler which should be registerd. | object        |
| resetStore     | Resets the store to **defaultState**     | function           |
| getAllReducers | Returns all reducers of this domain      | function           |
| getAllSagas    | Returns all sagas of this domain         | function           |

### Type of methods

#### Action creators

Accepts custom defined arguments and return the actions **payload**

**Default:** if return value is undefined the payload is an empty object

Usable decorators: **@action** + optionally **@reducer** or **@saga**

#### Simple selector

Accepts custom defined arguments and return values from the store

It requires no decorators, it's a simple method which uses ```this.state``` or ```this.rootState``` to fetch some values.

#### Reselect selector

If use **@reselect** decorator the method receives all values gattered by inputSelectors in **@reselect** and it must return the final result.

**this** is undefined.

### Decorators

#### @reselect(inputSelectors: [] = [state => state], useRootState)

The method received the results of all input selectors and it should return the final calculated result.

#### @action(actionType: string)

Defines the action type of this method.

#### @reducer(reducer: (state: T, payload: {}) => {})

**<u>reducer</u>**: **this** is the member instance of the domain

#### @saga(saga: Generator<*, *, *>)

**<u>saga</u>**: **this** is the member instance of the domain

# The DomainBundle

The domain bundle contain all domain instances for the application
All domains must be passed in the constructor once and the domains cannot be modified once set.
The main reason for this is:
- Ensure well covered flow support
- Transparent code design with a central point of configuration without surprises

```JS
const createStore(() => {}, {});

const domainBundle = new DomainBundle({
  domainA: new DomainA(),
}, store);
```

# Using actions

There are one important difference when using **actions on domains** compared to the **bindActionCreators** method.
When you call your action creator it's not automatically dispatched.

It returns an ActionInterface which have following methods:
- **action(): ReduxAction**
  Returns the full action object inclusive the type which specified in the **@action** decorator
  This action can be used for testing and also to dispatch via saga's **put effect**
- **dispatch(): void**
  Dispatch the action to the store (the common way)
- **dispatchSync(): Promise**
  Can be ideally used with **redux-form** without any hacks
  Internal: Adds callback methods to the action meta data **(meta.callbacks.resolve|reject)**
  - The methods must be called in the saga **or better** in the saga wrapper
  - If you create your own saga wrapper you must call the callbacks your own!
  - Otherwise this promise will never resolved and you can't benefit from this functionality.
  - See the Advanced configuration section.

The disadvantage is that you must call an additional method (if you forget it it will not dispatch).
The advantages is that you should not care about binding and you exactly define what you want to do with the action, you can do everything in one common interface.

```JS

domainBundle.domains.user.set({ id: 123, name: 'Sebastian', }).dispatch();
domainBundle.domains.user.fetch(456).dispatch();
domainBundle.domains.user.fetch(456).dispatchSync().then(result => {

}).catch(error => {

});

```

# Advanced section

## Add reducers/sagas which handles actions from somewhere else

Because a method must be at least an action, custom handlers (reducer/saga) must be registered
separately.

The **handlers** property contains a map {[actionType:string]: FunctionOrGeneratorFunction}.
If the value is a function it will become to a reducer.
If the value is a generator function it will become a saga.

**Important:** The parameters are now contains the whole action method instead of the payload.
Because registration of handlers on this way is some special use case we give you full control now without sugar.

```JS
class DomainA extends Domain {
  // ...
  constructor(...args) {
    super(...args);

    this.handlers = {
      'THE_ACTION': function(state, action) {

      },
      'ANOTHER_ACTION': function*(action) {

      }
    };
  }
  // ...
}
```

## Add actions which will not handled by the domain itself

Just do:

```JS
class DomainA extends Domain {
  // ...
  @action('ONLY_ACTION')
  onlyAction() {

  }
  // ...
}
```

You can use the same dispatchable interface (action, dispatch, dispatchSync methods).
Keep in mind that dispatchSync expect that the callback methods are called -
otherwise the promise will never be resolved.
