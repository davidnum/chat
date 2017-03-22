import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { normalize } from 'normalizr';
import { messagesLoaded, loadingMessagesError } from './actions';
import { LOAD_MESSAGES } from './constants';
import messagesSchema from './schema';
import { fetchMessages } from './requests';

export function* getMessages(action) {
  try {
    const messages = yield call(fetchMessages, action.chatId);
    const normalized = yield normalize(messages, messagesSchema);
    yield put(messagesLoaded(normalized.entities.messages));
  } catch (err) {
    yield put(loadingMessagesError(err));
  }
}

export function* messagesData() {
  const watcher = yield takeLatest(LOAD_MESSAGES, getMessages);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  messagesData,
];
