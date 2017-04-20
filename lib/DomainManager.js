define(["require", "exports", "./errors/createBadUsageError"], function (require, exports, createBadUsageError_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DomainManager {
        constructor(domains) {
            this.domains = domains;
            for (let domainKey in this.domains) {
                let domain = this.domains[domainKey];
                domain.key = domainKey;
                Object.defineProperty(domain, 'store', {
                    get: () => {
                        return this.store;
                    },
                });
            }
        }
        get rootState() {
            if (!this.store) {
                throw createBadUsageError_1.default(`The DomainManager rootState getter requires a set 'store' property.`);
            }
            return this.store.getState();
        }
        resetAllStates() {
            Object.keys(this.domains).forEach(domainKey => {
                const domain = this.domains[domainKey];
                domain.resetState();
            });
        }
        getReducers() {
            let domainActionReducerMap = {};
            for (let domainKey in this.domains) {
                const domain = this.domains[domainKey];
                domainActionReducerMap[domain.key] = domain.getAllReducers();
            }
            return domainActionReducerMap;
        }
        getDefaultStates() {
            let domainDefaultStates = {};
            for (let domainKey in this.domains) {
                const domain = this.domains[domainKey];
                domainDefaultStates[domain.key] = domain.defaultState;
            }
            return domainDefaultStates;
        }
        getSagas() {
            let actionSagaDefinitions = [];
            for (let domainKey in this.domains) {
                const domain = this.domains[domainKey];
                const domainSagas = domain.getAllSagas();
                for (let actionType in domainSagas) {
                    actionSagaDefinitions.push({
                        actionType,
                        saga: domainSagas[actionType],
                    });
                }
            }
            return actionSagaDefinitions;
        }
    }
    exports.default = DomainManager;
});
