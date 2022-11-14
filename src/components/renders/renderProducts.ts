import { Product } from '../../data/types';

export function renderProducts(data: Array<Product>) {
  const element = document.getElementById('items_product');

  element.innerHTML = data
    .map((el) => {
      return `<div class="item_product">
                <div class="card">
                  <div class="figure">
                    
                  </div>
                  <p class="title_card title-name">${el.name}</p>
                  <p class="title_card title-shape">Форма фигуры: ${el.shape}</p>
                  <p class="title_card title-color">Цвет: ${el.color}</p>
                  <p class="title_card title-size">Размер: ${el.size}</p>
                  <p class="title_card title-year">Год: ${el.year}</p>
                </div>
              </div>`;
    })
    .join('');
}
