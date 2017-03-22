import { schema } from 'normalizr';

const user = new schema.Entity('users');
const messages = new schema.Entity('messages', {
  user,
});

export const message = new schema.Entity('message', {
  user,
});

export const messagesList = [messages];

export default messagesList;
