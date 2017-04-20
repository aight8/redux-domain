define(["require", "exports", "redux-actions", "redux-immutable"], function (require, exports, redux_actions_1, redux_immutable_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = (domainActionReducerMap, domainDefaultStates, mergeReducersMapObject) => {
        let domainLevelReducer = {};
        for (let domainKey in domainActionReducerMap) {
            let domainReducers = domainActionReducerMap[domainKey];
            domainLevelReducer[domainKey] = redux_actions_1.handleActions(domainReducers, domainDefaultStates[domainKey]);
        }
        if (mergeReducersMapObject) {
            Object.assign(domainLevelReducer, mergeReducersMapObject);
        }
        return redux_immutable_1.combineReducers(domainLevelReducer);
    };
});
