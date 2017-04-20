define(["require", "exports", "./decorators/internal/isGenerator", "./utils/pickBy", "./errors/createBadUsageError"], function (require, exports, isGenerator_1, pickBy_1, createBadUsageError_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createKeyRequiredError(methodName) {
        return createBadUsageError_1.default(`The Domain method '${methodName}' requires a set 'key' property. ` +
            `The domain key is set by the DomainManager automatically. ` +
            `However it can manually set with the key static property.`);
    }
    function createStoreRequiredError(methodName) {
        return createBadUsageError_1.default(`The Domain method '${methodName}' requires a set 'store' property. ` +
            `If used with the DomainManager the store must be set on the DomainManager instead. ` +
            `If you want to get it work anyway set the store property of the domain manually.`);
    }
    class Domain {
        constructor() {
            this.store = null;
            this.defaultState = null;
            let decReducers = this.decoratorRegisteredReducers || [];
            for (let r in decReducers) {
                decReducers[r] = decReducers[r].bind(this);
            }
            let decSagas = this.decoratorRegisteredSagas || [];
            for (let s in decSagas) {
                decSagas[s] = decSagas[s].bind(this);
            }
        }
        get key() { return this.constructor.key || this._key; }
        set key(key) { this._key = key; }
        get state() {
            if (!this.key) {
                throw createKeyRequiredError('state');
            }
            return this.rootState[this.key];
        }
        get rootState() {
            if (!this.store) {
                throw createBadUsageError_1.default('Cannot get store state because no store is bound to the domain.');
            }
            return this.store.getState();
        }
        resetState() {
            if (!this.store) {
                throw createBadUsageError_1.default('Cannot reset store because no store was bound to domain.');
            }
            if (!this.key) {
                throw createKeyRequiredError('resetStore');
            }
            this.store.dispatch({ type: '@@' + this.key + '/RESET' });
        }
        getAllReducers() {
            if (!this.key) {
                throw createKeyRequiredError('getAllReducers');
            }
            return Object.assign({ ['@@' + this.key + '/RESET']: () => this.defaultState }, pickBy_1.default(this.handlers, h => !isGenerator_1.default(h)), this.decoratorRegisteredReducers);
        }
        getAllSagas() {
            return Object.assign({}, (typeof this.startupSaga === 'function' ? {
                '@@STARTUP': this.startupSaga,
            } : {}), pickBy_1.default(this.handlers, isGenerator_1.default), this.decoratorRegisteredSagas);
        }
    }
    exports.default = Domain;
});
