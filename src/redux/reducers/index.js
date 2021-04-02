import { combineReducers } from 'redux';

import filtersReducer from './filters';
import coffeeReducer from './coffee';
import cartReducer from './cart';

const rootReducer = combineReducers({
  filters: filtersReducer,
  coffee: coffeeReducer,
  cart: cartReducer,
});

export default rootReducer;