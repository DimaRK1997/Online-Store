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

function mySortAZ(data: Array<Product>, key: string) {
  data.sort((a, b) => {
    const x = a[key] as string;
    const y = b[key] as string;
    if (x[0].toLowerCase() > y[0].toLowerCase()) return 1;
    if (x[0].toLowerCase() < y[0].toLowerCase()) return -1;
    return 0;
  });
  return data;
}

function mySortZA(data: Array<Product>, key: string) {
  data.sort((a, b) => {
    const x = a[key] as string;
    const y = b[key] as string;
    if (x[0].toLowerCase() < y[0].toLowerCase()) return 1;
    if (x[0].toLowerCase() > y[0].toLowerCase()) return -1;
    return 0;
  });
  return data;
}

function mySortIncr(data: Array<Product>, key: string) {
  data.sort((a, b) => {
    if (a[key] > b[key]) return -1;
    if (a[key] < b[key]) return 1;
    return 0;
  });
  return data;
}

function mySortDecr(data: Array<Product>, key: string) {
  data.sort((a, b) => {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  });
  return data;
}
