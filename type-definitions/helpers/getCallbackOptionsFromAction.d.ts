import { FluxStandardAction } from 'flux-standard-action';
import { MetaWithCallbacks } from '../types/ActionWithCallbacks';
declare var _default: (action: FluxStandardAction<any, MetaWithCallbacks>) => {
    resolve: (data: any) => void;
    reject: (data: Error) => void;
};
export default _default;
