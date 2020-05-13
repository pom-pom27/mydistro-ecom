import { createSelector } from "reselect";

//get the whole state and just return slice of we want which is cart object (input selector)
const selectCart = (state) => state.cart;

//memoize selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedPrice, cartItem) =>
      accumulatedPrice + cartItem.price * cartItem.quantity,
    0
  )
);
