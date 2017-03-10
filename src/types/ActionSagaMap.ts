import Saga from './Saga'

interface ActionSagaMap {
  [actionType: string]: Saga
};

export default ActionSagaMap;