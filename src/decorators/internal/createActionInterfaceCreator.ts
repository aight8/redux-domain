import ActionInterface from '../../models/ActionInterface'
import { ActionInterfaceMockAction } from '../../models/ActionInterfaceMockAction'
import { Store } from 'redux'
import { FluxStandardAction } from 'flux-standard-action'
import {
  ResolveFunction,
  RejectFunction,
  ActionWithCallbacks,
  MetaWithCallbacks
} from '../../types/ActionWithCallbacks'
import Domain from '../../Domain'

function errorDispatcher() {
  throw new Error(
    'Action cannot be dispatched because no store is registered.'
  );
}

/**
 * This process the action method's return value and create a complete action out of it inclusive the type
 * 
 * @param actionType        The annotated action type
 * @param methodReturnValue The return value of the action method
 */
function buildAction(actionType: string, methodReturnValue: any): FluxStandardAction<any, any> {
  let payload = null;
  let meta = null;
  let error = null;

  if (methodReturnValue instanceof ActionInterfaceMockAction) {
    // If action method returns Action(payload?, meta?, error?) then take props from there
    payload = methodReturnValue.action.payload || null;
    meta = methodReturnValue.action.meta || null;
    error = methodReturnValue.action.error || null;
  } else {
    payload = methodReturnValue;
  }

  return {
    type: actionType,
    payload,
    meta,
    error,
  };
}

/**
 * This method returns a copy of the action object with callback methods on the action meta
 * Because it is a copy the action of the action interface is not altered!
 * 
 * @TODO: make deep copy of object?? is this really 100% fail safe now?
 * 
 * @param action   The original action
 * @param resolve  The promise resolve method
 * @param reject   The promise reject method
 */
function actionWithCallbacks(
  action: FluxStandardAction<any, any>,
  resolve: ResolveFunction,
  reject: RejectFunction
) {
  const actionWithCallbacks: ActionWithCallbacks<any, MetaWithCallbacks> = Object.assign({}, action);

  const callbacks = {
    resolve,
    reject,
  };

  if (!actionWithCallbacks.meta) {
    actionWithCallbacks.meta = {
      callbacks,
    };
  } else {
    actionWithCallbacks.meta.callbacks = callbacks;
  }

  return actionWithCallbacks;
}


export default function(target: Domain<any>, actionType: string, actionCreator:Function) {
  /**
   * This method will wrap and replace the original action method
   * It returns an ActionInterface object instead of the original
   * return value (payload or ActionInterfaceMockAction)
   * 
   * @param args
   */
  let actionInterfaceCreator = function (...args: any[]): ActionInterface<any, any> {
    const instanceStore: Store<any> = this.store;

    let actionInterface = new ActionInterface();

    let action = buildAction(actionType, actionCreator(...args));

    // The final composed action object inclusive type
    actionInterface.action = action;

    // dispatch the built action to the store
    actionInterface.dispatch = function() { // Domain instance scope
      if (!instanceStore) {
        errorDispatcher();
      }
      instanceStore.dispatch(action);
    }

    // return a promise:
    // - append callback methods to the action meta property (copy action object)
    // - dispatch the action-with-callbacks to the store
    actionInterface.dispatchSync = function() { // Domain instance scope
      if (!instanceStore) {
        errorDispatcher();
      }
      return new Promise((resolve, reject) => {
        instanceStore.dispatch(actionWithCallbacks(action, resolve, reject));
      });
    }

    return actionInterface;
  }

  // Save action type as metadata on the Function object
  Object.defineProperty(actionInterfaceCreator, 'actionType', {
    value: actionType,
    writable: false,
  });

  // The string representation is the action type
  Object.defineProperty(actionInterfaceCreator, 'toString', {
    value: function() {
      return this.actionType;
    },
    writable: false,
  });

  return actionInterfaceCreator;
}