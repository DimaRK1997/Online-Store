import { objectSave } from '../storage/storage';

export function actionProduct(e: Event) {
  const spanElement: HTMLElement = document.querySelector('.size-basket');

  const target = e.target as HTMLElement;
  let sum = objectSave[0].sizeBasked;

  if (target.classList.contains('marker')) {
    sum--;
    target.classList.remove('marker');
  } else if (target.classList.contains('btn-basket') && sum < 10) {
    sum++;
    target.classList.add('marker');
  }

  if ((objectSave[0].sizeBasked = sum)) {
    spanElement.style.display = 'block';
    spanElement.textContent = String(sum);
  } else {
    spanElement.style.display = 'none';
    spanElement.textContent = '';
  }
}

// function randerBasked() {}
