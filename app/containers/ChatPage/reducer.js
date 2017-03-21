import { fromJS } from 'immutable';
import {
  LOAD_CHATS,
  LOAD_CHATS_ERROR,
  LOAD_CHATS_SUCCESS,
} from './constants';

const initialState = fromJS({
  chats: false,
  users: false,
  messages: false,
  loading: false,
  error: false,
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
        .set('chats', action.chats)
        .set('messages', action.messages)
        .set('users', action.users);
    case LOAD_CHATS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default chatPageReducer;
