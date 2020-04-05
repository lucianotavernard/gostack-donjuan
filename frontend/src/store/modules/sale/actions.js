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
