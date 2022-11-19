import { setLeftValue, setMaxValue, setMinValue, setRightValue } from './slider';

export function actionInputCount(e: Event) {
  const count: HTMLElement = document.querySelector('.count');
  const target = e.target as HTMLElement;

  if (target.classList.contains('input-left')) setLeftValue(count);
  if (target.classList.contains('input-right')) setRightValue(count);
  if (target.classList.contains('input-min')) setMinValue(count);
  if (target.classList.contains('input-max')) setMaxValue(count);
}
