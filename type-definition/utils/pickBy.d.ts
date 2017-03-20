import ActionReducerOrSagaMap from '../types/ActionReducerOrSagaMap';
export default function pickBy<T>(obj: ActionReducerOrSagaMap, fn: (val: any) => boolean): {
    [actionType: string]: T;
};
