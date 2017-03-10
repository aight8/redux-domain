import ActionInterface from './ActionInterface'
import { FluxStandardAction } from 'flux-standard-action'

/**
 * The action method on a domain must return:
 * return Action(payload, meta?, error?);
 * 
 * Instead of:
 * return new Action(payload, meta?, error?);
 * 
 * This is more compact.
 */
export default (payload?: any, meta?: any, error?: boolean) => {
  return new ActionInterfaceMockAction(payload, meta, error);
}

/**
 * BadUsageError error template
 */
function createBadUsageError(methodName: string) {
  const message =
    `Cannot call ${methodName} on the Action instance directly ` +
    `(because it's only a type mock for the ActionInterface). ` +
    `Possible causes: ` + 
    `1. You returned an Action from a method but don\'t use a decorator like ` +
    `@action/@reducerAction/@sagaAction. ` +
    `2. You created this object manually and called this method.`;

  function BadUsageError() {
    this.name = 'BadUsageError';
    this.message = message;
  }
  BadUsageError.prototype = Error.prototype;

  return new BadUsageError();
}

/**
 * Because Typescript/Flow currently not support method signature overwriting by decorators,
 * this class mocks the ActionInterface for the caller (inclusive comments and types).
 * The action method get replaced by a real ActionInterface by any @action decorator or variant.
 * If the decorator was forgotten or this object was created manually because of missuse, it throws an exception.
 */
export class ActionInterfaceMockAction<Payload, Meta> implements ActionInterface<Payload, Meta> {
  /**
   * The generated action object by the called action creator
   */
  action: FluxStandardAction<Payload, Meta>;

  /**
   * Dispatch the generated action to the store
   */
  dispatch(): void {
    throw createBadUsageError('dispatch');
  }

  /**
   * Append callback methods to the action object meta and dispatch the action to the store
   */
  dispatchSync(): Promise<any> {
    throw createBadUsageError('dispatchSync');
  };

  /**
   * Creates a new action
   */
  constructor(
    payload: Payload,
    meta: Meta,
    error: boolean,
  ) {
    this.action = {
      type: null,
      payload,
      meta,
      error,
    };
  }
}