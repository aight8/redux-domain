import {
  Domain,
  action,
  reducer,
  saga,
  reducerAction,
  sagaAction,
  Action
} from '../src/index'
import * as chalk from 'chalk'
import { put, call } from 'redux-saga/effects'

type AuthObject = {
  id: number;
  name: string;
  role: string;
};
type StateType = AuthObject|null;

function asyncFetchAuthUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ user: 123, role: 'user', });
    }, 2000);
  });
}

function asyncLogoutAuthUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
}

import ApiRequestPool from '../src/api-request-pool/api-request-pool'
const api = new ApiRequestPool('api');
//api.startRequest('get', '/blabla');

export default class AuthDomain extends Domain<StateType> {
  defaultState = null;

  protected handlers = {
    'SOME_EVENT': function*(payload) {
      console.log('DAS WAR COOL some event');
      yield Promise.resolve('kaka');
    },
  };

  @reducerAction('AUTH/SET', function(payload: AuthObject) {
    return payload;
  })
  set(data: AuthObject) {
    return Action(data);
  }

  @reducerAction('AUTH/UNSET', function(payload: any) {
    return {};
  })
  unset() { return Action() }

  @sagaAction('AUTH/DO_LOGIN', function*(payload) {
    const authObject = yield call(asyncFetchAuthUser);
    yield put({ type: 'AUTH/SET', payload: authObject });
  })
  login(email: string, password: string) {
    return Action({ email, password });
  }

  @sagaAction('AUTH/DO_LOGOUT', function*(payload) {
    yield call(asyncLogoutAuthUser);
    yield put(this.unset().action);
  })
  logout() {
    return Action({});
  }

  @action('AUTH/REDUCE_WHATEVER_1')
  reduceWhatever1() {
    return Action({});
  }

  /*constructor() {
    super();

    this.handlers = {
      'SOME_EVENT': function*(payload) {
        console.log('DAS WAR COOL some event');
        yield Promise.resolve('kaka');
      },
    };
  }*/
}
