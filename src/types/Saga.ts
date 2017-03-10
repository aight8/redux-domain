import SagaIterator from './SagaIterator'

type Saga = (...args: any[]) => SagaIterator;

export default Saga;