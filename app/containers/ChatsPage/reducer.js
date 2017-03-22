import { fromJS } from 'immutable';
import {
  LOAD_CHATS,
  LOAD_CHATS_ERROR,
  LOAD_CHATS_SUCCESS,
} from './constants';

const initialState = fromJS({
  chats: false,
  messages: false,
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
        .set('chats', action.chats)
        .set('messages', action.messages);
    case LOAD_CHATS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default chatPageReducer;
