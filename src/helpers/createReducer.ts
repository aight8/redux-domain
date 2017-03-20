import { combineReducers, ReducersMapObject, Action } from 'redux'
import { handleActions } from 'redux-actions'
import DomainKeyActionReducerMap from '../types/DomainKeyActionReducerMap'
import DomainKeyDefaultStateMap from '../types/DomainKeyDefaultStateMap'
import { FluxStandardAction } from 'flux-standard-action'

export default (
  domainActionReducerMap: DomainKeyActionReducerMap,
  domainDefaultStates: DomainKeyDefaultStateMap,
  mergeReducersMapObject?: ReducersMapObject
) => {
    let domainLevelReducer: ReducersMapObject = {};

    for (let domainKey in domainActionReducerMap) {
      let domainReducers = domainActionReducerMap[domainKey];

      domainLevelReducer[domainKey] = handleActions(
        domainReducers,
        domainDefaultStates[domainKey] || null,
        // Domain.defaultState is already null if not defined but make sure for other use cases,
        // because `undefined` throws an exception
      );
    }

    if (mergeReducersMapObject) {
      Object.assign(domainLevelReducer, mergeReducersMapObject);
    }

    return combineReducers(domainLevelReducer);
}