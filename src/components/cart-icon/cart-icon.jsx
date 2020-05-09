import React from "react";
import styles from "./cart-icon.module.scss";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart.action";

const CartIcon = ({ toggleDropdown }) => (
  <div className={styles.cartIcon} onClick={toggleDropdown}>
    <ShoppingCart className={styles.shoppingIcon} />
    <span className={styles.itemCount}>0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => {
    dispatch(toggleCartDropdown());
  },
});

export default connect(null, mapDispatchToProps)(CartIcon);
