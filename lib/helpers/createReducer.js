define(["require", "exports", "redux", "redux-actions"], function (require, exports, redux_1, redux_actions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = (domainActionReducerMap, domainDefaultStates, mergeReducersMapObject) => {
        let domainLevelReducer = {};
        for (let domainKey in domainActionReducerMap) {
            let domainReducers = domainActionReducerMap[domainKey];
            domainLevelReducer[domainKey] = redux_actions_1.handleActions(domainReducers, domainDefaultStates[domainKey] || null);
        }
        if (mergeReducersMapObject) {
            Object.assign(domainLevelReducer, mergeReducersMapObject);
        }
        return redux_1.combineReducers(domainLevelReducer);
    };
});
