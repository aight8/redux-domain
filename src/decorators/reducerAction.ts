import createActionInterfaceCreator from './internal/createActionInterfaceCreator'
import setActionReducerHandler from './internal/setActionReducerHandler'
import SmartReducer from '../types/SmartReducer'
import Domain from '../Domain'

export default function<DomainT extends Domain<any>>
  (actionType: string, reducerFunction: SmartReducer<DomainT['state'], any, DomainT>)
{
  type DomainTState = DomainT['defaultState'];

  return function(target: DomainT, key: string, descriptor: PropertyDescriptor) {
    descriptor.value = createActionInterfaceCreator(target, actionType, descriptor.value);
    setActionReducerHandler(target, actionType, reducerFunction);
    return descriptor;
  }
}