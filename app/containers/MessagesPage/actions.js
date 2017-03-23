import {
  LOAD_MESSAGES,
  LOAD_MESSAGES_ERROR,
  LOAD_MESSAGES_SUCCESS,
  INPUT_MESSAGE,
  SEND_MESSAGE,
  MESSAGE_SENT,
  MESSAGE_RECEIVED,
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

export function inputMessage(message) {
  return {
    type: INPUT_MESSAGE,
    message,
  };
}

export function sendMessage() {
  return {
    type: SEND_MESSAGE,
  };
}

export function messageSent(message) {
  return {
    type: MESSAGE_SENT,
    message,
  };
}

export function messageReceived(message) {
  return {
    type: MESSAGE_RECEIVED,
    message,
  };
}

