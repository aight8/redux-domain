# **Overview** of all exports

{% plantuml %}
@startuml

skinparam dpi 300
skinparam shadowing false

skinparam usecase {
	arrowColor #333
	arrowFontColor #333
    arrowFontSize 10
    arrowThickness 2
}

skinparam stereotypeCBackgroundColor #FAFAFA
skinparam classBackgroundColor #FFF
skinparam classBorderColor #333

class UserState {
  +domainManager: DomainManager
}
class DomainManager {
  +domains: KeyDomainMap
  +store: Store
  +state: any
  +constructor(KeyDomainMap domains)
  +getReducers()
  +getSagas()
  +resetAllStates()
}
class Domain {
  +store: Store
  +state: any
  +rootState: any
  +constructor()
  +getAllReducers(): ActionReducerMap
  +getAllSagas(): ActionSagaMap
  +resetStore(): void
}
DomainManager -right-|> Domain : has many
UserState -right-|> DomainManager : has one
@enduml
{% endplantuml %}

This is an overview of all ```exports``` of ```redux-domain```
The numbering is only there for orientation - it helpts on bigger documents.

## High-level classes

| Name | Links | Description |
| --- | --- | --- |
| UserState | [UserState API](api/UserState.md) | |
| DomainManager | [DomainManager API](api/DomainManager.md) | It receives all implemented domains and has following job<br>1. set the **store** and **key** on all domains<br>2. collect **reducers** and **sagas** from all domains. And of course it provides a public property ```domains``` which contains all the domains. |
| Domain | [Domain API](api/Domain.md) | The ```Domain``` is an **abstract class** which must extended by any domain subclasses. |

1. UserState
3. DomainManager
2. Domain | 

## Decorators (for Domain subclass methods)

- **reducerAction** - ```reducerAction``` decorated an **action method** on the **domain subclass**.
It defines the **action type** and a **reducer** which handles it.
So it is the shorthand of using the ```action``` and ```reducer``` decorator together.

- **sagaAction** - ```sagaAction``` 

## Models

**Action** - Any **action method** on the domain class **returns the payload by default** because most time you don't want to set anything else. The **type** is set automatically.
If you want to define the whole action object (```payload```, ```meta```, ```error``` properties or even others if you dont care about standards) then you must return an ```Action``` object. Just type ```return Action({ payload: {}, meta: { /*...*/ } })``` - without **new** - we decide that because this is shorter.
The ```type``` property will be set automatically, when you set it, it throws an error.

## Low-level decorators (for Domain subclass methods)

**action** - ```action``` is a **decorator** which sets the **action type** of the decorated action method.
*Notes: You can use this decorator if you only want to dispatch the action but not handle it (maybe handle it somewhere else outside of the domain) - Otherwise use the ```reducerAction``` or ```sagaAction``` decorator*

**reducer** - ```reducer``` is a **decorator** which register a **reducer** to the decorated action method.
It requires a preceding ```action``` decorator.
*Notes: Since you can't register only a reducer without a defined action type, use the ```reducerAction``` instead.*
*This decorator is present for the sake of completeness.*

**saga** - ```saga``` is a **decorator** which register a **saga** to the decorated action method.
It requires a preceding ```action``` decorator.
*Notes: Since you can't register only a saga without a defined action type, use the ```reducerAction``` instead.*
*This decorator is present for the sake of completeness.*

#Low-level functions

**getCallbackOptionsFromAction** - If you dispatch an action synchronously some callback functions are passed to the action meta property. This function returns those callbacks otherwise an empty function. On this way you can ensure you have some functions.

## Extras

**ApiRequestPool** - This class provides an abstract way to communicate with any API's and is based on axios.
This class is in this package for convenience. No joke.
It is similar to the **apisauce** package (https://github.com/skellock/apisauce) but it has no heavy dependencies to ramda etc.

## Typescript

**ActionInterface** - why??
