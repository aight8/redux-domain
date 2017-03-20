import { ReducersMapObject, Action } from 'redux';
import DomainKeyActionReducerMap from '../types/DomainKeyActionReducerMap';
import DomainKeyDefaultStateMap from '../types/DomainKeyDefaultStateMap';
declare var _default: (domainActionReducerMap: DomainKeyActionReducerMap, domainDefaultStates: DomainKeyDefaultStateMap, mergeReducersMapObject?: ReducersMapObject) => <A extends Action>(state: {}, action: A) => {};
export default _default;
