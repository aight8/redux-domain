import { takeLatest, call, cancelled } from 'redux-saga/effects'
import getCallbackOptionsFromAction from './getCallbackOptionsFromAction'
import { Effect } from 'redux-saga'

export default (actionType: string, innerGenerator: any): any => {
  return takeLatest(actionType, function*(action: any) {
    const callbacks = getCallbackOptionsFromAction(action);
    try {
      const returnValue = yield call(innerGenerator, action);
      callbacks.resolve(returnValue);
    } catch (ex) {
      callbacks.reject(ex);
      throw ex;
    }/* finally {
      const isCancelled = yield cancelled();
      //console.log('?? isCancelled', isCancelled);
    }*/
  });
}
