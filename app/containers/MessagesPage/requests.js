import messagesMock from './messagesMock';
import shortId from 'shortid';

export function fetchMessages(chatId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(messagesMock.filter((message) => message.chat_id === chatId));
    }, 1000);
  });
}

export function fetchSendMessage(chatId, userId, message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: shortId.generate(),
        chat_id: chatId,
        created_at: new Date().getTime() / 1000,
        text: message,
        user: userId,
      })
    }, 1000);
  });
}
