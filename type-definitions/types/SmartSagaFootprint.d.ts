import SagaIterator from './SagaIterator';
import { FSA } from 'flux-standard-action';
declare type SmartSagaFootprint<Payload, Context> = (this: Context, payload?: Payload, action?: FSA<Payload, any>) => SagaIterator;
export default SmartSagaFootprint;
