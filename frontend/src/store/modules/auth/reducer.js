import Immutable from 'seamless-immutable';

const initialState = Immutable({
  signed: !!localStorage.getItem('@pizzaria:token') || false,
  token: localStorage.getItem('@pizzaria:token') || null,
  user: JSON.parse(localStorage.getItem('@pizzaria:user')) || null,
});

export default function auth(state = initialState, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      const { user, token } = action.payload;
      return state.merge({ signed: true, user, token });

    case '@auth/SIGN_OUT':
      return state.merge({ signed: false, token: null, user: null });

    default:
      return state;
  }
}
