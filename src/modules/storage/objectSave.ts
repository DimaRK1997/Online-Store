import { Data } from '../../types';
import { getStorage } from './storage';

const userStorage = getStorage();

export const objectSave: Data = userStorage || [
  {
    saveFilter: {
      num: [],
      name: [],
      count: [],
      year: [],
      shape: [],
      color: [],
      size: [],
      favorite: false,
    },
    optionActive: '0',
    sizeBasked: 0,
  },
];
