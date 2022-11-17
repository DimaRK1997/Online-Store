import { Product } from '../../../types';

export function renderColors(data: Array<Product>) {
  const colors: Array<string> = [];

  data.map((el) => colors.push(el.color));

  const result = colors.filter((e, i) => colors.indexOf(e) === i);

  const element = document.getElementById('items_color');

  element.innerHTML = result
    .map((el) => {
      return `<div class="item item-color">
                <label><input type="checkbox" name="color" id="color" data-color="${el}"/>&#160;${el}</label>
              </div>`;
    })
    .join('');
}
