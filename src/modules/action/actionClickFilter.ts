import { renderProducts } from '../../components/renders/renderProducts';
import { getSortData } from './getDataFilter';

export type Filter = {
  num: Array<string>;
  name: Array<string>;
  count: Array<string>;
  year: Array<string>;
  shape: Array<string>;
  color: Array<string>;
  size: Array<string>;
  favorite: boolean;
};

export const filter: Filter = {
  num: [],
  name: [],
  count: [],
  year: [],
  shape: [],
  color: [],
  size: [],
  favorite: false,
};

export function actionClickFilter(e: Event) {
  const target = e.target as HTMLElement;
  if (target.classList.contains('btn-enter')) {
    showSortData();
  }
  if (target.classList.contains('btn-reset')) {
    // filter.num = [];
    // filter.name = [];
    // filter.count = [];
    // filter.year = [];
    // filter.shape = [];
    // filter.color = [];
    // filter.size = [];
    // filter.favorite = false;
    // showSortData();
  }
}

function showSortData() {
  const selectDefault: NodeListOf<HTMLOptionElement> = document.querySelectorAll('.meals');
  selectDefault[0].selected = true;

  const result = getFilters();
  const data = getSortData(result);

  renderProducts(data);
}

function getFilters() {
  const years: HTMLElement = document.getElementById('years');
  const count: HTMLElement = document.getElementById('count');

  filterYearsAndCount(years, filter.year);
  filterYearsAndCount(count, filter.count);

  filterProperty('shape', filter.shape);
  filterProperty('color', filter.color);
  filterProperty('size', filter.size);
  filterFavorite('favorite');

  return filter;
}

function filterYearsAndCount(element: HTMLElement, property: Array<string>) {
  const inputMin: HTMLInputElement = element.querySelector('.input-min');
  const inputMax: HTMLInputElement = element.querySelector('.input-max');
  property[0] = inputMin.value;
  property[1] = inputMax.value;
}

function filterProperty(dataAtribute: string, property: Array<string>) {
  const elements: NodeListOf<HTMLInputElement> = document.querySelectorAll(`#${dataAtribute}`);
  property = [];

  elements.forEach((el) => {
    if (el.checked === true) {
      property.push(el.dataset[dataAtribute]);
    }
  });
  if (dataAtribute === 'shape') filter.shape = property;
  if (dataAtribute === 'color') filter.color = property;
  if (dataAtribute === 'size') filter.size = property;
}

function filterFavorite(dataAtribute: string) {
  const element: HTMLInputElement = document.querySelector(`#${dataAtribute}`);

  if (element.checked === true) {
    filter.favorite = true;
  } else {
    filter.favorite = false;
  }
}
