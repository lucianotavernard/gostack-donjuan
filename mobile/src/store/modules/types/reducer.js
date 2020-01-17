import Immutable from 'seamless-immutable';

const initialState = Immutable({
  data: [],
  selected: null,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case '@types/GET_TYPES_SUCCESS':
      return state.merge({ data: action.payload.data });

    case '@types/SELECT':
      return state.merge({ selected: action.payload.type });

    default:
      return state;
  }
}
