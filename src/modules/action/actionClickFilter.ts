import { renderElements } from '../../components/renderElements';
import { renderProducts } from '../../components/renders/renderProducts';
import { getDataSelect } from '../filters/getDataOnSelect';
import { getFilters } from '../filters/getFilters';
import { objectSave } from '../storage/objectSave';
import { setStorage } from '../storage/storage';

export function actionClickFilter(e: Event) {
  const target = e.target as HTMLElement;
  if (target.classList.contains('btn-enter')) {
    showSortData();
  }
  if (target.classList.contains('btn-reset')) {
    objectSave[0].saveFilter = {
      num: [],
      name: [],
      count: [],
      year: [],
      shape: [],
      color: [],
      size: [],
      favorite: false,
    };
    setStorage();
    const data = getDataSelect(objectSave[0].optionActive, objectSave[0].saveFilter);
    renderElements(data);
  }
}

export function showSortData() {
  getFilters();

  const data = getDataSelect(objectSave[0].optionActive, objectSave[0].saveFilter);
  renderProducts(data);
}
