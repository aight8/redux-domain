/// <reference path="../node_modules/@types/mocha/index.d.ts" />

import * as assert from 'assert'
import * as chai from 'chai'
import Domain from '../src/Domain'
import sagaAction from '../src/decorators/sagaAction'
import reducerAction from '../src/decorators/reducerAction'
import { createStore, compose, applyMiddleware } from 'redux'
import createReducer from '../src/helpers/createReducer'
import createRootSaga from '../src/helpers/createRootSaga'
import ActionInterface from '../src/models/ActionInterface'
import Action, { ActionInterfaceMockAction } from '../src/models/ActionInterfaceMockAction'
import { default as createSagaMiddleware } from 'redux-saga'
import { createSelectorCreator, createSelector, Selector, defaultMemoize } from 'reselect'

chai.should();

type SubModelAComment = {title: string, message: string, date: Date};
type SubModelAComments = SubModelAComment[];
type ModelA = {id: number, name: string, country: string, comments?: SubModelAComments };
type DomainA_State = {[key: string]: ModelA}

class DomainA extends Domain<DomainA_State/*, any*/> {
    static key = 'a';
    readonly defaultState = {};

    /**
     * The action method returns with 'Action' to mock the return type
     */
    @reducerAction<DomainA>('A/BLA', function(isCool: boolean) {
        chai.expect(this).to.equals(
            domainA,
            '"this" must be the domain instance in the reducer which ' + 
            'is passed to the @reducerAction decorator.'
        );
        return this.state;
    }) bla(isCool: boolean) { return Action(isCool); }

    /**
     * Set reducer
     */
    @reducerAction<DomainA>('A/SET', function(payload: ModelA) {
        return Object.assign({}, this.state, {
            [payload.id]: payload,
        });
    }) set(user: ModelA) { return user; }

    /**
     * Unset reducer
     */
    @reducerAction<DomainA>('A/UNSET', function(id: number) {
        let newState = Object.assign({}, this.state);
        delete newState[id];
        return newState;
    }) unset(id: number) { return id; }

    /**
     * Load something (saga)
     */
    @sagaAction<DomainA>('A/LOAD', function*(payload) {
        chai.expect(this).to.equals(
            domainA,
            '"this" must be the domain instance in the reducer which ' + 
            'is passed to the @sagaAction decorator.'
        );
    }) load(id: number) {
        return Action(id);
    }

    /**
     * Fetch something (saga)
     */
    @sagaAction<DomainA>('A/FETCH', function*(payload) {
        // ...
    }) fetch(id: number) {
        return Action(id);
    }

    getDomainState() {
        return this.state;
    }

    getRootState() {
        return this.rootState;
    }
}

const domainA = new DomainA();

let domainAReducers;
let domainASagas;
let setActionMethodResult: ActionInterface<any, any>;
let blaActionMethodResult: ActionInterface<any, any>;
let store;
let sagaMiddleware;

describe('Domain instance (no store set)', function() {
    it('the static property "key" must be accessable', function() {
        DomainA.key.should.be.eq('a');
    });
    it('the getter property "key" must return the set static key property', function() {
        domainA.key.should.be.eq('a');
    });
    it('the property "defaultState" must be accessable', function() {
        chai.expect(domainA.defaultState).be.an.instanceOf(Object);
    });
    it('the property "store" should be undefined at the beginning', function() {
        chai.expect(domainA.store).be.null;
    });
    it('throw a BadUsageError if call "resetStore()"', function() {
        chai.expect(function() {
            domainA.resetStore();
        }).to.throw('BadUsageError');
    });
    it('throw a BadUsageError if call the getter properties "state" or "rootState"', function() {
        chai.expect(function() {
            domainA.state;
            domainA.rootState;
        }).to.throw('BadUsageError');
    });
    it('the method getAllReducers() should return all registered reducers (by @reducerAction decorator or in "handlers" property)', function() {
        domainAReducers = domainA.getAllReducers();
        chai.expect(domainAReducers).have.keys([
            '@@a/RESET',
            'A/SET',
            'A/UNSET',
            'A/BLA',
        ]);
        chai.expect(domainAReducers['@@a/RESET']).instanceof(Function);
        chai.expect(domainAReducers['A/SET']).instanceof(Function);
        chai.expect(domainAReducers['A/UNSET']).instanceof(Function);
        chai.expect(domainAReducers['A/BLA']).instanceof(Function);
    });
    it('the method getAllSagas() should return all registered sagas (by @sagaAction decorator or in "handlers" property)', function() {
        domainASagas = domainA.getAllSagas();
        chai.expect(domainASagas).have.keys([
            'A/FETCH',
            'A/LOAD',
        ]);
        chai.expect(domainASagas['A/FETCH']).instanceof(Function);
    });
    it('the @reducerAction decorated action method contains the "actionType" property (toString returns the same)', function() {
        chai.expect(domainA.set.toString()).equals('A/SET');
        chai.expect((domainA.set as any).actionType).equals('A/SET');
    });
    it('the @sagaAction decorated action method contains the "actionType" property (toString returns the same)', function() {
        chai.expect(domainA.fetch.toString()).equals('A/FETCH');
        chai.expect((domainA.fetch as any).actionType).equals('A/FETCH');
    });
});

