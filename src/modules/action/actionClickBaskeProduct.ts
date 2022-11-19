import { objectSave, setStorage } from '../storage/storage';

export function actionProduct(e: Event) {
  const target = e.target as HTMLElement;
  const element = target.parentElement.parentElement.parentElement;

  const id = element.getAttribute('id');

  if (element.classList.contains('item_product') && target.classList.contains('marker')) {
    const updateCount: string[] = objectSave[0].countBasket.filter((e) => (id === e ? false : true));
    objectSave[0].countBasket = updateCount;
    target.classList.remove('marker');
  } else if (
    element.classList.contains('item_product') &&
    target.classList.contains('btn-basket') &&
    objectSave[0].countBasket.length < 10
  ) {
    objectSave[0].countBasket.push(id);
    target.classList.add('marker');
  }

  renderCountBasket();
  setStorage();
}

export function renderCountBasket() {
  const spanElement: HTMLElement = document.querySelector('.size-basket');
  const sum = objectSave[0].countBasket.length;

  if (sum) {
    spanElement.style.display = 'block';
    spanElement.textContent = String(sum);
  } else {
    spanElement.style.display = 'none';
    spanElement.textContent = '';
  }
}
