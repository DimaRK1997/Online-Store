import './assets/style/style';
import './modules/actions';

import { renderFilters } from './components/renders/renderFilters';
import data from './data/db';

renderFilters(data);
