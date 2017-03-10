import SagaIterator from './SagaIterator'
import { FSA } from 'flux-standard-action'

GeneratorFunction
type SmartSagaFootprint<Payload> = (payload?: Payload, action?: FSA<Payload, any>) => SagaIterator;

export default SmartSagaFootprint;