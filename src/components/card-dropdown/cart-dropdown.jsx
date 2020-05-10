import React from "react";

import { connect } from "react-redux";

import CustomButton from "./../custom-button/custom-button.component";
import styles from "./cart-dropdown.module.scss";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartDropdown = ({ cartItems }) => (
  <div className={styles.cartDropdown}>
    <div className={styles.cartItems}>
      {cartItems.map((cartItem) => (
        <CartItem item={cartItem} key={cartItem.id} />
      ))}
    </div>

    <CustomButton>CHECKOUT NOW</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
