import { type CartStore } from '.';

export const selectCartData = (state: CartStore) => state.cartData;
export const selectLoading = (state: CartStore) => state.loading;
export const selectSetAddCart = (state: CartStore) => state.setAddCart;
export const selectRemoveFromCart = (state: CartStore) => state.removeFromCart;
export const selectIncreaseProductCount = (state: CartStore) =>
  state.increaseProductCount;
export const selectReduceProductCount = (state: CartStore) =>
  state.reduceProductCount;
export const selectClearCart = (state: CartStore) => state.clearCart;
export const selectSetLoading = (state: CartStore) => state.setLoading;
