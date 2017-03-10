import { combineReducers, ReducersMapObject } from 'redux'
import { handleActions } from 'redux-actions'
import DomainKeyActionReducerMap from '../types/DomainKeyActionReducerMap'
import DomainKeyDefaultStateMap from '../types/DomainKeyDefaultStateMap'

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
        domainDefaultStates[domainKey],
      );
    }

    if (mergeReducersMapObject) {
      Object.assign(domainLevelReducer, mergeReducersMapObject);
    }

    return combineReducers(domainLevelReducer);
}