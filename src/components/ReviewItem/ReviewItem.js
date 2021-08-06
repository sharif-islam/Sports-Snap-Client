import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { name, price, imageURL, _id } = props.product;
  return (
    <div className="product">
      <div className="product-image">
        <img src={imageURL} alt="" />
      </div>
      <div style={{ paddingLeft: "50px" }}>
        <h1 style={{ marginTop: "30px" }}>{name}</h1>
        <h3 className="remove-price">$ {price}</h3>
        {props.showAddToCard && (
          <button
            onClick={() => props.handleRemoveProduct(props.product)}
            className="main-button"
          >
            Remove Item
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewItem;
