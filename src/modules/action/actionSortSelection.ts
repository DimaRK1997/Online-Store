import { renderProducts } from '../../components/renders/renderProducts';
import { getDataSelect } from '../filters/getDataOnSelect';
import { objectSave, setStorage } from '../storage/storage';

export function actionSortSelection(e: Event) {
  const target = e.target as HTMLOptionElement;
  const option = target.value;
  objectSave[0].optionActive = `${option}`;
  const data = getDataSelect(option, objectSave[0].saveFilter);
  renderProducts(data);
  setStorage();
}
