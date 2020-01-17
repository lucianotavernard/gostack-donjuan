import { Alert } from 'react-native';
import {
  call, put, select, all, takeLatest,
} from 'redux-saga/effects';

import api from '~/services/api';

import { getTypesSuccess } from './actions';

export function* getTypes() {
  try {
    const productSelected = yield select(state => state.products.selected);
    const response = yield call(api.get, `products/${productSelected.id}/types`);

    const repository = response.data.map(type => ({
      ...type,
      url: `http://10.0.3.2:3333/files/${type.photo}`,
    }));

    yield put(getTypesSuccess(repository));
  } catch (error) {
    Alert.alert('Ocorreu algum erro', 'Por favor tente novamente');
  }
}

export default all([takeLatest('@types/GET_TYPES_REQUEST', getTypes)]);
