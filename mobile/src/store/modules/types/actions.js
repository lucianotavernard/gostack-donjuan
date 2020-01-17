export function getTypesRequest() {
  return {
    type: '@types/GET_TYPES_REQUEST',
  };
}

export function getTypesSuccess(data) {
  return {
    type: '@types/GET_TYPES_SUCCESS',
    payload: {
      data,
    },
  };
}

export function selectType(type) {
  return {
    type: '@types/SELECT',
    payload: {
      type,
    },
  };
}
