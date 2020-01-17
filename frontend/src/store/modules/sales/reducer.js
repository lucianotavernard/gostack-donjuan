import Immutable from 'seamless-immutable';

const initialState = Immutable({
  data: [],
});

export default function auth(state = initialState, action) {
  switch (action.type) {
    case '@sales/GET_SALES_SUCCESS':
      return state.merge({ data: action.payload.data });

    default:
      return state;
  }
}
