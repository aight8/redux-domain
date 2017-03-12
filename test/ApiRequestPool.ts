/// <reference path="../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../node_modules/@types/chai-as-promised/index.d.ts" />

import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import ApiRequestPool, { ApiRequestPoolOptions } from '../src/api-request-pool/ApiRequestPool'
import RequestError, { RequestErrorTypeEnum } from '../src/api-request-pool/errors/base/RequestError'
import ApiError from '../src/api-request-pool/errors/ApiError'

import axios from 'axios'
import * as MockAdapter from 'axios-mock-adapter'

chai.use(chaiAsPromised);

let mockAdapter = new MockAdapter(axios);
mockAdapter.onGet('user/get').reply(200, {
    success: true,
    data: 'user_123_data',
    errors: null,
});
mockAdapter.onGet('user/logout').reply(200, {
    success: false,
    data: null,
    errors: 'Logout failed',
});

class AppApi extends ApiRequestPool {
    static options: ApiRequestPoolOptions = {
        baseURL: 'ajax',
    }
    
    public fetchUser(id: number) {
        return this.request('get', 'user/get', { id }, { cancelPrev: true });
    }

    public login(username: string, password: string) {
        return this.request('post', 'user/login', { username, password });
    }

    public logout() {
        return this.request('post', 'user/logout');
    }
}

const appApi = new AppApi({
    errorHandler(error: RequestError) {
        
    },
});

describe('ApiRequestPool', function() {
    it('Resolve API request with data and cancel previous API calls with same hash', function(done) {
        Promise.all([
            chai.expect(appApi.fetchUser(123)).to.rejectedWith(RequestError, 'CANCEL_ERROR'),
            chai.expect(appApi.fetchUser(123)).to.fulfilled.then(function(data) {
                chai.expect(data).equals('user_123_data');
            })
        ]).should.notify(done);
    });
    it('Resolve multiple API request one after another without cancel error', function(done) {
        chai.expect(appApi.fetchUser(123)).to.fulfilled.then(function(data) {
            chai.expect(data).equals('user_123_data');
        }).then(function() {
            chai.expect(appApi.fetchUser(123)).to.fulfilled.then(function(data) {
                chai.expect(data).equals('user_123_data');
            }).should.notify(done);
        });
    });
    it('Catch API errors (api response with "errors" property)', function(done) {
        chai.expect(appApi.logout()).to.rejectedWith(ApiError)
            .then((apiError: ApiError) => {
                chai.expect(apiError.errors).equals('Logout failed');
            })
            .should.notify(done);
    });
});