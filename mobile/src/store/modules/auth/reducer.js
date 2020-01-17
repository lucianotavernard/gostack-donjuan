import Immutable from 'seamless-immutable';

const initialState = Immutable({
  signed: false,
  token: null,
  user: null,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return state.merge({ signed: true, ...action.payload });

    case '@auth/SIGN_OUT':
      return state.merge({ signed: false, token: null, user: null });

    default:
      return state;
  }
}
