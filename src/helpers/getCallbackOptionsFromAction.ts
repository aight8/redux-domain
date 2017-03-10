import { Action } from 'redux' 
import { FSA } from 'flux-standard-action'
import { MetaWithCallbacks } from '../types/ActionWithCallbacks'

const noop = () => {};

/*type MetaWithCallbacks = {
  callbacks: {
    resolve: Function,
    reject: Function,
  },
};*/

export default (action: FSA<any, MetaWithCallbacks>) => {
  return {
    resolve: action.meta && action.meta.callbacks && action.meta.callbacks.resolve || noop,
    reject: action.meta && action.meta.callbacks && action.meta.callbacks.reject || noop,
  };
}
