import { Action } from 'redux'
import { FluxStandardAction } from 'flux-standard-action'
import { MetaWithCallbacks } from '../types/ActionWithCallbacks'

const noop = () => {};

/*type MetaWithCallbacks = {
  callbacks: {
    resolve: Function,
    reject: Function,
  },
};*/

export default (action: FluxStandardAction<any, MetaWithCallbacks>) => {
  return {
    resolve: action.meta && action.meta.callbacks && action.meta.callbacks.resolve || noop,
    reject: action.meta && action.meta.callbacks && action.meta.callbacks.reject || noop,
  };
}
