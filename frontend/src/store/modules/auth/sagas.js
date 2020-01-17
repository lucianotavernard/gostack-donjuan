import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    localStorage.setItem('@pizzaria:token', response.data.token);
    localStorage.setItem('@pizzaria:user', JSON.stringify(response.data.user));

    yield put(signInSuccess(response.data.user, response.data.token));

    history.push('/');
  } catch (error) {
    toast.error('Verifique seu email e/ou senha!');
  }
}

export function signOut() {
  localStorage.removeItem('@pizzaria:token');
  localStorage.removeItem('@pizzaria:user');

  history.push('/signin');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
