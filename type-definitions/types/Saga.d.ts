import SagaIterator from './SagaIterator';
declare type Saga = (...args: any[]) => SagaIterator;
export default Saga;
