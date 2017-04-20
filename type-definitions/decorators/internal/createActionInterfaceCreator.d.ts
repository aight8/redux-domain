import ActionInterface from '../../models/ActionInterface';
import Domain from '../../Domain';
export default function (target: Domain<any>, actionType: string, actionCreator: Function): (...args: any[]) => ActionInterface<any, any>;
