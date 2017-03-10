# Providers

Provider
  - name: string
  - decorator: Function
  - collector: (domains: Domains): any

DomainMethodProvider.register('reducer', Function, Collector);
DomainMethodProvider.register('saga', Function, Collector);

domainBundle.providerCollect(name: string);

# Implemented providers:

reducer Provider (reducer)
saga Provider (redux-saga)

# Explanation

The decorator is which decorate a method and register some data on the instance in an own key.
