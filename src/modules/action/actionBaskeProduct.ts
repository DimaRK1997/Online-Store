import { objectSave } from '../storage/storage';

export function actionProduct(e: Event) {
  const spanElement: HTMLElement = document.querySelector('.size-basket');

  const target = e.target as HTMLElement;
  let sum = objectSave[0].sizeBasked;

  if (target.classList.contains('marker')) {
    sum = sum - 1;
    target.classList.remove('marker');
  } else if (target.classList.contains('btn-basket') && sum < 10) {
    sum = sum + 1;
    target.classList.add('marker');
  }

  sum ? (spanElement.style.display = 'block') : (spanElement.style.display = 'none');
  objectSave[0].sizeBasked = sum;

  if (sum) {
    spanElement.textContent = sum + '';
  } else {
    spanElement.textContent = '';
  }
}
