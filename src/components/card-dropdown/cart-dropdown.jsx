import React from "react";

import { connect } from "react-redux";

import CustomButton from "./../custom-button/custom-button.component";
import styles from "./cart-dropdown.module.scss";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

const CartDropdown = ({ cartItems, history }) => (
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

    <CustomButton onClick={() => history.push("/checkout")}>
      CHECKOUT NOW
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
