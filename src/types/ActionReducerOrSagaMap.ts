import Saga from './Saga'
import { Reducer } from 'redux'

interface ActionReducerOrSagaMap {
  [actionType: string]: Saga|Reducer<any>
};

export default ActionReducerOrSagaMap;