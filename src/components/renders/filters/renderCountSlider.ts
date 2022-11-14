import { Product } from '../../../data/types';

export function renderCountSlider(data: Array<Product>) {
  const counts: Array<number> = [];

  data.map((el) => counts.push(+el.count));

  const min = Math.min.apply(null, counts);
  const max = Math.max.apply(null, counts);

  const element = document.getElementById('count');

  element.innerHTML = `
  <div class="content_min-max">
    <div class="get-min">
        <span>Min </span><input type="email" id="input-min" class="input-min" value="${min}">
    </div>
    <span>-</span>
    <div class="get-max">
        <span>Max </span><input type="email" id="input-max" class="input-max" value="${max}">
    </div>
  </div>
  <div class="input-slider">
    <input type="range" id="input-left" class="input-left" min="${min}" max="${max}" value="${min}" />
    <input type="range" id="input-right" class="input-right" min="${min}" max="${max}" value="${max}" />
    <div class="slider">
      <div class="progress"></div>
    </div>
  </div>`;
}
