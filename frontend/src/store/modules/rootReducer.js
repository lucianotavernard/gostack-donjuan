import { combineReducers } from 'redux';

import auth from './auth/reducer';
import sales from './sales/reducer';

const reducers = combineReducers({
  auth,
  sales,
});

export default reducers;
