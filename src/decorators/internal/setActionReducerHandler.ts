import { SagaIterator } from 'redux-saga'
import { FSA } from 'flux-standard-action'
import SmartReducer from '../../types/SmartReducer'

export default <State>(target: any, actionType: string, reducerFunction: SmartReducer<any, any>) => {
  if (typeof target.decoratorRegisteredReducers === 'undefined') {
    target.decoratorRegisteredReducers = {};
  }

  if (actionType in target.decoratorRegisteredReducers) {
    const domain = target.constructor.name;
    throw new Error(
      `Cannot register multiple action handlers for action ${actionType} in ${domain}.`
    );
  }

  target.decoratorRegisteredReducers[actionType] = 
    function(state: any, action: FSA<any, any>): State {
      return reducerFunction.call(this, action.payload, action);
    };
}