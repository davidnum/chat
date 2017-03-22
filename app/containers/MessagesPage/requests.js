import messagesMock from './messagesMock';

export function fetchMessages(chatId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(messagesMock.filter((message) => message.chat_id === chatId));
    }, 3000);
  });
}
