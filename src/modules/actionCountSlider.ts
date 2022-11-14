import { setLeftValue, setMaxValue, setMinValue, setRightValue } from './slider';

const count: HTMLElement = document.querySelector('.count');

count.addEventListener('input', (e) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains('input-left')) {
    setLeftValue(count);
  }
  if (target.classList.contains('input-right')) {
    setRightValue(count);
  }
  if (target.classList.contains('input-min')) {
    setMinValue(count);
  }
  if (target.classList.contains('input-max')) {
    setMaxValue(count);
  }
});
