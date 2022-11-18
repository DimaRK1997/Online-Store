import { actionClickSearch } from './action/actionClickSearch';
import { actionInputYears } from './action/actionInputYears';
import { actionInputCount } from './action/actionInputCount';
import { actionClickFilter } from './action/actionClickFilter';
import { actionProduct } from './action/actionBaskeProduct';
import { actionSortSelection } from './action/actionSortSelection';
import { setFilters } from './filters/setFiltersAndSort';
import { actionSearch } from './action/actionSearch';

const btn: HTMLElement = document.querySelector('.search-icon');
btn.addEventListener('click', actionClickSearch);

const years: HTMLElement = document.querySelector('.years');
years.addEventListener('input', actionInputYears);

const count: HTMLElement = document.querySelector('.count');
count.addEventListener('input', actionInputCount);

const resetEnter: HTMLElement = document.querySelector('.reset-enter');
resetEnter.addEventListener('click', actionClickFilter);

const selectControl: HTMLElement = document.querySelector('.select-control');
selectControl.addEventListener('input', actionSortSelection);

const product: HTMLElement = document.querySelector('.product');
product.addEventListener('click', actionProduct);

document.addEventListener('DOMContentLoaded', setFilters);

const search: HTMLInputElement = document.querySelector('.search-input');
search.addEventListener('input', actionSearch);
