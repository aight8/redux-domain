import createActionInterfaceCreator from './internal/createActionInterfaceCreator'
import setActionReducerHandler from './internal/setActionReducerHandler'
import SmartReducer from '../types/SmartReducer'
import Domain from '../Domain'

export default <State>(actionType: string, reducerFunction: SmartReducer<any, any>) => {
  return (target: Domain<any>, key: string, descriptor: PropertyDescriptor) => {
    descriptor.value = createActionInterfaceCreator(target, actionType, descriptor.value);
    setActionReducerHandler<State>(target, actionType, reducerFunction);
    return descriptor;
  }
}
