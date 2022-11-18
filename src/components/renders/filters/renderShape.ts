import { Product } from '../../../types';

export function renderShapes(data: Array<Product>) {
  const shapes: string[] = [];

  data.map((el) => shapes.push(el.shape));

  const result = shapes.filter((e, i) => shapes.indexOf(e) === i);

  const element = document.getElementById('items_shape');

  element.innerHTML = result
    .map((el) => {
      return `<div class="item item-shape">
                <label><input type="checkbox" name="shape" id="shape" data-shape="${el}"/>&#160;${el}</label>
              </div>`;
    })
    .join('');
}
