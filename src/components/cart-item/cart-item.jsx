import React from "react";
import styles from "./cart-item.module.scss";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className={styles.cartItem}>
    <img src={imageUrl} alt="product cart" />
    <div className={styles.itemDetails}>
      <span className={styles.name}>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
