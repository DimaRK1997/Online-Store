import './assets/style/style';
import './modules/actions';

import { renderFilters } from './components/renders/renderFilterss';
import data from './data/db';

renderFilters(data);
