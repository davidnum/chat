import { take, call, put, takeLatest, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_CHATS } from './constants';
import { chatsLoaded, chatsLoadingError } from './actions';

import fetchChats from './requests';


export function* getChats() {
  try {
    const chats = yield call(fetchChats);
    yield put(chatsLoaded(chats));
  } catch (err) {
    yield put(chatsLoadingError(err));
  }
}

export function* chatsData() {
  const watcher = yield takeLatest(LOAD_CHATS, getChats);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  chatsData,
];
