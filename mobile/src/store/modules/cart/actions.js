export function addProduct(product) {
  return {
    type: '@cart/ADD',
    payload: { product },
  };
}

export function removeProduct(product) {
  return {
    type: '@cart/REMOVE',
    payload: { product },
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    payload: { id, amount },
  };
}

export function clearCart() {
  return {
    type: '@cart/CLEAR',
  };
}
