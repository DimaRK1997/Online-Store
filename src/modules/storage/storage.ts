import { Data } from '../../types';

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

export function setStorage() {
  localStorage.setItem('userFilter', JSON.stringify(objectSave));
}

function getStorage() {
  const storage = JSON.parse(localStorage.getItem('userFilter'));
  return storage;
}
