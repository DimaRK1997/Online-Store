import { Product } from '../../types';
import { getDataFilter } from './getDataOnFilter';
import { Filter } from '../../types';

export function getDataSelect(option: string, filter: Filter) {
  let updateData: Product[] = getDataFilter(filter);

  if (option === '1') updateData = mySortAZ(updateData, 'name');
  if (option === '2') updateData = mySortZA(updateData, 'name');
  if (option === '3') updateData = mySortDecr(updateData, 'year');
  if (option === '4') updateData = mySortIncr(updateData, 'year');
  if (option === '5') updateData = mySortDecr(updateData, 'count');
  if (option === '6') updateData = mySortIncr(updateData, 'count');

  return updateData;
}

function mySortAZ<Key extends keyof Product>(data: Product[], key: Key) {
  data.sort((a, b) => ((a[key] as string).toLowerCase() > (b[key] as string).toLowerCase() ? 1 : -1));
  return data;
}

function mySortZA<Key extends keyof Product>(data: Product[], key: Key) {
  data.sort((a, b) => ((a[key] as string).toLowerCase() < (b[key] as string).toLowerCase() ? 1 : -1));
  return data;
}

function mySortIncr<Key extends keyof Product>(data: Product[], key: Key) {
  data.sort((a, b) => (a[key] < b[key] ? 1 : -1));
  return data;
}

function mySortDecr<Key extends keyof Product>(data: Array<Product>, key: Key) {
  data.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return data;
}
