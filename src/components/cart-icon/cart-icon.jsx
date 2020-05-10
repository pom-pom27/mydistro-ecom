import React from "react";
import styles from "./cart-icon.module.scss";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { toggleCartDropdown } from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleDropdown, itemCartCount }) => (
  <div className={styles.cartIcon} onClick={toggleDropdown}>
    <ShoppingCart className={styles.shoppingIcon} />
    <span className={styles.itemCount}>{itemCartCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCartCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => {
    dispatch(toggleCartDropdown());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
