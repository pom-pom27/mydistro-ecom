import React from "react";
import styles from "./checkout.module.scss";
import { removeCartItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CheckoutItem = ({ cartItem, removeItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;
  return (
    <div className={styles.checkoutItem}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="cart item" />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>{quantity}</span>
      <span className={styles.price}>{price}</span>
      <div className={styles.removeButton} onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeCartItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
