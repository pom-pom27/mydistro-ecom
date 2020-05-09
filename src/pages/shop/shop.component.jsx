import React, { useState } from "react";
import SHOP_DATA from "./shop_data";
import styles from "./shop.module.scss";
import CollectionPreview from "../../components/collection_preview/collection-preview.component";

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);

  return (
    <div className={styles.shopPage}>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
