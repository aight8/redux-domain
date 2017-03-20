import Domain from '../Domain';
export default function (actionType: string): (target: Domain<any>, key: string, descriptor: PropertyDescriptor) => void;
