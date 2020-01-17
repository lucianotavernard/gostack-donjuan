export function getSalesRequest() {
  return {
    type: '@sales/GET_SALES_REQUEST',
  };
}

export function getSalesSuccess(data) {
  return {
    type: '@sales/GET_SALES_SUCCESS',
    payload: {
      data,
    },
  };
}

export function createSaleRequest(sale) {
  return {
    type: '@sales/CREATE_SALES_REQUEST',
    payload: {
      sale,
    },
  };
}

export function createSaleSuccess() {
  return {
    type: '@sales/CREATE_SALES_SUCCESS',
  };
}
