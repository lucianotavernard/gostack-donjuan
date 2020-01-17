export function getSizesRequest() {
  return {
    type: '@sizes/GET_SIZES_REQUEST',
  };
}

export function getSizesSuccess(data) {
  return {
    type: '@sizes/GET_SIZES_SUCCESS',
    payload: {
      data,
    },
  };
}
