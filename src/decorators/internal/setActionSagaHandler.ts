import Saga from '../../types/Saga'
import { FSA } from 'flux-standard-action'
import SmartSagaFootprint from '../../types/SmartSagaFootprint'

export default (target: any, actionType: string, sagaGeneratorFunction: SmartSagaFootprint<any>) => {
  if (typeof target.decoratorRegisteredSagas === 'undefined') {
    target.decoratorRegisteredSagas = {};
  }

  if (actionType in target.decoratorRegisteredSagas) {
    const domain = target.constructor.name;
    throw new Error(
      `Cannot register multiple action handlers for action ${actionType} in ${domain}.`
    );
  }

  target.decoratorRegisteredSagas[actionType] = 
    function(action: FSA<any, any>) {
      return sagaGeneratorFunction.call(this, action.payload, action);
    };
}