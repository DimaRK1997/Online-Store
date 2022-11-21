import { Product } from '../../../types';

export function renderSize(data: Array<Product>) {
  const size = data.map((el) => el.size);
  const noRepeat = new Set(size);

  const element = document.getElementById('items_size');

  element.innerHTML = Array.from(noRepeat)
    .map((el) => {
      return `<div class="item item-size">
                  <label><input type="checkbox" name="size" id="size" data-size="${el}"/>&#160;${el}</label>
                </div>`;
    })
    .join('');
}
