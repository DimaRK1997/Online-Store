import { Product } from '../../data/types';

export function renderProducts(data: Array<Product>) {
  const element = document.getElementById('items_product');

  element.innerHTML = data
    .map((el) => {
      // return `<div class="item_product">
      //           <div class="card">
      //             <p class="title_card title-name">${el.name}</p>
      //             <div class="figure">

      //             </div>
      //             <p class="title_card title-shape">Форма фигуры: ${el.shape}</p>
      //             <p class="title_card title-color">Цвет: ${el.color}</p>
      //             <p class="title_card title-size">Размер: ${el.size}</p>
      //             <p class="title_card title-year">Год: ${el.year}</p>
      //           </div>
      //         </div>`;

      return `<div class="item_product">
                <div class="card">
                  <p class="title-name">${el.name[0].toUpperCase() + el.name.slice(1)}</p>
                  <div class="figure"></div>
                  <div class="content_info">
                    <div class="title_card title-favorite">
                      <span>Поулярный:</span>
                      <p>${el.favorite ? 'Да' : 'Нет'}</p>
                    </div>
                    <div class="title_card title-year">
                      <span>Год:</span>
                      <p>${el.year}</p>
                    </div>
                    <div class="title_card title-color">
                      <span>Цвет:</span>
                      <p>${el.color[0].toUpperCase() + el.color.slice(1)}</p>
                    </div>
                  </div>
                  <div class="content_info">
                    <div class="title_card title-size">
                      <span>Размер:</span>
                      <p>${el.size[0].toUpperCase() + el.size.slice(1)}</p>
                    </div>
                    <div class="title_card title-shape">
                      <span>Форма:</span>
                      <p>${el.shape[0].toUpperCase() + el.shape.slice(1)}</p>
                    </div>
                    <div class="title_card title-count">
                      <span>Количество:</span>
                      <p>${el.count[0].toUpperCase() + el.count.slice(1)}</p>
                    </div>
                  </div>
                  <div class="content-basket">
                      <button type="submit" class="btn-basket">
                        В корзину
                      </button>
                    </div>
                </div>
              </div>`;
    })
    .join('');
}
