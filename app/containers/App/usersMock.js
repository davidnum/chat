import { normalize, schema } from 'normalizr';

const users = [
  {
    id: 1,
    name: 'Roza',
    avatar: 'https://pickaface.net/assets/images/slides/slide1.png',
  }, {
    id: 2,
    name: 'Peter',
    avatar: 'https://pickaface.net/assets/images/slides/slide2.png',
  }, {
    id: 3,
    name: 'Sam',
    avatar: 'https://pickaface.net/assets/images/slides/slide4.png',
  }, {
    id: 4,
    name: 'Jane',
    avatar: 'https://pickaface.net/assets/images/slides/slide3.png',
  }
];

const usersSchema = new schema.Entity('users');

export function getUsers() {
  return normalize(users, [usersSchema]).entities.users;
}
