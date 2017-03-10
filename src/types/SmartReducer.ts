import { FSA } from 'flux-standard-action'

type SmartReducer<State, Payload> = {
    (payload?: Payload, action?: FSA<Payload, any>): State;
}

export default SmartReducer