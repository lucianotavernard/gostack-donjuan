import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';

import { formatDistance, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/esm/locale';

import { formatPrice } from '~/util/format';

import { toast } from 'react-toastify';

import api from '~/services/api';

import { getSalesSuccess } from './actions';

export function* getSales() {
  try {
    const response = yield call(api.get, 'sales');

    const repository = response.data.map(sale => ({
      ...sale,
      totalFormatted: formatPrice(sale.total),
      createdAtFormatted: formatDistance(parseISO(sale.createdAt), new Date(), {
        addSuffix: true,
        locale: ptBR,
      }),
    }));

    yield put(getSalesSuccess(repository));
  } catch (error) {
    toast.error('Ocorreu algum erro, Por favor tente novamente');
  }
}

export default all([takeLatest('@sales/GET_SALES_REQUEST', getSales)]);
