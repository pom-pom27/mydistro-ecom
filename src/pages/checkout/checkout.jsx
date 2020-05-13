import React from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import styles from "./checkout.module.scss";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item";

const Checkout = ({ cartItems, totalPrice }) => (
  <div className={styles.checkout}>
    <div className={styles.checkoutHeader}>
      <div className={styles.headerBlock}>
        <span>Product</span>
      </div>
      <div className={styles.headerBlock}>
        <span>Description</span>
      </div>
      <div className={styles.headerBlock}>
        <span>Quantity</span>
      </div>
      <div className={styles.headerBlock}>
        <span>Price</span>
      </div>
      <div className={styles.headerBlock}>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className={styles.total}>TOTAL: Rp.{totalPrice}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice,
});

export default connect(mapStateToProps)(Checkout);
