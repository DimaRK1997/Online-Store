import { actionClickSearch } from './action/actionClickSearch';
import { actionInputYears } from './action/actionInputYears';
import { actionInputCount } from './action/actionCountSlider';
import { actionClickFilter } from './action/actionClickFilter';

const btn: HTMLElement = document.querySelector('.search-icon');
btn.addEventListener('click', actionClickSearch);

const years: HTMLElement = document.querySelector('.years');
years.addEventListener('input', actionInputYears);

const count: HTMLElement = document.querySelector('.count');
count.addEventListener('input', actionInputCount);

const resetEnter: HTMLElement = document.querySelector('.reset-enter');
resetEnter.addEventListener('click', actionClickFilter);
