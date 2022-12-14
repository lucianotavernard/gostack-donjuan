const initialState = {
  data: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case '@cart/ADD': {
      const productExists = state.data.find(
        (product) => product.id === action.payload.product.id
      );

      if (productExists) {
        const amount = productExists.amount + 1;

        return {
          ...state,
          data: state.data.map((product) =>
            product.id === productExists.id ? { ...product, amount } : product
          ),
        };
      }

      return {
        ...state,
        data: [...state.data, { ...action.payload.product, amount: 1 }],
      };
    }

    case '@cart/REMOVE':
      return {
        ...state,
        data: state.data.filter(
          (product) => product.id !== action.payload.product.id
        ),
      };

    case '@cart/UPDATE_AMOUNT': {
      if (action.payload.amount < 1) return state;

      return {
        ...state,
        data: state.data.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                amount: action.payload.amount,
              }
            : product
        ),
      };
    }

    case '@cart/CLEAR': {
      return {
        data: [],
      };
    }

    default:
      return state;
  }
}
