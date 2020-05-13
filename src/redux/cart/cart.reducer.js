import CartType from "./cart.type";
import { groupingCartItems } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartType.TOGGLE_HIDDEN_DROPDOWN:
      return { ...state, hidden: !state.hidden };

    case CartType.ADD_CART_ITEM:
      // const prevState = [...state.cartItems];
      // if (prevState.includes(action.payload)) {
      //   return {
      //     ...state,
      //     cartItems: [[action.payload]],
      //   };
      // }
      return {
        ...state,
        cartItems: groupingCartItems(state.cartItems, action.payload),
      };

    case CartType.REMOVE_ITEM_FROM_CHECKOUT:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default CartReducer;
