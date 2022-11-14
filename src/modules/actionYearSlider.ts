import { setLeftValue, setRightValue, setMaxValue, setMinValue } from './slider';

const years: HTMLElement = document.querySelector('.years');

years.addEventListener('input', (e) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains('input-left')) {
    setLeftValue(years);
  }
  if (target.classList.contains('input-right')) {
    setRightValue(years);
  }
  if (target.classList.contains('input-min')) {
    setMinValue(years);
  }
  if (target.classList.contains('input-max')) {
    setMaxValue(years);
  }
});
