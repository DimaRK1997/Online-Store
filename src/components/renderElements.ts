import { Product } from '../data/types';
import { renderColors } from './renders/filters/renderColors';
import { renderCountSlider } from './renders/filters/renderCountSlider';
import { renderShapes } from './renders/filters/renderShape';
import { renderSize } from './renders/filters/renderSize';
import { renderYearSlider } from './renders/filters/renderYearsSlider';
import { renderProducts } from './renders/renderProducts';

export function renderElements(data: Array<Product>) {
  renderYearSlider(data);
  renderCountSlider(data);
  renderShapes(data);
  renderColors(data);
  renderSize(data);

  renderProducts(data);
}
