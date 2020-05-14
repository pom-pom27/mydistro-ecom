import React from "react";
import styles from "./checkout.module.scss";
import {
  removeCartItem,
  removeItemCheckout,
  addCartItem,
} from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CheckoutItem = ({
  cartItem,
  removeItem,
  addItem,
  removeItemCheckout,
}) => {
  const { imageUrl, price, name, quantity } = cartItem;
  return (
    <div className={styles.checkoutItem}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="cart item" />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>
        <span
          className={styles.arrow}
          onClick={() => removeItemCheckout(cartItem)}
        >
          &#10094;
        </span>
        <div className={styles.value}>{quantity}</div>
        <span className={styles.arrow} onClick={() => addItem(cartItem)}>
          &#10095;
        </span>
      </span>
      <span className={styles.price}>{price}</span>
      <div className={styles.removeButton} onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeCartItem(item)),
  addItem: (item) => dispatch(addCartItem(item)),
  removeItemCheckout: (item) => dispatch(removeItemCheckout(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
