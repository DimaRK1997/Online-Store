const sizeBasket: HTMLElement = document.querySelector('.size-basket');

export function actionProduct(e: Event) {
  let sum = sizeBasket.textContent as unknown as number;
  const target = e.target as HTMLElement;
  if (target.classList.contains('marker')) {
    sum = sum - 1;
    sum === 0 ? (sizeBasket.textContent = '') : (sizeBasket.textContent = sum as unknown as string);
    target.classList.remove('marker');
  } else if (target.classList.contains('btn-basket')) {
    sum = +sum + 1;
    sizeBasket.textContent = sum as unknown as string;
    target.classList.add('marker');
  }
}
