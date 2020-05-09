import CartType from "./cart.type";

export const toggleCartDropdown = () => ({
  type: CartType.TOGGLE_HIDDEN_DROPDOWN,
});

export const addCartItem = (item) => ({
  type: CartType.ADD_CART_ITEM,
  payload: item,
});
