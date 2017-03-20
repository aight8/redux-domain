import SmartReducer from '../types/SmartReducer';
import Domain from '../Domain';
export default function <DomainT extends Domain<any>>(actionType: string, reducerFunction: SmartReducer<DomainT['state'], any, DomainT>): (target: DomainT, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