describe('Domain instance (with store)', function() {
    it('must be possible to set the "store" property', function() {
        sagaMiddleware = createSagaMiddleware();
        store = createStore<any>(
            createReducer(
                { a: domainAReducers },
                { a: domainA.defaultState },
            ),
            { a: {} },
            compose(
                applyMiddleware(sagaMiddleware),
            ),
        );

        sagaMiddleware.run(createRootSaga(
            Object.keys(domainASagas).map(k => {
                return {
                    actionType: k,
                    saga: domainASagas[k],
                }
            })
        ));

        domainA.store = store;
        chai.expect(domainA.store).equals(store);
    });
    it('the "state" property must equals the defaultState property', function() {
        chai.expect(domainA.getDomainState()).deep.equals(domainA.defaultState);
    });
    it('the "rootState" property must equals the store state property', function() {
        chai.expect(domainA.getRootState()).deep.equals(store.getState());
    });
    it('the action method "set()" must return an ActionInterface with the correct action object', function() {
        setActionMethodResult = domainA.set({
            id: 123,
            name: 'Sebastian',
            country: 'Switzerland',
        }) as any as ActionInterface<any, any>;
        chai.expect(setActionMethodResult).is.instanceof(ActionInterface);
        chai.expect((setActionMethodResult as any).action).deep.equals({
            type: 'A/SET',
            payload: {
                id: 123,
                name: 'Sebastian',
                country: 'Switzerland',
            },
            meta: null,
            error: false,
        });
    });
    it('domainA.set(...).dispatch() - should execute the reducer and alter the store state.', function() {
        const userModel = {
            id: 123,
            name: 'Sebastian',
            country: 'Switzerland',
        };
        chai.expect(domainA.state).deep.equal({});
        (domainA.set(userModel) as any as ActionInterface<any, any>).dispatch();
        chai.expect(domainA.state).deep.equal({
            123: userModel,
        });
    })
    it('the action method "bla" must return ActionInterface with the correct action object', function() {
        blaActionMethodResult = domainA.bla(true);
        chai.expect(blaActionMethodResult).is.instanceof(ActionInterface);
        chai.expect((blaActionMethodResult as any).action).deep.equals({
            type: 'A/BLA',
            payload: true,
            meta: null,
            error: false,
        });
    });
    it('domainA.bla(..).dispatchSync() - "this" must point to the domain instance in the reducer function', function() {
        blaActionMethodResult.dispatch();
    });
    it('domainA.fetch(..).dispatchSync() - should resolve the returned promise', async function() {
        await domainA.fetch(123).dispatchSync();
    });
    it('domainA.load(..).dispatchSync() - "this" must point to the domain instance in the saga generator function', async function() {
        await domainA.load(123).dispatchSync();
    });
    it('can reset the store with resetStore', function() {
        domainA.resetStore();
    });
    /*it('blaaa', function() {
        const r1 = domainA.getAvgAge({ ids: [1, 2, 3] });
        console.log('r1 (v1)', r1);
        const r2 = domainA.getAvgAge({ ids: [1, 2, 3] });
        console.log('r2 (v1)', r2);
        const r3 = domainA.getAvgAge({ ids: [1, 2, 3] });
        console.log('r3 (v1)', r3);
        const r4 = domainA.getAvgAge({ ids: [1, 2, 3] });
        console.log('r4 (v1)', r4);
        const r5 = domainA.getAvgAge({ ids: [1, 2, 3, 4, 5] });
        console.log('r5 (v2)', r4);
        const r6 = domainA.getAvgAge({ ids: [1, 2, 3] });
        console.log('r6 (v1)', r6);
    });*/
});