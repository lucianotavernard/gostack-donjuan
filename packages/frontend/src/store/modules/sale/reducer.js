const initialState = {
  data: [],
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case '@sales/GET_SALES_SUCCESS':
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
}
