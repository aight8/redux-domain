import ActionInterface from './ActionInterface';
import { FluxStandardAction } from 'flux-standard-action';
declare var _default: (payload?: any, meta?: any, error?: boolean) => ActionInterfaceMockAction<any, any>;
export default _default;
export declare class ActionInterfaceMockAction<Payload, Meta> implements ActionInterface<Payload, Meta> {
    action: FluxStandardAction<Payload, Meta>;
    dispatch(): void;
    dispatchSync(): Promise<any>;
    constructor(payload: Payload, meta: Meta, error: boolean);
}
