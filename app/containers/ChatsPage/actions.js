import {
  LOAD_CHATS,
  LOAD_CHATS_ERROR,
  LOAD_CHATS_SUCCESS,
} from './constants';

export function loadChats() {
  return {
    type: LOAD_CHATS,
  };
}

export function chatsLoaded(chats, messages, users) {
  return {
    type: LOAD_CHATS_SUCCESS,
    chats,
    messages,
    users,
  };
}

export function chatsLoadingError(error) {
  return {
    type: LOAD_CHATS_ERROR,
    error,
  };
}
