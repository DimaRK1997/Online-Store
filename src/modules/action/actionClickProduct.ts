import { renderCountBasket } from '../../components/renders/renderProducts';
import { objectSave, setStorage } from '../storage/storage';

export function actionProduct(e: Event) {
  clickBasket(e);
  renderCountBasket();
  setStorage();
}

function clickBasket(e: Event) {
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
}
