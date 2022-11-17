import { objectSave } from './objectSave';

export function setStorage() {
  localStorage.setItem('userFilter', JSON.stringify(objectSave));
}

export function getStorage() {
  const storage = JSON.parse(localStorage.getItem('userFilter'));
  return storage;
}
