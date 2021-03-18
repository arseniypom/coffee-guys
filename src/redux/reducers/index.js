import { combineReducers } from 'redux';

import filtersReducer from './filters';
import coffeeReducer from './coffee';

const rootReducer = combineReducers({
  filters: filtersReducer,
  coffee: coffeeReducer 
});

export default rootReducer;