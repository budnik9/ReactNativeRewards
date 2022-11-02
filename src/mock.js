import {generateId} from './services/utils';

export const users = {
  johnChen: {
    id: generateId(),
    name: 'John',
    lastName: 'Chen',
  },
  davidGreene: {
    id: generateId(),
    name: 'David',
    lastName: 'Greene',
  },
  dmitroGordon: {
    id: generateId(),
    name: 'Dmitro',
    lastName: 'Gordon',
    avatarUrl:
      'https://img.tsn.ua/cached/024/tsn-71c6e1c5a35efa308f11e0ccf1aae45e/thumbs/428x268/6b/25/1f996b9023c1422c6a0e3054dc59256b.jpeg',
  },
  alexBrown: {
    id: generateId(),
    name: 'Alex',
    lastName: 'Brown',
  },
};
