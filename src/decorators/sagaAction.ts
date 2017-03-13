import createActionInterfaceCreator from './internal/createActionInterfaceCreator'
import setActionSagaHandler from './internal/setActionSagaHandler'
import { Reducer } from 'redux'
import Domain from '../Domain'
import Saga from '../types/Saga'
import SmartSagaFootprint from '../types/SmartSagaFootprint'

export default function<DomainT>
  (actionType: string, sagaGeneratorFunction: SmartSagaFootprint<any, DomainT>)
{
  return function(target: Domain<any>, key: string, descriptor: PropertyDescriptor) {
    descriptor.value = createActionInterfaceCreator(target, actionType, descriptor.value);
    setActionSagaHandler(target, actionType, sagaGeneratorFunction);
    return descriptor;
  }
}
