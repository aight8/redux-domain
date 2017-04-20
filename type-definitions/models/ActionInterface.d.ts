import { FluxStandardAction } from 'flux-standard-action';
export default class ActionInterface<Payload, Meta> {
    action: FluxStandardAction<Payload, Meta>;
    dispatch: () => void;
    dispatchSync: () => Promise<any>;
}
