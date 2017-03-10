import { Effect } from 'redux-saga'

type SagaIterator = IterableIterator<Effect|Effect[]|Promise<any>|void>;

export default SagaIterator;