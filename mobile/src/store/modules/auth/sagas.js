import { Alert } from 'react-native';
import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';

import { signInSuccess } from './actions';

export function* init() {
  const user = yield call([AsyncStorage, 'getItem'], '@Pizzaria:user');
  const token = yield call([AsyncStorage, 'getItem'], '@Pizzaria:token');

  if (token && user) {
    const data = JSON.parse(user);
    yield put(signInSuccess(data, token));
  }
}

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });
    const { user, token } = response.data;

    yield call([AsyncStorage, 'setItem'], '@Pizzaria:user', JSON.stringify(user));
    yield call([AsyncStorage, 'setItem'], '@Pizzaria:token', token);

    yield put(signInSuccess(response.data.user, response.data.token));
  } catch (error) {
    Alert.alert('Error no login', 'Verifique seu email e/ou senha!');
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', { name, email, password });

    Alert.alert('Sucesso!', 'Cadastro realizado com sucesso!');
  } catch (error) {
    Alert.alert('Error no cadastro', 'Verifique suas informações!');
  }
}

export function* signOut() {
  yield call([AsyncStorage, 'clear']);
}

export default all([
  init(),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
