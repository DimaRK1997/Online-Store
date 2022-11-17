import { Product } from '../../data/types';
import { Filter } from './actionClickFilter';
import data from '../../data/db';

export function getSortData(filter: Filter) {
  let result: Array<Product> = [];
  result = data.filter((el) => {
    if (
      (+filter.year[0] <= +el.year &&
        +el.year <= +filter.year[1] &&
        +filter.count[0] <= +el.count &&
        +el.count <= +filter.count[1]) ||
      (filter.year.length <= 0 && filter.count.length <= 0)
    ) {
      return true;
    }
  });

  if (filter.shape.length > 0) {
    result = myFilter(result, filter.shape, 'shape');
  }

  if (filter.color.length > 0) {
    result = myFilter(result, filter.color, 'color');
  }

  if (filter.size.length > 0) {
    result = myFilter(result, filter.size, 'size');
  }

  result = result.filter((el) => {
    if (filter.favorite === false) {
      return true;
    }
    if (filter.favorite === true && el.favorite === true) {
      return true;
    }
  });

  return result;
}

function myFilter(result: Array<Product>, property: Array<string>, key: string) {
  result = result.filter((el) => {
    let bool = false;
    property.map((eF) => {
      if (el[key] === eF) {
        bool = true;
      }
    });
    return bool;
  });
  return result;
}
