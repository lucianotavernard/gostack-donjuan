import { Alert } from 'react-native';
import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';

import { parseISO, formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import api from '~/services/api';

import { formatPrice } from '~/util/format';

import { createSaleSuccess, getSalesSuccess } from './actions';
import { clearCart } from '~/store/modules/cart/actions';

export function* getSales() {
  try {
    const response = yield call(api.get, 'sales');

    const repository = response.data.map(sale => ({
      ...sale,
      dateFormatted: formatDistance(parseISO(sale.createdAt), new Date(), {
        addSuffix: true,
        locale: ptBR,
      }),
      totalFormatted: formatPrice(sale.total),
    }));

    yield put(getSalesSuccess(repository));
  } catch (error) {
    Alert.alert('Ocorreu algum erro', 'Por favor tente novamente');
  }
}

export function* createSale({ payload }) {
  try {
    yield call(api.post, 'sales', payload.sale);
    yield put(clearCart());

    yield put(createSaleSuccess());

    Alert.alert('Compra realizada', 'Compra finalizada com sucesso!');
  } catch (error) {
    Alert.alert('Ocorreu algum erro', 'Por favor tente novamente');
  }
}

export default all([
  takeLatest('@sales/GET_SALES_REQUEST', getSales),
  takeLatest('@sales/CREATE_SALES_REQUEST', createSale),
]);
