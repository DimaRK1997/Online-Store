import './assets/style/style';

import data from './data/db';

import './modules/actionSearch'; //search
import './modules/actionYearSlider'; //slider
import './modules/actionCountSlider'; //slider

import { renderElements } from './components/renderElements';

renderElements(data);
