import chatsMock from './chatsMock';

export default function fetchChats() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(chatsMock);
    }, 5000);
  });
}
