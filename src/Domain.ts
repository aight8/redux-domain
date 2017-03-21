import isGenerator from './decorators/internal/isGenerator'
import ActionSagaMap from './types/ActionSagaMap'
import ActionReducerMap from './types/ActionReducerMap'
import ActionReducerOrSagaMap from './types/ActionReducerOrSagaMap'
import { Store } from 'redux'
import pickBy from './utils/pickBy'
import createBadUsageError from './errors/createBadUsageError'
import SagaIterator from 'types/SagaIterator'
import * as genbind from 'generator-bind'

function createKeyRequiredError(methodName: string) {
  return createBadUsageError(
    `The Domain method '${methodName}' requires a set 'key' property. ` +
    `The domain key is set by the DomainManager automatically. ` +
    `However it can manually set with the key static property.`
  );
}

function createStoreRequiredError(methodName: string) {
  return createBadUsageError(
    `The Domain method '${methodName}' requires a set 'store' property. ` +
    `If used with the DomainManager the store must be set on the DomainManager instead. ` +
    `If you want to get it work anyway set the store property of the domain manually.`
  );
}

interface Domain<StateType> {
  startupSaga(input: string): SagaIterator;
}

abstract class Domain<StateType/*, RootStateType*/> {
  public static key: string;
  private _key: string;
  public get key(): string { return (this.constructor as any).key || this._key; }
  public set key(key: string) { this._key = key; }

  public store: Store<any>|null = null; /*<RootStateType>*/
  public readonly defaultState: StateType = null;

  protected handlers: ActionReducerOrSagaMap;
  public readonly actionNamespace: string; // static?

  // private decoratorRegisteredReducers = {};
  // private decoratorRegisteredSagas = {};

  constructor() {
    let decReducers = (this as any).decoratorRegisteredReducers || [];
    for (let r in decReducers) {
      decReducers[r] = decReducers[r].bind(this);
    }

    let decSagas = (this as any).decoratorRegisteredSagas || [];
    for (let s in decSagas) {
      decSagas[s] = decSagas[s].bind(this);
    }
  }

  /**
   * The domain sub state
   */
  public get state(): StateType {
    if (!this.key) {
      throw createKeyRequiredError('state');
    }
    return this.rootState[this.key];
  }

  /**
   * The root redux state
   */
  public get rootState(): any /*RootStateType*/ {
    if (!this.store) {
      throw createBadUsageError('Cannot get store state because no store is bound to the domain.');
    }
    return this.store.getState();
  }

  /**
   * Reset the domain state to the default state
   */
  public resetState(): void {
    if (!this.store) {
      throw createBadUsageError('Cannot reset store because no store was bound to domain.');
    }
    if (!this.key) {
      throw createKeyRequiredError('resetStore');
    }
    this.store.dispatch({ type: '@@' + this.key + '/RESET' });
  }

  /**
   * Returns all registered reducers
   */
  public getAllReducers(): ActionReducerMap {
    if (!this.key) {
      throw createKeyRequiredError('getAllReducers');
    }
    return {
      ['@@' + this.key + '/RESET']: () => this.defaultState, // Built in reset reducer
      ...pickBy(this.handlers, h => !isGenerator(h)),
      ...(this as any).decoratorRegisteredReducers,
    };
  }

  /**
   * Returns all registered sagas
   */
  public getAllSagas(): ActionSagaMap {
    return {
      ...(typeof this.startupSaga === 'function' ? {
        '@@STARTUP': this.startupSaga, // maybe this shoud be defined in this.handlers by the user?
      }: {}),
      ...pickBy(this.handlers, isGenerator),
      ...(this as any).decoratorRegisteredSagas,
    };
  }
}

export default Domain;