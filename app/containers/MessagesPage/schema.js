import { schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {
  user,
});

const messagesList = [message];

export default messagesList;
