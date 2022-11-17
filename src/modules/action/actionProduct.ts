export function actionProduct(e: Event) {
  const spanElement: HTMLElement = document.querySelector('.size-basket');
  let sum = spanElement.textContent as unknown as number;
  const target = e.target as HTMLElement;
  if (target.classList.contains('marker')) {
    sum = sum - 1;

    sum === 0 ? (spanElement.textContent = '') : (spanElement.textContent = sum as unknown as string);
    target.classList.remove('marker');
  } else if (target.classList.contains('btn-basket')) {
    // objectSave[0].sizeBasked = objectSave[0].sizeBasked + 1
    sum = +sum + 1;
    spanElement.textContent = sum as unknown as string;
    target.classList.add('marker');
  }
}
