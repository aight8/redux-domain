/// <reference path="../node_modules/@types/mocha/index.d.ts" />

import * as assert from 'assert'
import * as chai from 'chai'

import Domain from '../src/Domain'
import DomainManager from '../src/DomainManager'
import UserState from '../src/UserState'
import sagaAction from '../src/decorators/sagaAction'
import reducerAction from '../src/decorators/reducerAction'
import Action from '../src/models/ActionInterfaceMockAction'
import { delay, END } from 'redux-saga'
import { call } from 'redux-saga/effects'

// other found benefits:
// Prevent of modify this.state because it's readonly

/**
 * However redux-domain is concepted for it's simplicity, I encourage you to use snippets for:
 * - create new Domain with state type, defaultState
 *
 * @TODO: what what this new snippet system in vscode called which will be supported soon natively?
 * @TODO: new functionality. new member variable: actionTypeNamespace/actionNamespace
 * @TODO: any benefits to make defaultState as static?!
 */

class DomainA extends Domain<any> {
    defaultState: {}

    *startupSaga() {
        console.log('startup saga is callin\' from DomainA');
    }

    @sagaAction<DomainA>('DOMAIN_A/FETCH', function* () {
        
    })
    fetch() {
        return Action();
    }

    @sagaAction<DomainA>('DOMAIN_A/GRAB', function* () {
        
    })
    grab() {
        return Action();
    }

    @reducerAction<DomainA>('DOMAIN_A/SET', function (payload) {
        return Object.assign({}, this.state, payload);
    })
    set(id, name) {
        return Action({ id, name });
    }
}

class DomainB extends Domain<any> {
    defaultState: {}

    *startupSaga() {
        console.log('startup saga is callin\' from DomainB')
        yield call(delay, 300)
        console.log('startup saga from DomainB has finished');
        return true;
    }
}

class DomainC extends Domain<any> {
    defaultState: {}

    *startupSaga() {
        console.log('startup saga is callin\' from DomainC')
        yield call(delay, 1000)
        console.log('startup saga from DomainC has finished');
        return true;
    }
}

const domainManager = new DomainManager({
    a: new DomainA(),
    b: new DomainB(),
    c: new DomainC(),
})

const userState1 = new UserState(domainManager, {});

describe('UserState', function () {
    it('userState1.domainManager must reference to the passed domainManager', function () {
        chai.expect(userState1.domainManager).equals(domainManager);
    })
    it('userState1.domains must reference to the passed domainManagers domains', function () {
        chai.expect(userState1.domainManager.domains).equals(domainManager.domains);
        chai.expect(function () {
            (userState1 as any).domains = null;
        }).throws('Cannot set property domains of #<UserStore> which has only a getter');
    })
    it('test 1', async function () {
        console.log('start test 1');
        const userState = new UserState(domainManager, {});
        await userState.finalizeRootSaga();


        console.log('end test 1');

        //userState.domainManager.domains.a.

        //console.log(domainManager.getReducers());
        //console.log(domainManager.getSagas());
    });
});
