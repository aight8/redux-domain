# Decisions

# Software Design

# Incompatibility / Problems

There are some things which are currently NOT flow compatible.
The reasons for this is that this library heavily based on decorators, but decorators
are not supported by flow. Flow can only ignore them.
The method signature of the methods are altered.

```JS
@reducer(function(state, payload) {})
@action('USER/FETCH')
domainBundle.domains.user.fetch(id: int)
```
This returns the payload or nothing in flow.

In real the ```@action``` decorator overrides the method's property descriptor to return following:
```JS
{
  action: Action,
  dispatch: function() {
    // Do something like (Pseudocode):
    this.store.dispatch(this.action);
  },
  dispatchSync: function() {
    // Do something like (Pseudocode):
    return Promise((resolve, reject) => {
        let actionWithCallbacks = this.action);
        actionWithCallbacks.meta.callbacks = {
          resolve: () => { resolve() },
          reject: (err) => { reject(err) },
        }
        this.store.dispatch(this.action);
    })
  },
}
```

## Why?

It was priority to have some flow validation/autocompletion for:
- Method signature of action and selector methods
- List and autocomplete available methods on a domain
- Implement a sync variant of the dispatcher (for using with redux-form and many more)
  This solves a big problem on a very nice way.
