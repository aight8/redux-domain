import { Reducer } from 'redux';
export interface ActionReducerMap {
    [actionType: string]: Reducer<any>;
}
export default ActionReducerMap;
