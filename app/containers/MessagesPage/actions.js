import {
  LOAD_MESSAGES,
  LOAD_MESSAGES_ERROR,
  LOAD_MESSAGES_SUCCESS,
} from './constants';

export function loadMessages(chatId) {
  return {
    type: LOAD_MESSAGES,
    chatId,
  };
}

export function messagesLoaded(messages) {
  return {
    type: LOAD_MESSAGES_SUCCESS,
    messages,
  };
}

export function loadingMessagesError(error) {
  return {
    type: LOAD_MESSAGES_ERROR,
    error,
  };
}

