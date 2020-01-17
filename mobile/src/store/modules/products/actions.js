export function getProductsRequest() {
  return {
    type: '@products/GET_PRODUCTS_REQUEST',
  };
}

export function getProductsSuccess(data) {
  return {
    type: '@products/GET_PRODUCTS_SUCCESS',
    payload: {
      data,
    },
  };
}

export function selectProduct(product) {
  return {
    type: '@products/SELECT',
    payload: {
      product,
    },
  };
}
