import { Product } from '../../../data/types';

export function renderYearSlider(data: Array<Product>) {
  const years: Array<number> = [];

  data.map((el) => years.push(+el.year));

  const min = Math.min.apply(null, years);
  const max = Math.max.apply(null, years);

  const element: HTMLElement = document.getElementById('years');

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
