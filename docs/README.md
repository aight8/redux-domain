# Current situation

Traditionally you have to create:
- Action type constant
- Action creator (import action type constant)
- Reducers or Sagas
  - Reducers are typically created with helper libs like ```redux-actions``` or ```redux-act```
  - Sagas are managed by a custom implementation
In addition, more or less, all of those are in separate folders and files - it's just cluttered and it's difficult to have an overview

## Advantages with **redux-domain**:
- Create an **action** with a particular **handler** (reducer or saga) in a uniform way
- No more cluttered **action creator**/**action type constant**/**reducer**/**saga**
  Things which belongs together are now at the same place and you can **be sure** it's registered
- Full autocompletion support for all your domains and it actions (flow)
- No more ton of action creator imports in your component file
- Dispatch action's directly without use redux's **bindActionCreators**

# Demonstration how to implement a Domain

The example domain below demonstrates how you implement several use cases.
What is the benefit of using domains? There are many!

To appreciate the **benefits of domains** here a summary:

**Productivity demonstration:**

Fast overview of all your possibilities!

domainBundle./*<autoCompletion> - see all your domains*/
domainBundle.user./*<autoCompletion> - see all the possible actions in a domain*/
domainBundle.user.set({}); // reducer action
domainBundle.user.fetch(123); // saga action

If you go-to the definition of "set" or "fetch" method you see directly handler (reducer or saga),
and of course of the **action type** string.

## Disadvantages:


```JS
import { Domain } from 'redux-domain'
import { put } from 'redux-saga'

// Try to use flow types for better development experience (autocompletion and validation for methods)
type User = {/* ... */};

/**
 * Important generic notes and constrains:
 * - A method which uses the @action decorator can be decorated with exactly one
 *   @reducer OR exactly one @saga but not both
 * - The method body acts as "payload creator" instead of an "action creator"
 * - If the method returns nothing the payload is "null"
 *
 * Usage variants in short (full code examples are below!):
 *
 * // Pseudo type (not valid flow type):
 * DomainStateReducer = (state: DomainState, payload: Action.payload [, action: Action]) => DomainState
 * SagaFunctionGenerator = Generator(payload: Action.payload, action: Action)
 *
 * 1.
 * @reducer(DomainStateReducer)
 * @action(actionType: string)
 * (arg1, argN, ...) => ?Payload
 *
 * 2.
 * @reducer(SagaFunctionGenerator)
 * @action(actionType: string)
 * (arg1, argN, ...) => ?Payload
 *
 * 3.
 * @action(actionType: string)
 * (arg1, argN, ...) => ?Payload
 *
 * It's not possible to create a method which ONLY @reducer or @saga WITHOUT @action
 * A reducer needs an action anyway and saga's require an action as well here (Domain->getSagas returns ActionSagaMap!)
 * Furthermore this library should not contain to much magic / polymorphic stuff. means:
 * An instance method represents an action or selector and we don't want to mix it with reducers only stuff.
 *
 * If you want to register a handler which ONLY handles a certain actionType without
 *
 * Below are more @reducer/@saga decorator specific information
 */

class UserDomain extends Domain {
  /** Create a (actionType, actionCreator -> reducer) pair **
   *
   * - Use the reducer and action decorator, aware the order (1. reducer, 2. action)
   * - Reducer function:
   *    - Aware the reducer function signature (state, payload) instead (state, action) (same like in redux-act)
   *      If you need the action object (to access meta data or custom fields) the third argument
   *      contains the whole action object!
        - The return value is the new sate (same like plain redux)
   *    - "this" points to the domain instance (!DO NOT use anonymous function then!)
   */
  @reducer(function(state, payload/*, action */) {
      // create your new state
      let newState = Object.assign({}, state);

      // return the new state
      return newState;
  })
  @action('USER/SET')
  set(user: User) {
    return user;
    // This becomes:
    // { type: 'USER/FETCH', payload: <user> }
  }

  /** Create a (actionType, actionCreator -> reducer) pair WITHOUT payload
   *
   * If your handler don't require any data just create an empty method body
   * Because you don't need the state in the reducer neither,
   * you can just remove the parameters from the reducer function
   */
  @reducer(function() {
    return null;
  })
  @action('USER/UNSET')
  unset() {}

  /**
   * Same logic as the example above but in very short manner
   * Did you remember how much cluttered lines you need this previously? .. Ha Ha...
   */
   @reducer(() => null)
   @action('USER/UNSET_2')
   unset() {}

  /** Create a (actionType, actionCreator -> saga) pair **
   *
   * - Use the saga and action decorator, aware of the order (1. saga, 2. action)
   * - Saga function:
   *   - Aware the saga function signature (payload) instead (action)
   *     If you need the action object (to access data or custom fields) the second argument
   *     contains the whole action object!
   *   - "this" points to the domain instance (!DO NOT use anonymous function then!)
   *   - Saga effects work same as before, to use the put effect, below it is included in the example code
   */
  @saga(function*(payload/*, action*/) {
    // Some API call with identifier with saga call effect or whatever
    let user = {/*fetched from some API calls*/};

    // For example you can use the put effect to store data with a reducer
    yield put(this.set(user).action);
  })
  @action('USER/FETCH')
  fetch(id: number|string) {
    return id;
    // This becomes:
    // { type: 'USER/FETCH', payload: <id> }
  }

  /** Create an action which is not handled **
   *
   * - You can handle it in another domain or wherever
   * - Even if you could handle it by a "reducer" somewhere else, it's doubtful why someone
   *   would do that - because reducers should belong to the domain.
   *   However we kept the door open, so it's possible if someone would really need this.
   *   BTW: It's more common to handle it by a saga somewhere else as a kind of "event system".
   */
  @action('USER/SCREAM')
  scream(loud: boolean, key: string) {
    return { loud, key };
    // This becomes:
    // { type: 'USER/FETCH', payload: { loud: <loud>, key: <key> } }
  }

  /** Create a selector method which return a part of the state **
   *
   * This is a simple method which return value. Death simple.
   * The most important thing to know is:
   * - this.state = The current domain state
   * - this.rootState = The current root redux state
   */
  get(id: number): User|null {
    return this.state[id] || null;
    // return this.state.get(id); <- with ImmutableMap (immutable.js)
  }
}
```

# Basic Usage

1. Implement several domains (which extends the Domain class)
2. Create a DomainBundle which receives all Domain instances in the constructor
3. Fetch all reducers and sagas from the DomainBundle
  - Use the **domainBundle.getSagas** and the **domainBundle.getReducers** method
    which return all reducers/sagas from all domains
4. Create the redux store and populate it with the reducers and sagas
  -

# Suggested structure (Example)

domains/index.js:
  - domains/abc-domain.js
  - domains/n-domain.js

The domains folder contains for **each domain a file** which exports a class which extends the Domain class.
The index.js **imports all domains** and create a new **DomainBundle** instance with all domains.

# Integration
- redux (uses createStore, applyMiddleware)
- redux-actions (uses redux-reducers, handleActions)
- redux-saga (uses applyMiddleware)
- reselect

# Compatibility (verified)
- immutable (for domain state)
- seamless-immutable (for domain state)
