import { Action } from 'redux'
import { FluxStandardAction } from 'flux-standard-action'

/**
 * This is the object which is returned by a action method which is decorated as an action
 * Note: It's technically a normal class not a "typescript interface" - but this was the best name for it.
 */
export default class ActionInterface<Payload, Meta> {
    /**
     * Can be:
     * - The partial action (without type) which is returned by a domain's action method
     * - The generated and complete action object (by action decorator/actionInterfaceCreator) 
     *   which is stored and get used for the dispatch and dispatchSync method.
     */
    action: FluxStandardAction<Payload, Meta>;

    /**
     * Dispatch the generated action to the store
     */
    dispatch: () => void;

    /**
     * Append callback methods to the action object meta and dispatch the action to the store
     */
    dispatchSync: () => Promise<any>;
}
