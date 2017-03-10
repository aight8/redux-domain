import { combineReducers, ReducersMapObject } from 'redux'
import ActionSagaMap from './types/ActionSagaMap'
import ActionReducerMap from './types/ActionReducerMap'
import DomainKeyActionReducerMap from './types/DomainKeyActionReducerMap'
import DomainKeyDefaultStateMap from './types/DomainKeyDefaultStateMap'
import { Store } from 'redux'
import { SagaIterator } from 'redux-saga'
import ActionSagaDefinitions from './types/ActionSagaDefinitions'
import KeyDomainMap from './types/KeyDomainMap'
import createBadUsageError from './errors/createBadUsageError'

type RootState<T extends KeyDomainMap> = {
  [K in keyof T]: T[K]['state'];
}

//  {[K in keyof T]: T[K]['state']}
export default class DomainManager<T extends KeyDomainMap, RS extends RootState<T>> {
  store: Store<any>;

  constructor(public readonly domains: T) {
    // The domain's store property becomes a getter which take automatically the
    // store set in the domain bundle instance
    for (let domainKey in this.domains) {
      let domain = this.domains[domainKey];
      domain.key = domainKey;
      Object.defineProperty(domain, 'store', {
        get: () => {
          return this.store;
        },
      });
    }
  }

  /**
   * Public access to the root state
   */
  public get rootState(): RS {
    if (!this.store) {
      throw createBadUsageError(
        `The DomainManager rootState getter requires a set 'store' property.`
      );
    }
    return this.store.getState();
  }

  /**
   * Built in reset functionality
   */
  resetAllStores(): void {
    Object.keys(this.domains).forEach(domainKey => {
      const domain = this.domains[domainKey];
      domain.resetStore();
    });
  }

  /**
   * Collector method: Return all reducers from all domains
   */
  getReducers() {
    let domainActionReducerMap: DomainKeyActionReducerMap = {};

    for (let domainKey in this.domains) {
      const domain = this.domains[domainKey];
      domainActionReducerMap[domain.key] = domain.getAllReducers();
    }

    return domainActionReducerMap;
  }

  /**
   * Collector method: Return all default states from all domains
   */
  getDefaultStates() {
    let domainDefaultStates: DomainKeyDefaultStateMap = {};

    for (let domainKey in this.domains) {
      const domain = this.domains[domainKey];
      domainDefaultStates[domain.key] = domain.defaultState;
    }

    return domainDefaultStates;
  }

  /**
   * Collector method: Return all sagas from all domains
   */
  getSagas() {
    let actionSagaDefinitions: ActionSagaDefinitions = [];

    for (let domainKey in this.domains) {
      const domain = this.domains[domainKey];
      const domainSagas = domain.getAllSagas();

      for (let actionType in domainSagas) {
        actionSagaDefinitions.push({
          actionType,
          saga: domainSagas[actionType],
        });
      }
    }

    return actionSagaDefinitions;
  }
}
