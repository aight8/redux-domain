import Saga from './Saga'

interface ActionSagaDefinition {
  actionType: string,
  saga: Saga,
};

export default ActionSagaDefinition;