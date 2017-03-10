import {
  Domain,
  action,
  reducer,
  saga,
  reducerAction,
  sagaAction,
  Action
} from '../src/index'
import { put, call } from 'redux-saga/effects'
import { Map as ImmutableMap } from 'immutable'
import { createSelector } from 'reselect'

function fetchUser(id: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, 'name': 'Jansen', });
    }, 1000);
  });
}

type UserType = {
  id: number,
  name: string,
};

type DomainState = ImmutableMap<number, UserType>;

type Action = {
  dispatch: Function,
};

export default class UserDomain extends Domain<DomainState> {
  defaultState = ImmutableMap<number, UserType>({ 444: { name: 'ficker' } });

  getById(id: number): UserType {
    return this.state.get(id);
  }

  /*@reselect()
  getNames(users: DomainState): string[] {
    return users.map(x => x.name).toArray();
  }*/

  @reducerAction('USER/SET', function(payload: UserType, action) {
    return this.state.set(payload.id, payload);
  })
  set(user: UserType) {
    return Action(user);
  }

  @reducerAction('USER/UNSET', function(payload) {
    return this.state.delete(payload.id);
  })
  unset(id: number) {
      return Action({ id });
  }

  @sagaAction('USER/FETCH', function*(payload) {
    const userObject = yield call(fetchUser, payload.id);
    yield put(this.set(userObject).action);
  })
  fetch(id: number) {
    return Action({ id });
  }

  @sagaAction('USER/UPDATE', function*(payload) {
    yield call(() => {});
  })
  update(data: any) {
    return Action(data);
  }
}
