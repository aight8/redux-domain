import Domain from '../Domain';
import SmartSagaFootprint from '../types/SmartSagaFootprint';
export default function <DomainT>(actionType: string, sagaGeneratorFunction: SmartSagaFootprint<any, DomainT>): (target: Domain<any>, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
