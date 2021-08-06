import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const history = useHistory();
  const handleProceedCheckOut = () => {
    history.push("/shipment");
  };
  const [cart, setCart] = useState([]);
  const handleRemoveProduct = (product) => {
    const remainingProduct = cart.filter((pd) => pd !== product);
    setCart(remainingProduct);
    removeFromDatabaseCart(product.id);
  };
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productValues = Object.values(savedCart);
    setCart(productValues);
  }, []);
  return (
    <div className="twin-container">
      <div className="product-container">
        {cart.map((pd) => (
          <ReviewItem
            key={pd.key}
            showAddToCard={true}
            handleRemoveProduct={handleRemoveProduct}
            product={pd}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handleProceedCheckOut} className="main-button">
            {" "}
            Proceed CheckOut
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
