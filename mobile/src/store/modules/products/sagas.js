import { Alert } from 'react-native';
import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';

import api from '~/services/api';

import { getProductsSuccess } from './actions';

export function* getProducts() {
  try {
    const response = yield call(api.get, 'products');

    const repository = response.data.map(product => ({
      ...product,
      url: `http://10.0.3.2:3333/files/${product.photo}`,
    }));

    yield put(getProductsSuccess(repository));
  } catch (error) {
    Alert.alert('Ocorreu algum erro', 'Por favor tente novamente');
  }
}

export default all([takeLatest('@products/GET_PRODUCTS_REQUEST', getProducts)]);
