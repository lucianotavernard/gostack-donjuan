import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import sales from './sales/sagas';
import products from './products/sagas';
import types from './types/sagas';
import sizes from './sizes/sagas';

export default function* rootSaga() {
  return yield all([auth, sales, products, types, sizes]);
}
