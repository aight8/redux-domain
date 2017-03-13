import ActionInterface from '../models/ActionInterface'
import createActionInterfaceCreator from './internal/createActionInterfaceCreator'
import Domain from '../Domain'

export default function(actionType: string) {
  return (target: Domain<any>, key: string, descriptor: PropertyDescriptor) => {
    descriptor.value = createActionInterfaceCreator(target, actionType, descriptor.value);
  }
}
