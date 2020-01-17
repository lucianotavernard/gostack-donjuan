import { combineReducers } from 'redux';

import auth from './auth/reducer';
import sales from './sales/reducer';
import products from './products/reducer';
import types from './types/reducer';
import sizes from './sizes/reducer';
import cart from './cart/reducer';

const reducers = combineReducers({
  auth,
  cart,
  sales,
  products,
  types,
  sizes,
});

export default reducers;
