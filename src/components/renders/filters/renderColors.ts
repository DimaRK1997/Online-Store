import { Product } from '../../../types';

export function renderColors(data: Array<Product>) {
  const colors = data.map((el) => el.color);
  const noRepeat = new Set(colors);

  const element = document.getElementById('items_color');

  element.innerHTML = Array.from(noRepeat)
    .map((el) => {
      return `<div class="item item-color">
                <label><input type="checkbox" name="color" id="color" data-color="${el}"/>&#160;${el}</label>
              </div>`;
    })
    .join('');
}
