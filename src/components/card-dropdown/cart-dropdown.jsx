import React from "react";

import { connect } from "react-redux";

import CustomButton from "./../custom-button/custom-button.component";
import styles from "./cart-dropdown.module.scss";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartDropdown } from "../../redux/cart/cart.action";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className={styles.cartDropdown}>
    <div className={styles.cartItems}>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem item={cartItem} key={cartItem.id} />
        ))
      ) : (
        <span className={styles.noCartItem}>Your cart is still empty.</span>
      )}
    </div>

    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartDropdown());
      }}
    >
      CHECKOUT NOW
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
//if u not explicitly create dispatch method connect automatically pas dispatch into props
export default withRouter(connect(mapStateToProps)(CartDropdown));
