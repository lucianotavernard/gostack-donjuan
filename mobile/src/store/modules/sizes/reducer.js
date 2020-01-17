import Immutable from 'seamless-immutable';

const initialState = Immutable({
  data: [],
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case '@sizes/GET_SIZES_SUCCESS':
      return state.merge({ data: action.payload.data });

    default:
      return state;
  }
}
