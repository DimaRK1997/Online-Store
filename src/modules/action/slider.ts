export function setInputSlider(element: HTMLElement) {
  setLeftValue(element);
  setRightValue(element);
  setMinValue(element);
  setMaxValue(element);
}

export function setLeftValue(element: HTMLElement) {
  const inputleft: HTMLInputElement = element.querySelector('.input-left');
  const inputright: HTMLInputElement = element.querySelector('.input-right');

  const progress: HTMLElement = element.querySelector('.progress');

  const inputMin: HTMLInputElement = element.querySelector('.input-min');

  const [min, max] = [+inputleft.min, +inputleft.max];
  inputleft.value = Math.min(+inputleft.value, +inputright.value - 1) + '';

  const percent = ((+inputleft.value - min) / (max - min)) * 100;
  progress.style.left = percent + '%';

  inputMin.value = inputleft.value;
}

export function setRightValue(element: HTMLElement) {
  const inputleft: HTMLInputElement = element.querySelector('.input-left');
  const inputright: HTMLInputElement = element.querySelector('.input-right');

  const progress: HTMLElement = element.querySelector('.progress');

  const inputMax: HTMLInputElement = element.querySelector('.input-max');

  const [min, max] = [+inputright.min, +inputright.max];
  inputright.value = Math.max(+inputright.value, +inputleft.value + 1) + '';

  const percent = ((+inputright.value - min) / (max - min)) * 100;
  progress.style.right = 100 - percent + '%';

  inputMax.value = inputright.value;
}

export function setMinValue(element: HTMLElement) {
  const inputleft: HTMLInputElement = element.querySelector('.input-left');
  const inputright: HTMLInputElement = element.querySelector('.input-right');

  const progress: HTMLElement = element.querySelector('.progress');

  const inputMin: HTMLInputElement = element.querySelector('.input-min');
  const inputMax: HTMLInputElement = element.querySelector('.input-max');

  const [min, max] = [+inputleft.min, +inputright.max];

  if (+inputMax.value - +inputMin.value > 0 && +inputMax.value <= max) {
    inputleft.value = inputMin.value;
    progress.style.left = ((+inputleft.value - min) / (max - min)) * 100 + '%';
  }
}

export function setMaxValue(element: HTMLElement) {
  const inputleft: HTMLInputElement = element.querySelector('.input-left');
  const inputright: HTMLInputElement = element.querySelector('.input-right');

  const progress: HTMLElement = element.querySelector('.progress');

  const inputMax: HTMLInputElement = element.querySelector('.input-max');
  const inputMin: HTMLInputElement = element.querySelector('.input-min');

  const [min, max] = [+inputleft.min, +inputright.max];

  if (+inputMax.value - +inputMin.value > 0 && +inputMax.value <= max) {
    inputright.value = inputMax.value;
    progress.style.right = 100 - ((+inputright.value - min) / (max - min)) * 100 + '%';
  }
}
