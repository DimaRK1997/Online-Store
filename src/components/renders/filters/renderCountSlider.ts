import { objectSave } from '../../../modules/storage/storage';
import { Product } from '../../../types';

export function renderCountSlider(data: Array<Product>) {
  const counts: number[] = [];

  data.map((el) => counts.push(+el.count));

  const minDefault = Math.min.apply(null, counts);
  const maxDefault = Math.max.apply(null, counts);

  const minUser = objectSave[0].saveFilter.count[0];
  const maxUser = objectSave[0].saveFilter.count[1];

  const min = minUser || minDefault;
  const max = maxUser || maxDefault;

  const element: HTMLElement = document.getElementById('count');

  element.innerHTML = `
  <div class="content_min-max">
    <div class="get-min">
        <span>Min </span><input type="email" id="input-min" class="input-min" min="${minDefault}" max="${maxDefault}" value="${min}">
    </div>
    <span>-</span>
    <div class="get-max">
        <span>Max </span><input type="email" id="input-max" class="input-max" min="${minDefault}" max="${maxDefault}" value="${max}">
    </div>
  </div>
  <div class="input-slider">
    <input type="range" id="input-left" class="input-left" min="${minDefault}" max="${maxDefault}" value="${min}" />
    <input type="range" id="input-right" class="input-right" min="${minDefault}" max="${maxDefault}" value="${max}" />
    <div class="slider">
      <div class="progress"></div>
    </div>
  </div>`;
}
