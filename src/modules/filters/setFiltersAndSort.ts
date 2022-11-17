import { showSortData } from '../action/actionClickFilter';
import { setInputSlider } from '../action/slider';
import { objectSave } from '../storage/objectSave';

export function setFilters() {
  setInputFilters();
  setCheckedFavorite();
  setCheckedFilters('shape');
  setCheckedFilters('color');
  setCheckedFilters('size');

  const meals: NodeListOf<HTMLOptionElement> = document.querySelectorAll('.meals');
  meals[+objectSave[0].optionActive].selected = true;

  showSortData();
}

function setCheckedFilters(name: string) {
  const elements: NodeListOf<HTMLInputElement> = document.querySelectorAll(`#${name}`);

  elements.forEach((e1) => {
    const arr = objectSave[0].saveFilter[name] as Array<string>;
    arr.map((e2) => {
      if (e1.dataset[name] === e2) {
        e1.checked = true;
      }
    });
  });
}

function setCheckedFavorite() {
  const element: HTMLInputElement = document.querySelector('#favorite');
  if (objectSave[0].saveFilter.favorite === true) element.checked = true;
}

export function setInputFilters() {
  const years: HTMLElement = document.querySelector('.years');
  const count: HTMLElement = document.querySelector('.count');
  setInputSlider(years);
  setInputSlider(count);
}
