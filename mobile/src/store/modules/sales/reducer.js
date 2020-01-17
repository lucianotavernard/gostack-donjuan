import Immutable from 'seamless-immutable';

const initialState = Immutable({
  data: [],
  loading: false,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case '@sales/CREATE_SALES_REQUEST':
      return state.merge({ loading: true });

    case '@sales/CREATE_SALES_SUCCESS':
      return state.merge({ loading: false });

    case '@sales/GET_SALES_SUCCESS':
      return state.merge({ data: action.payload.data });

    default:
      return state;
  }
}
