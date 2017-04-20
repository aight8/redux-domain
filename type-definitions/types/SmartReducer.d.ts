import { FSA } from 'flux-standard-action';
declare type SmartReducer<State, Payload, Context> = {
    (this: Context, payload?: Payload, action?: FSA<Payload, any>): State;
};
export default SmartReducer;
