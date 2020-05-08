import CartType from "./cart.type";

const INITIAL_STATE = {
  hidden: false,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartType.TOGGLE_HIDDEN_DROPDOWN:
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};

export default CartReducer;
