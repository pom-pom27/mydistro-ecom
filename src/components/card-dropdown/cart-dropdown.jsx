import React from "react";
import CustomButton from "./../custom-button/custom-button.component";
import styles from "./cart-dropdown.module.scss";

const CartDropdown = () => (
  <div className={styles.cartDropdown}>
    <div className={styles.cartItems}></div>
    <CustomButton>CHECKOUT NOW</CustomButton>
  </div>
);

export default CartDropdown;
