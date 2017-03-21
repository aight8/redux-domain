# redux-domain (WIP)

> Manage your redux store, reducers, sagas in domains.

[![Dependency Status](https://www.versioneye.com/user/projects/58c1f4746d852a00129065cc/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/58c1f4746d852a00129065cc)
[![Build Status](https://travis-ci.org/aight8/redux-domain.svg?branch=master)](https://travis-ci.org/aight8/redux-domain)
[![NPM downloads](https://img.shields.io/npm/dm/redux-domain.svg)](https://npmjs.org/package/redux-domain)
[![NPM version](https://img.shields.io/npm/v/redux-domain.svg)](https://npmjs.org/package/redux-domain)

redux-domain was created to get rid of the cluttered redux project structure. It improves the productivity massively by solving dozens of problems by design, which the most redux developer is fighting against sooner or later. A lot of API variation are tried out, redux-ace and many other libraries was observed heavily. redux-domain is the result of this research.

It was from ground up designed to work well in TypeScript and flow. Some design decisions were made to support those static analysers completely.

## Concept

Many ```Domain``` -> ```DomainManager``` -> ```UserState```

You implement as many ```Domain``` subclasses as you need. All of them contains all the functionality which the particular part of your application needs. All domains will get passed to the ```DomainManager``` which acts as a container to access your domains and fetch the registered **reducers**, **sagas** and the **default state** of all domains.
Until now, no state exists at all. The ```UserState``` creates a populated redux store (using ```combineReducers``` and ```handleActions``` from redux/redux-actions) with a redux-saga middleware.

## Overview

First a small overview about the object types for orientation.

### Domains
**Domains** are classes which extend the base ```Domain``` class. They implement **action methods** and **selector methods** to altering and fetching the domains state.

See [Domain examples](a) / [Domain API](a)

### DomainManager
**DomainManager** provides functions to collect all **reducers**, **sagas** and **default states** from all domains. It referencing it's own store to the domains.

See [DomainManager examples](a) / [DomainManager API](a)

### UserState
**UserState** is a very flexibel implementation how to implement the domain manager. It is an isolated object which could initialized as often you want. It creates the redux store with the saga middleware and run the root saga. **All requirements** are fetched through the domain managers API.
It provides an interface to interact with the created root saga.

It options allows to:
- Integrates common dev tools easily (**DevTools browser extension**, **Reactotron**)
- Set the redux preloaded state
- Define additional store middlewares and enhancers

See [UserState examples](a) / [UserState API](a)

# Demo

Before we go into detail, just try to understand the following demo (using immutable as sub state):

## 1. Definition

```JS
import { Domain, reduxAction, sagaAction } from 'redux-domain'
import { Map } from 'immutable'
import { call, put } from 'redux-saga/effects'
import MyApplicationApi from '../api/my-application-api'

type Product = Map<>;

class ProductDomain extends Domain<Product> {
   defaultState: Map()
   actionNamespace: "PRODUCT"

   *startupSaga() {
       const products = yield call(MyApplicationApi.getCommonProducts, id)
       for (let i in products) {
         yield put(this.set(products[i]).action)
       }
   }

   @reduxAction<ProductDomain>('SET',  function(user) {
      return this.state.set(user.id, user)
   })
   set(user) {
      return user;
   }

   @sagaAction<ProductDomain>('FETCH', function*(id) {
      const product = yield call(MyApplicationApi.getProduct, id)
      yield put(this.set(product).action)
   })
   fetch(id) {
       return id;
   }
}

const dm = new DomainManager({
   product: new ProductDomain()
})

const userState = new UserState(dm)
```

## 2. Using

```JS
await userState.finalizeRootSaga() // -> Promise

userState.domains.product.resetStore() // -> void

userState.domains.product.set.actionType // -> The redux action action type
userState.domains.product.fetch.actionType // -> The redux action action type

const setAction = userState.domains.product.set({ id: 15, name: 'Apple' }); // -> ActionInterface
setAction.dispatch() // -> void
setAction.dispatchSync() // -> Promise
setAction.action // -> The built redux action object

const fetchAction = userState.domains.product.fetch(15) // -> ActionInterface
fetchAction.dispatch() // -> void
fetchAction.dispatchSync() // -> Promise
fetchAction.action // -> The built redux action object

userState.resetStore();
```

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


### Type of methods

#### Action creators

Accepts custom defined arguments and return the actions **payload**

**Default:** if return value is undefined the payload is an empty object

Usable decorators: **@action** + optionally **@reducer** or **@saga**

#### Simple selector

Accepts custom defined arguments and return values from the store

It requires no decorators, it's a simple method which uses ```this.state``` or ```this.rootState``` to fetch some values.

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
