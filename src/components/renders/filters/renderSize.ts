import { Product } from '../../../types';

export function renderSize(data: Array<Product>) {
  const colors: string[] = [];

  data.map((el) => colors.push(el.size));

  const result = colors.filter((e, i) => colors.indexOf(e) === i);

  const element = document.getElementById('items_size');

  element.innerHTML = result
    .map((el) => {
      return `<div class="item item-size">
                  <label><input type="checkbox" name="size" id="size" data-size="${el}"/>&#160;${el}</label>
                </div>`;
    })
    .join('');
}
