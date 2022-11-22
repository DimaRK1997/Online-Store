import { Product } from '../../../types';

export function renderShapes(data: Array<Product>) {
  const shapes = data.map((el) => el.shape);
  const noRepeat = new Set(shapes);

  const element = document.getElementById('items_shape');

  element.innerHTML = Array.from(noRepeat)
    .map((el) => {
      return `<div class="item item-shape">
                <label><input type="checkbox" name="shape" id="shape" data-shape="${el}"/>&#160;${el}</label>
              </div>`;
    })
    .join('');
}
