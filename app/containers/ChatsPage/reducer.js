import { fromJS } from 'immutable';
import {
  LOAD_CHATS,
  LOAD_CHATS_ERROR,
  LOAD_CHATS_SUCCESS,
} from './constants';
import { MESSAGE_SENT } from '../MessagesPage/constants';

const initialState = fromJS({
  chats: {},
  messages: {},
  loading: false,
  error: false,
  loadedFromApi: false,
});

function chatPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CHATS:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_CHATS_SUCCESS:
      return state
        .set('loading', false)
        .set('loadedFromApi', true)
        .update('chats', (chats) => chats.concat(action.chats))
        .update('messages', (messages) => messages.concat(action.messages));
    case LOAD_CHATS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case MESSAGE_SENT:
      return state
        .updateIn(['messages'], (messages) => messages.set(action.message.id, action.message))
        .updateIn(['chats', action.message.chat_id.toString()], (chat) => ({ ...chat, last_message: action.message.id }));
    default:
      return state;
  }
}

/**/

export default chatPageReducer;
