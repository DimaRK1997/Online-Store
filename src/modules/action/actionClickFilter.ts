import { renderFilters } from '../../components/renders/renderFilters';
import { renderProducts } from '../../components/renders/renderProducts';
import { getDataSelect } from '../filters/getDataOnSelect';
import { getFilters } from '../filters/getFilters';
import { objectSave, setStorage } from '../storage/storage';

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

    const search: HTMLInputElement = document.querySelector('.search-input');
    search.value = '';
    search.classList.remove('active');

    const data = getDataSelect();
    renderFilters(data);
    renderProducts(data);
  }
}

export function showSortData() {
  getFilters();

  const data = getDataSelect();

  const search: HTMLInputElement = document.querySelector('.search-input');
  const updateData = data.filter((el) => el.name.toLowerCase().includes(search.value.toLowerCase()));

  renderProducts(updateData);
}
