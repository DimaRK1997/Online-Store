import { Product } from '../../types';
import { renderColors } from './filters/renderColors';
import { renderCountSlider } from './filters/renderCountSlider';
import { renderShapes } from './filters/renderShape';
import { renderSize } from './filters/renderSize';
import { renderYearSlider } from './filters/renderYearsSlider';

export function renderFilters(data: Array<Product>) {
  renderYearSlider(data);
  renderCountSlider(data);
  renderShapes(data);
  renderColors(data);
  renderSize(data);
}
