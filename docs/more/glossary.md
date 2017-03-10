## Glossary

https://github.com/reactjs/redux/blob/master/docs/Glossary.md

Before we go into details here some definitions of the most important terms and how they relate to redux-domain:

### action
In redux an action is an object which can be dispatched to the store.
It usually contains a type, payload and meta (metadata).
```JS
{type: string, payload: any, meta: any}
```
However only "type" is required which is knows as the **action type**.
To make it more complicated the term "action" often refers to the **action type** or a
constant which contains the string.

Package which try to establish a standard: https://github.com/acdlite/flux-standard-action

We use the term **action** when we mean an action object of any type.

## action object
The full qualified term which refers definitely to the object showed under the "action" section since the term
**action** can be used for multiple things.

### action type
See under "action"

### action creator
This is a function which take some custom arguments and create an **action object**

### action method (redux-domain specific)
This refers to the Domain instance methods which are annotated at least with the @action decorator.
The method itself acts as payload creator, so it takes some custom arguments and return the **payload property** for the **action object**.

### selector methods
This refers to the Domain instance methods which return a specific part of the domain state.
They are either not annotated or annotated with the @reselect decorator to cache complex queries.

### handler
The term **handler** refers to either a **reducer** or a **saga** which handles a certain **action type** dispatched to the store.
```JS
@reducer(Reducer) // Reducer = the handler
@saga(Saga) // Saga = the handler
```

### domain (redux-domain specific)
The class which should be extended and filled with:

Main functionality:
- several **action methods** (and a certain **handler** which handle the action)
- several **selector methods** (optionally decorated with @reselect to cache queries)
- **static defaultState property** which define the initial domains state

### domain bundle (redux-domain specific)
A class which receives **one or many extended domain instances** as constructor argument
It provide methods to access all domains and make basic actions on them.

Main functionality:
- get all reducers which should be combined and registered to the **redux store**
- get all sagas which should be registered in parallel to the **saga middleware**
- access the **domains** trough the **domains property** when working with them
- the **store** property is used by all underlying **domains** to dispatch actions and access the state
