import { Alert } from 'react-native';
import {
  call, put, select, all, takeLatest,
} from 'redux-saga/effects';

import api from '~/services/api';

import { formatPrice } from '~/util/format';

import { getSizesSuccess } from './actions';

export function* getSizes() {
  try {
    const typeSelected = yield select(state => state.types.selected);
    const response = yield call(api.get, `types/${typeSelected.id}/sizes`);

    const repository = response.data.map(typeSize => ({
      ...typeSize,
      priceFormatted: formatPrice(typeSize.price),
      type: {
        ...typeSize.type,
        url: `http://10.0.3.2:3333/files/${typeSize.type.photo}`,
      },
      size: {
        ...typeSize.size,
        url: `http://10.0.3.2:3333/files/${typeSize.size.photo}`,
      },
    }));

    yield put(getSizesSuccess(repository));
  } catch (error) {
    console.tron.log(error);
    Alert.alert('Ocorreu algum erro', 'Por favor tente novamente');
  }
}

export default all([takeLatest('@sizes/GET_SIZES_REQUEST', getSizes)]);
