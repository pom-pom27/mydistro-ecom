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

    default:
      return state;
  }
};

export default CartReducer;
