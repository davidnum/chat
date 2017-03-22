import { take, call, put, takeLatest, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { normalize } from 'normalizr';
import chatsSchema from './schema';
import { LOAD_CHATS } from './constants';
import { chatsLoaded, chatsLoadingError } from './actions';

import fetchChats from './requests';

export function* getChats() {
  try {
    const chats = yield call(fetchChats);
    const normalized = yield normalize(chats, chatsSchema);
    yield put(chatsLoaded(normalized.entities.chats, normalized.entities.messages));
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
