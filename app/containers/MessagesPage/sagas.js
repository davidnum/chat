import { take, call, put, cancel, takeLatest, select, takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { normalize } from 'normalizr';
import { messagesLoaded, loadingMessagesError, messageSent } from './actions';
import { LOAD_MESSAGES, SEND_MESSAGE } from './constants';
import { messagesList } from './schema';
import { fetchMessages, fetchSendMessage } from './requests';
import { makeSelectChatId, makeSelectMessage } from './selectors';
import { makeSelectCurrentUser } from '../App/selectors';

export function* getMessages(action) {
  try {
    const messages = yield call(fetchMessages, action.chatId);
    const normalized = yield normalize(messages, messagesList);
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

export function* makeSendMessage() {
  try {
    const chatId = yield select(makeSelectChatId());
    const message = yield select(makeSelectMessage());
    const user = yield select(makeSelectCurrentUser());
    const sentMessage = yield call(fetchSendMessage, chatId, user.get('id'), message);
    yield put(messageSent(sentMessage));
  } catch (err) {
    console.log(err);
  }
}

export function* sendMessage() {
  yield takeEvery(SEND_MESSAGE, makeSendMessage);
}

export default [
  messagesData,
  sendMessage,
];
