import Immutable from 'seamless-immutable';

const initialState = Immutable({
  data: [],
  selected: null,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case '@products/GET_PRODUCTS_SUCCESS':
      return state.merge({ data: action.payload.data, loading: false });

    case '@products/SELECT':
      return state.merge({ selected: action.payload.product });

    default:
      return state;
  }
}
