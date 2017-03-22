import { schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {
  user,
});
const chat = new schema.Entity('chats', {
  last_message: message,
  user,
});

const chatsList = [chat];

export default chatsList;

