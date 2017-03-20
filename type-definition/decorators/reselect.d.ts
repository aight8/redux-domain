import Domain from '../Domain';
export declare type SmartInputSelector<Context> = (this: Context, state, props: any) => any;
export declare type SmartInputSelectors<Context> = SmartInputSelector<Context>[];
export default function <DomainT extends Domain<any>>(contextualInputSelectors: SmartInputSelectors<DomainT>, combiner: Function): (target: DomainT, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
