import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import sale from './sale/reducer';

const reducers = combineReducers({ auth, user, sale });

export default reducers;
