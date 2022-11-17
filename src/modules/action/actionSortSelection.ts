import { renderProducts } from '../../components/renders/renderProducts';
import { Product } from '../../data/types';
import { filter } from './actionClickFilter';
import { getSortData } from './getDataFilter';

export function actionSort(e: Event) {
  const target = e.target as HTMLOptionElement;
  const option: string = target.value;

  sortDataSelect(option);
}

function sortDataSelect(option: string) {
  const data: Product[] = getSortData(filter);

  if (option === '0') {
    renderProducts(data);
  }

  if (option === '1') {
    const updateData = mySortAZ(data, 'name');
    renderProducts(updateData);
  }

  if (option === '2') {
    const updateData = mySortZA(data, 'name');
    renderProducts(updateData);
  }

  if (option === '3') {
    const updateData = mySortDecr(data, 'year');
    renderProducts(updateData);
  }

  if (option === '4') {
    const updateData = mySortIncr(data, 'year');
    renderProducts(updateData);
  }

  if (option === '5') {
    const updateData = mySortDecr(data, 'count');
    renderProducts(updateData);
  }

  if (option === '6') {
    const updateData = mySortIncr(data, 'count');
    renderProducts(updateData);
  }
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
  console.log(data);
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
