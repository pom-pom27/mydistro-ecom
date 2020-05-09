import React from "react";
import { connect } from "react-redux";
import "./collection-item.scss";
import CustomButton from "../custom-button/custom-button.component";

import { addCartItem } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collectionItem">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collectionFooter">
        <span className="name">{name}</span>
        <span>$ {price}</span>
      </div>
      <CustomButton onClick={() => addCartItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
