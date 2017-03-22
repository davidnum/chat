import { fromJS } from 'immutable';
import {
  LOAD_MESSAGES,
  LOAD_MESSAGES_ERROR,
  LOAD_MESSAGES_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  messages: {},
  chatId: null,
});

function messagesPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MESSAGES:
      return state
        .set('error', false)
        .set('loading', true)
        .set('chatId', action.chatId);
    case LOAD_MESSAGES_SUCCESS:
      return state
        .update('messages', (messages) => messages.concat(action.messages))
        .set('loading', false);
    case LOAD_MESSAGES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default messagesPageReducer;
