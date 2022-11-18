import { objectSave, setStorage } from '../storage/storage';

export function getFilters() {
  const years: HTMLElement = document.getElementById('years');
  const count: HTMLElement = document.getElementById('count');

  filterYearsAndCount(years, objectSave[0].saveFilter.year);
  filterYearsAndCount(count, objectSave[0].saveFilter.count);

  filterProperty('shape', objectSave[0].saveFilter.shape);
  filterProperty('color', objectSave[0].saveFilter.color);
  filterProperty('size', objectSave[0].saveFilter.size);
  filterFavorite('favorite');

  setStorage();

  return objectSave[0].saveFilter;
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
  if (dataAtribute === 'shape') objectSave[0].saveFilter.shape = property;
  if (dataAtribute === 'color') objectSave[0].saveFilter.color = property;
  if (dataAtribute === 'size') objectSave[0].saveFilter.size = property;
}

function filterFavorite(dataAtribute: string) {
  const element: HTMLInputElement = document.querySelector(`#${dataAtribute}`);

  if (element.checked === true) {
    objectSave[0].saveFilter.favorite = true;
  } else {
    objectSave[0].saveFilter.favorite = false;
  }
}
