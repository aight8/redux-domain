import ActionReducerOrSagaMap from '../types/ActionReducerOrSagaMap'

/**
 * Keep only the map entries which value pass the function. Preserve keys.
 */
export default function pickBy<T>(obj: ActionReducerOrSagaMap, fn: (val: any) => boolean) {
  let newObj: {[actionType: string]: T} = {};
  for (let i in obj) {
    let val = obj[i];
    if (fn(obj[i])) {
      newObj[i] = obj[i] as any;
    }
  }
  return newObj;
}