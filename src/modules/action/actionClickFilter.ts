import { renderProducts } from '../../components/renders/renderProducts';
import data from '../../data/db';
import { Product } from '../../data/types';

type Filter = {
  num: Array<string>;
  name: Array<string>;
  count: Array<string>;
  year: Array<string>;
  shape: Array<string>;
  color: Array<string>;
  size: Array<string>;
  favorite: boolean;
};

export function actionClickFilter() {
  const filter: Filter = {
    num: [],
    name: [],
    count: [],
    year: [],
    shape: [],
    color: [],
    size: [],
    favorite: false,
  };
  const years: HTMLElement = document.getElementById('years');
  inputYearsAndCount(years, filter.year);

  const count: HTMLElement = document.getElementById('count');
  inputYearsAndCount(count, filter.count);

  filters('shape', filter.shape);
  filters('color', filter.color);
  filters('size', filter.size);

  filterFavorite('favorite', filter);

  const productsFilter = sortOnFilters(filter);
  renderProducts(productsFilter);
}

function inputYearsAndCount(element: HTMLElement, filter: Array<string>) {
  const inputMin: HTMLInputElement = element.querySelector('.input-min');
  const inputMax: HTMLInputElement = element.querySelector('.input-max');
  filter.push(inputMin.value);
  filter.push(inputMax.value);
}

function filters(dataAtribute: string, filter: Array<string>) {
  const elements: NodeListOf<HTMLInputElement> = document.querySelectorAll(`#${dataAtribute}`);

  elements.forEach((el) => {
    if (el.checked === true) {
      filter.push(el.dataset[dataAtribute]);
    }
  });
}

function filterFavorite(dataAtribute: string, filter: Filter) {
  const element: HTMLInputElement = document.querySelector(`#${dataAtribute}`);

  if (element.checked === true) filter.favorite = true;
}

function sortOnFilters(filter: Filter) {
  let result: Array<Product> = [];
  result = data.filter((el) => {
    if (
      +filter.year[0] <= +el.year &&
      +el.year <= +filter.year[1] &&
      +filter.count[0] <= +el.count &&
      +el.count <= +filter.count[1]
    ) {
      return true;
    }
  });
  if (filter.shape.length > 0) {
    result = result.filter((el) => {
      let bool = false;
      filter.shape.map((eF) => {
        if (el.shape === eF) {
          bool = true;
        }
      });
      return bool;
    });
  }
  if (filter.color.length > 0) {
    result = result.filter((el) => {
      let bool = false;
      filter.color.map((eF) => {
        if (el.color === eF) {
          bool = true;
        }
      });
      return bool;
    });
  }
  if (filter.size.length > 0) {
    result = result.filter((el) => {
      let bool = false;
      filter.size.map((eF) => {
        if (el.size === eF) {
          bool = true;
        }
      });
      return bool;
    });
  }
  return result;
}
