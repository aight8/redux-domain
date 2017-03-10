import { Action, applyMiddleware, createStore, Dispatch, Middleware, MiddlewareAPI, Store } from 'redux'
import { default as createSagaMiddleware, Effect, END, Monitor } from 'redux-saga'
import { call, takeEvery, takeLatest, fork } from 'redux-saga/effects'
import getCallbackOptionsFromAction from '../src/helpers/getCallbackOptionsFromAction'
import createReducer from '../src/helpers/createReducer'
import createRootSaga from '../src/helpers/createRootSaga'
import * as prettyjson from 'prettyjson'
import * as chalk from 'chalk'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { connect, ProviderProps, Provider } from 'react-redux'
import UserState from '../src/UserState'

import { default as createDebug } from 'debug/src/node'
import {
  Domain,
  DomainManager,
  ActionInterface,
  action,
  reducer,
  saga
} from '../src/index'
import AuthDomain from './auth-domain'
import UserDomain from './user-domain'
import { Map } from 'immutable'

async function main() {
  try {
    const domainManager = new DomainManager({
      'auth': new AuthDomain(),
      'user': new UserDomain(),
    });

    const userStateOptions = {
      preloadedState: Map({ auth: { id: 123123123, name: 'blablabla' } }),
    };

    const userState = new UserState(userStateOptions, domainManager);

    await domainManager.domains.auth.set({ id: 235, name: 'Sebi', role: 'user' }).dispatch();
    await domainManager.domains.user.set({ id: 101, name: 'dalmatiner' }).dispatch();
    await domainManager.domains.user.set({ id: 42, name: 'einfach-alles' }).dispatch();
    await domainManager.domains.user.set({ id: 999, name: 'Typisch Sebastian' }).dispatch();

    console.log('domainManager.rootState', domainManager.rootState);

    userState.store.dispatch({ type: 'SOME_EVENT' });
  } catch(err) {
    console.log(chalk.red(err.stack || err));
  }
}

main().then(r => {
  console.error(chalk.magenta(r || null));
}, e => {
  console.error(chalk.red(e));
});

