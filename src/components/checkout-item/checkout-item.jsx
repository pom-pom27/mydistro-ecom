import React from "react";
import styles from "./checkout.module.scss";

const CheckoutItem = ({ cartItem: { imageUrl, price, name, quantity } }) => (
  <div className={styles.checkoutItem}>
    <div className={styles.imageContainer}>
      <img src={imageUrl} alt="cart item" />
    </div>
    <span className={styles.name}>{name}</span>
    <span className={styles.quantity}>{quantity}</span>
    <span className={styles.price}>{price}</span>
    <div className={styles.removeButton}>&#10005;</div>
  </div>
);

export default CheckoutItem;
