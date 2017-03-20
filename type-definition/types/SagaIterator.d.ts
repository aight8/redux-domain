import { Effect } from 'redux-saga';
declare type SagaIterator = IterableIterator<Effect | Effect[] | Promise<any> | void>;
export default SagaIterator;
