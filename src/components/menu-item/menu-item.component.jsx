import React from "react";
import styles from "./menu-item.module.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${styles[size]} ${styles.menuItem}`}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};
export default MenuItem;
